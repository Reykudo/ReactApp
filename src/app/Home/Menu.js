import React, {Component} from 'react';
import './css/Menu.css';

class Menu extends Component {

	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.bottom = 0;
		this.scrollDown = this.scrollDown.bind(this);
	}

	componentDidMount() {
    	this.bottom = this.ref.current.getBoundingClientRect().bottom;
	}

	scrollDown() {
		window.scrollTo(window.pageXOffset, this.bottom);
	}

	render() {
		return (
		    <div className="Menu" ref={this.ref}>
		        <div id="header-background" />
		        <div id="header-background-black" />
				<div id="header">
					<div id="blank" />
					<div id="menu-text">
						<p id="main-text1">Умеешь писать статьи?</p>
						<p id="main-text2">Пиши статьи, читай и оценивай чужие статьи. <br />
						<span style={{color: "#FFC300"}}> Ты</span> нужен нашему сообществу!</p>
					</div>
					<button id="button-bottom" href="#" onClick={() => this.scrollDown()}>
						К статьям<i className="fas fa-arrow-down"></i>
					</button>
				</div>
		    </div>
	    )
	}
}

export default Menu;