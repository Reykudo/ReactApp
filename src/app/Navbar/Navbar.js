import React, {Component} from 'react';
import icon from './img/icon.png'
import './css/Navbar.css';
import {ThemeContext} from '../Context/ThemeContext';
import {c, theme} from '../Resources/Resources';
import {Link} from 'react-router-dom';

class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {hideNav: true};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scroll.bind(this));
	}

	scroll() {
		this.setState({hideNav: window.pageYOffset < 1});
	}

	render() {
		let pd = 8;
		let bc = c.blue.Main;
		let sh = '0px 0px 10px 4px rgba(0,0,0,0.65)';
		let blank = ''
		
		if(this.props.startPage)
			if(this.state.hideNav) {
				pd = 40;
				bc = c.tp;
				sh = 'none';
				blank = '';
			}

		if(this.props.solid)
		{
			blank = <div id="blank-nav" />
		}

		return (
			<>
				<div id="nav" style={{background: bc, padding: pd + 'px', boxShadow: sh}}>
					<Link to="/" id="nav-a">
						<table>
							<tbody>
								<tr id="company">
									<td style={{verticalAlign: 'middle', border: 'none'}}><img id="icon" src={icon}/></td>
									<td style={{verticalAlign: 'middle', border: 'none'}}>
										<p id="company-name">journa<span style={{color: c.yellow.main}}>лист</span></p>
									</td>
								</tr>
							</tbody>

						</table>
					</Link>
					<ul id="link-list">
						<ThemeContext.Consumer>
						{({currTheme, themeChange}) => (
							// возможно подобное надо выносить в dummy компоненты и переиспользовать по всему проекту
							<li><button id="theme-button" onClick={themeChange} style={{
								background: theme.pickColor(currTheme, c.blue.dark, c.blue.light)
							}}>
								<i 
									className={currTheme === theme.dark ? "far fa-moon" : "fas fa-sun"} 
									style={{float: currTheme === theme.dark ? 'left' : 'right'}}
								/>
							</button></li>
						)}
						</ThemeContext.Consumer>
						<li><Link to="#" style={{color: c.yellow.main}}><i className="fas fa-pen" style={{marginRight: '8px'}}></i>Новая статья</Link></li>
						<li><Link to="#"><i className="fas fa-bell"></i></Link></li>
						<li><Link to="#">Войти</Link></li>
						<li><Link to="#" className="a-button">Зарегистрироваться</Link></li>
					</ul>
				</div>
				{blank}
			</>
		)
	}
}

export default Navbar;
