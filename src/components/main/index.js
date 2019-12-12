import { h, Component } from 'preact'
import Hero from '../hero'
import Navigation from '../navigation'
import Features from '../features'
import BusinessTypes from '../business_types'
import Header from '../header'
import Pricing from '../pricing'
import Feedback from '../feedback'

export default class Main extends Component {
	state = {
		animation: false,
		activeLink: 'hero',
		svgData: []
	}

	componentDidMount = () => {
		fetch(`/components-lib/Home_website/features/ic_calendar.svg`)
			.then(response => response.text())
			.then(svg => this.setState({ svg, svgData: [...svg] })
			)
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
	    hero: <Hero iconsData={this.state.svgData} startAnimation={this.startAnimation} animation={this.state.animation} activeLink={this.state.activeLink} />,
	    features: <Features iconsData={this.state.svgData} secondAnimation={this.state.animation} activeLink={this.state.activeLink} />,
	    business_types: <BusinessTypes animation={this.state.animation} activeLink={this.state.activeLink} />,
	    feedback: <Feedback animation={this.state.animation} activeLink={this.state.activeLink} />,
	    pricing: <Pricing animation={this.state.animation} activeLink={this.state.activeLink} />
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
