import React, {Component} from 'react';
import './css/ChannelButton.css';
import {ThemeContext} from '../Context/ThemeContext';
import {dir, c, theme} from '../Resources/Resources';

class ChannelButton extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let text = <i class="fas fa-chevron-right"></i>
		if(this.props.dir === dir.left)
			text = <i class="fas fa-chevron-left"></i>
		return(
			<ThemeContext.Consumer>
				{({currTheme}) => (
				<table className="channel-button" style={{
					backgroundColor: theme.pickColor(currTheme, c.dark.main, c.dark.add),
					color: theme.pickColor(currTheme, c.light.add, c.light.add)
				}}>
					<tr className="ch-text">{text}</tr>
				</table>
				)}
			</ThemeContext.Consumer>
		)
	}
}

export default ChannelButton;