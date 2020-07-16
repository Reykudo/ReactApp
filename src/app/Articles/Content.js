import React, {Component} from 'react';
import Article from './Article';
import './css/Content.css';
import {getArticles} from '../Api/Api';

class Content extends Component {

	constructor(props) {
		super(props);
		this.state = {loading: true, articles: []};
		this.ref = React.createRef();
	}
	// одинаковую логику надо выносить в функцию
	async loadArticles(){
		// Лучше использовать async/await вместо then
		const response = await getArticles() //Здесь должно подгружаться другое, но что есть то есть,
		//поэтому и key'ев нет, id-ники одинаковые
		const articles = response.data.map(a => ({...a, key: Math.random() })) // Если кея нет, то можно самому его добавить, но только на этапе получения данных
		this.setState((state) => ({loading: false, articles: [...state.articles, ...articles]}));
		// Если просто менять this.articles - перерендер не произойдёт. Если менять this.setState({articles...}) то произойдёт
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scroll.bind(this));
		this.loadArticles();
	}

	async scroll() {
		if(!this.state.loading && this.ref.current != null)
			if(this.ref.current.getBoundingClientRect().bottom < window.innerHeight + 5)
			{
				this.loadArticles();
			}
	}

	render () {
		return (
	  	<div className="Content" ref={this.ref}>

		  	{
				// лучше писать так
		  		!this.state.loading && this.state.articles.map(function(article) {
				return <Article
					key={article.key}
					id={article.id}
					type={article.type}
					name={article.name}
					content={article.content}
					img={article.img}
				/>
			})}
	  	</div>
	  	)
	}
}

export default Content;
