import React, {Component} from 'react';
import './css/Page.css';
import Navbar from '../Navbar/Navbar';
import Content from '../Articles/Content';
import {getArticles} from '../Api/Api';
import {c, theme} from '../Resources/Resources';
import {ThemeContext} from '../Context/ThemeContext';
import {getPage} from '../Api/Api';

class Page extends Component {

	constructor(props) {
		super(props);
		this.state = {loading: true};
	}

	componentDidMount() {
		window.scrollTo(window.pageXOffset, 0);
		getPage(this.props.location.pageId).then(response => {
			this.page = response.data;
			this.setState({loading: false});
			});
	}

	render() {
		let name = '';
		let content = '';
		let img = '';
		if(!this.state.loading) {
			name = this.page.name;
			content = this.page.content;
			img = this.page.img;
		}
		return(
			<ThemeContext.Consumer>
				{({currTheme}) => (
				<div className="page-back">
					<Navbar solid={true} />
					<div className="page-img" style={{backgroundImage: 'url(' + img + ')'}}></div>
						<div className="page-content" style={{
							color: theme.pickColor(currTheme, c.light.add, c.dark.add),
							backgroundColor: theme.pickColor(currTheme, c.dark.add, c.light.main)
						}}>
							<div className="page-title">{name}</div>
							<div className="page-text">{content}</div>
						</div>
					<p className="title-text" style={{
						background: theme.pickColor(currTheme, c.dark.addLight, c.light.add),
						color: theme.pickColor(currTheme, c.white, c.dark.addLight)
					}}>Так же вам могут понравиться эти статьи</p>
					<Content/>
				</div>
				)}
			</ThemeContext.Consumer>
		)
	}
}

export default Page;