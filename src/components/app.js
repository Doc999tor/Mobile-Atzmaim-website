import { h, Component } from 'preact';
import Header from './header';
import Hero from './hero';
import Navigation from './navigation';
import Features from './features';
import BusinessTypes from './business_types';
import Pricing from './pricing';
import Feedback from './feedback';

export default class App extends Component {
	componentDidMount = () => document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr';

	splitLoadingComponents = moduleName => {
	  switch (moduleName) {
	    case 'hero':
	      return <Hero />
	    case 'features':
	      return <Features />
	    case 'business_types':
	      return <BusinessTypes />
	    case 'feedback':
	      return <Feedback />
	  }
	}

	render() {
		const possibleKeys = [ 'hero', 'features', 'business_types', 'feedback', ];
		const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
		console.log(componentsForRendering)

		return (
			<div id="app">
			<Header />
			{
			  componentsForRendering.map(this.splitLoadingComponents)
			}
			<Navigation links={ componentsForRendering } />
			</div>
		);
	}
}
				// <Home />
				// <Features />
				// <BusinessTypes />
				// <Pricing />
				// <Reviews />
