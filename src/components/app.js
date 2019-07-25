import { h, Component } from 'preact'
import Header from './header'
import Hero from './hero'
import Navigation from './navigation'
import Features from './features'
import BusinessTypes from './business_types'
import Pricing from './pricing'
import Feedback from './feedback'

export default class App extends Component {
	componentDidMount = () => document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
	render() {
		const possibleKeys = [ 'hero', 'features', 'business_types', 'pricing', 'feedback']
		const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
	  const objSplitLoadingComponents = {
	    hero: <Hero />,
	    features: <Features />,
	    business_types: <BusinessTypes />,
	    feedback: <Feedback />,
	    pricing: <Pricing />
	  }
	  return (
	    <div id="app">
	      <Header />
	      {
	        componentsForRendering.map(i => objSplitLoadingComponents[i])
	      }
	      <Navigation links={componentsForRendering} />
	    </div>
	  )
	}
}
