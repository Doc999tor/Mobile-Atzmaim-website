import { h, Component } from 'preact'
import { config }from '../../../config.js';
import Hero from '../hero'
import Navigation from '../navigation'
// import Features from '../features'
// import BusinessTypes from '../business_types'
import Header from '../header'
// import Pricing from '../pricing'
// import Feedback from '../feedback'

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
			 }, 400)
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
	  //   features: <Features secondAnimation={this.state.animation} activeLink={this.state.activeLink} />,
	  //   business_types: <BusinessTypes animation={this.state.animation} activeLink={this.state.activeLink} />,
	  //   feedback: <Feedback animation={this.state.animation} activeLink={this.state.activeLink} />,
	  //   pricing: <Pricing animation={this.state.animation} activeLink={this.state.activeLink} />
		}
	  return (
	    <div id='main'>
				<Header mobile />
	      {
	        componentsForRendering.map(i => objSplitLoadingComponents[i])
				}
	      <Navigation handleClickNav={this.handleClickNav} links={componentsForRendering} />
	    </div>
	  )
	}
}
