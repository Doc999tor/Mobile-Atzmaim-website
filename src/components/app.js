import { h, Component } from 'preact';
import { Router, route } from 'preact-router';

import Header from './header';
import Home from './home';
import Navigation from './navigation';
import Features from './features';
import ForWhom from './for_whom';
import Pricing from './pricing';
import Reviews from './reviews';

export default class App extends Component {
	state = {
		match: ''
	}
	componentDidMount = () => document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr';
	handleRoute = e => {
		this.setState({match: e.url});
		this.currentUrl = e.url;
	};

	render() {
		const { match } = this.state;
		return (
			<div id="app">
				<Header />
				<Home />
				<Features />
				<ForWhom />
				<Pricing />
				<Reviews />
				<Navigation match={match} />
			</div>
		);
	}
}
