import React, {Component} from 'react';
import OneChannel from './OneChannel';
import ChannelButton from './ChannelButton';
import './css/Channels.css';
import {getChannels} from '../Api/Api';
import {dir} from '../Resources/Resources';

class Channels extends Component {

	constructor(props) {
		super(props);
		this.state = {loading: true};
	}
	
	componentDidMount() {
		getChannels().then(response => {
			this.channels = response.data;
			this.setState({loading: false});
			});
	}

	render() {
		let channels = '';
		if(!this.state.loading) {
			channels = this.channels.map(function(channel, i) {
				return <OneChannel
					key={channel.id} 
					name={channel.name} 
					content={channel.content} 
					img={channel.img} 
					isFirst={i === 0 ? true : false}
				/>
			}) 
		}
		return (
			<div id="channels-container">
				<ChannelButton dir={dir.left} />
				<div id="channels">
					{channels}
				</div>
				<ChannelButton dir={dir.right} />
			</div>
		)
	}
}

export default Channels;