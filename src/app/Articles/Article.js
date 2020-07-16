import React, {Component} from 'react';
import './css/Article.css';
import {Link} from 'react-router-dom';

class Article extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		// не лучше ли вынести в state, чем вычислять в рендере? В рендере вообще должно быть минимум логики
		let width;
		switch(this.props.type) {
			case 'cm':
				width = 25;
				break;
			case 'cm-ad':
				width = 50;
				break;
			case 'ad':
				width = 50;
				break;
			default:
				width = 25;
				console.log("Wrong type");
				break;
		}
		return(
			<Link to={{pathname: "/page", pageId: this.props.id}} 
				className="article" 
				style={{backgroundImage: 'url(' + this.props.img + ')', width: width + '%'}}>
				<div className="text-container">
			  		<p className="article-name">{this.props.name}</p>
			  		<p className="article-content">{this.props.content}</p>
			  		<span className="open-text">Читать статью</span>
			  	</div>
		  	</Link>
		)
	}
}

export default Article;
