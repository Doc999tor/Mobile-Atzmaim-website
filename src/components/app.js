import { h, Component } from 'preact';
import Header from './header';
import Home from './home';
import Navigation from './navigation';
import Features from './features';
import ForWhom from './for_whom';
import Pricing from './pricing';
import Reviews from './reviews';

export default class App extends Component {
	componentDidMount = () => document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr';

	render() {
		return (
			<div id="app">
				<Header />
				<Home />
				<Features />
				<ForWhom />
				<Pricing />
				<Reviews />
				<Navigation />
			</div>
		);
	}
}
