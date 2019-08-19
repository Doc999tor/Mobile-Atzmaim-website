import { h, Component } from 'preact'
import Hero from '../hero'
import Navigation from '../navigation'
import Features from '../features'
import BusinessTypes from '../business_types'
import Pricing from '../pricing'
import Feedback from '../feedback'

export default class Main extends Component {
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
		console.log('config.baseUrl + /error', config.baseUrl + '/error')
	  return (
	    <div id="main">
	      {
	        componentsForRendering.map(i => objSplitLoadingComponents[i])
				}
	      <Navigation links={componentsForRendering} />
	    </div>
	  )
	}
}
