import React, {Component} from 'react';
import './css/Page404.css'
import Navbar from '../Navbar/Navbar';
import {ThemeContext} from '../Context/ThemeContext';
import {c, theme} from '../Resources/Resources'

class Page404 extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Navbar/>
				<ThemeContext.Consumer>
				{({currTheme}) => (
					<div id="error-page" style={{color: theme.pickColor(currTheme, c.light.main, c.dark.add)}}>
						<table id="error-text">
							{/*не очень понял, зачем тут таблица с одной строкой и одним элементом*/}
							<tr><td>
								<div id="error-number">404</div>
								Страница не найдена
							</td></tr>
						</table>
					</div>
				)}
				</ThemeContext.Consumer>
			</>
		)
	}
}

export default Page404;
