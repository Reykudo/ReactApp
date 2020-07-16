import React, {Component} from 'react';
import './css/OneChannel.css';
import {ThemeContext} from '../Context/ThemeContext';
import {c, theme} from '../Resources/Resources';
import {Link} from 'react-router-dom';

class OneChannel extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ThemeContext.Consumer>
				{({currTheme}) => (
				<Link to="#" className="one-channel" style={{background: 'url(' + this.props.img + ')', 
					backgroundSize: 'cover', marginLeft: this.props.isFirst === true ? '0px' : '30px',
					boxShadow: currTheme === theme.dark ? '0 0 4px 1.5px ' + c.white : 'none'
				}}>
					<div className="channel-overlay">
						<p className="channel-name">{this.props.name}</p>
						<p className="channel-content">{this.props.content}</p>
					</div>
				</Link>
				)}
			</ThemeContext.Consumer>
		)
	}
}

export default OneChannel;