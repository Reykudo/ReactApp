import React, {Component} from 'react';
import './css/Home.css';
import Navbar from '../Navbar/Navbar';
import Menu from './Menu';
import Content from '../Articles/Content';
import Channels from '../Channels/Channels';
import {c, theme} from '../Resources/Resources';
import {ThemeContext} from '../Context/ThemeContext';

class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ThemeContext.Consumer>
			{({currTheme}) => (
				<div>
					<Navbar startPage={true}/>
					<Menu />
					<div className="title-text" style={{
						background: theme.pickColor(currTheme, c.dark.addLight, c.light.add),
						color: theme.pickColor(currTheme, c.white, c.dark.addLight)
					}}>Популярные категории</div>
					<Channels />
					<div className="title-text" style={{
						background: theme.pickColor(currTheme, c.dark.addLight, c.light.add),
						color: theme.pickColor(currTheme, c.white, c.dark.addLight)
					}}>Новые</div>
					<Content />
				</div>
			)}
			</ThemeContext.Consumer>
		)
	}
}

export default Home;