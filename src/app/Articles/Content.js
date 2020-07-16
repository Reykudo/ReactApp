import React, {Component} from 'react';
import Article from './Article';
import './css/Content.css';
import {getArticles} from '../Api/Api';

class Content extends Component {

	constructor(props) {
		super(props);
		this.state = {loading: true};
		this.ref = React.createRef();
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scroll.bind(this));
		getArticles().then(response => {
			this.articles = response.data;
			this.setState({loading: false});
			});
	}

	scroll() {
		if(!this.state.loading && this.ref.current != null)
			if(this.ref.current.getBoundingClientRect().bottom < window.innerHeight + 5)
			{
				getArticles().then(response => { //Здесь должно подгружаться другое, но что есть то есть, 
					//поэтому и key'ев нет, id-ники одинаковые
					this.articles = this.articles.concat(response.data);
					this.setState({loading: false});
					});
			}
	}

	render () {
		let articleElements = '';
		if(!this.state.loading) {
			articleElements = this.articles.map(function(article) {
				return <Article 
					id={article.id} 
					type={article.type} 
					name={article.name} 
					content={article.content} 
					img={article.img} 
				/>
			})
		}

		return (
	  	<div className="Content" ref={this.ref}>
		  	{articleElements}
	  	</div>
	  	)
	}
}

export default Content;