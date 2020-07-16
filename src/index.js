import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Home from './app/Home/Home';
import Page from './app/Page/Page';
import Page404 from './app/Page404/Page404';
import * as serviceWorker from './serviceWorker';
import {ThemeContext} from './app/Context/ThemeContext';
import {c, theme} from './app/Resources/Resources';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {

	constructor(props) {
		super(props);

		this.themeChange = () => {
			this.setState(state => ({currTheme: state.currTheme === theme.dark ? theme.light : theme.dark}));
		}

		this.state = {currTheme: theme.dark, themeChange: this.themeChange};
	}

	render() {
		return (
			<Router>
				<ThemeContext.Provider value={this.state}>
					<div id="theme-root" style={{background: theme.pickColor(this.state.currTheme, c.dark.add, c.light.main)}}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/page" component={Page} />
							<Route component={Page404} />
						</Switch>
					</div>
				</ThemeContext.Provider>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();