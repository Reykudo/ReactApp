import React, {Component} from 'react';
import './css/ChannelButton.css';
import {ThemeContext} from '../Context/ThemeContext';
import {dir, c, theme} from '../Resources/Resources';

class ChannelButton extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		// Заменить на тернарный оператор, избавиться от переменной
		let text = <i className="fas fa-chevron-right"></i>
		if(this.props.dir === dir.left)
			text = <i className="fas fa-chevron-left"></i>
		return(
			<ThemeContext.Consumer>
				{({currTheme}) => (
				<table className="channel-button" style={{
					backgroundColor: theme.pickColor(currTheme, c.dark.main, c.dark.add),
					color: theme.pickColor(currTheme, c.light.add, c.light.add)
				}}>
					<tbody>

					<tr className="ch-text">
						<td>
							{text}
						</td>
					</tr>
					</tbody>
				</table>
				)}
			</ThemeContext.Consumer>
		)
	}
}

export default ChannelButton;
