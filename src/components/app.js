import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Navigation from './navigation';
import Features from './features';
import ForWhom from './for_whom';
import Pricing from './pricing';
import Reviews from './reviews';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Features path="/features" />
					<ForWhom path="/for_whom" />
					<Pricing path="/pricing" />
					<Reviews path="/reviews" />
				</Router>
				<Navigation />
			</div>
		);
	}
}
