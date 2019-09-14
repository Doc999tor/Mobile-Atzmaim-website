import { h, Component } from 'preact'
import Hero from '../hero'
import Navigation from '../navigation'
import Features from '../features'
import BusinessTypes from '../business_types'
import Pricing from '../pricing'
import Feedback from '../feedback'

export default class Main extends Component {
	state = {
		animation: false,
		activeLink: 'hero'
	}

	handleClickNav = val => {
		this.setState({ activeLink: val,
			animation: false
		 }, () => {
			 setTimeout(() => {
				this.setState({
					animation: true
				})
			 }, 300)
		})
	}

	startAnimation = () => {
		this.setState({
			animation: true
		})
	}

	render () {
		const possibleKeys = ['hero', 'features', 'business_types', 'pricing', 'feedback']
		const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
	  const objSplitLoadingComponents = {
	    hero: <Hero startAnimation={this.startAnimation} animation={this.state.animation} activeLink={this.state.activeLink} />,
	    features: <Features secondAnimation={this.state.animation} activeLink={this.state.activeLink} />,
	    business_types: <BusinessTypes />,
	    feedback: <Feedback />,
	    pricing: <Pricing />
		}
	  return (
	    <div id='main'>
	      {
	        componentsForRendering.map(i => objSplitLoadingComponents[i])
				}
	      <Navigation handleClickNav={this.handleClickNav} links={componentsForRendering} />
	    </div>
	  )
	}
}
