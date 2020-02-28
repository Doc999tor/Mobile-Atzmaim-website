import { h, Component } from 'preact'
import BusinessTypes from '../business_types'
import Navigation from '../navigation'
import Features from '../features'
import Hero from '../hero'
import Pricing from '../pricing'
import Feedback from '../feedback'

export default class Main extends Component {
	state = {
		animation: false,
		activeLink: 'hero',
		svgData: []
	}

	componentDidMount = () => {
		const arr = []
		const promises = this.props.config.modules.features.data.map(feature => {
			return fetch(`${this.props.config.urls.media_features}${feature.icon}`)
				.then(response => {
					if (response.status === 200) return response.text()
				})
				.then(svg => {
					arr.push({ name: feature.name, svg })
				})
		})
		Promise.all(promises).then(() => {
			this.setState({
				svgData: [...arr]
			})
		}, reason => {
			console.log(reason)
		})
		const blockID = location.hash && location.hash.substr(1)
		if (blockID) {
			setTimeout(() => {
				document.getElementById(blockID).scrollIntoView({ block: 'start' })
			}, 0)
		}
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		if (nextState.animation === this.state.animation  && this.state.svgData.length > 0) return false
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

	render ({ translations, config }) {
		const possibleKeys = ['hero', 'features', 'business_types', 'pricing', 'feedback']
		const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
	  const objSplitLoadingComponents = {
	    hero: <Hero translations={translations} config={config} iconsData={this.state.svgData} startAnimation={this.startAnimation} animation={this.state.animation} activeLink={this.state.activeLink} />,
	    features: <Features translations={translations} config={config} iconsData={this.state.svgData} secondAnimation={this.state.animation} activeLink={this.state.activeLink} />,
	    business_types: <BusinessTypes translations={translations} config={config} animation={this.state.animation} activeLink={this.state.activeLink} />,
	    feedback: <Feedback translations={translations} config={config} animation={this.state.animation} activeLink={this.state.activeLink} />,
	    pricing: <Pricing translations={translations} config={config} animation={this.state.animation} activeLink={this.state.activeLink} />
		}
	  return (
	    <div id='main' class='main'>
	      {
	        componentsForRendering.map(i => objSplitLoadingComponents[i])
				}
	      <Navigation translations={translations} config={config} handleClickNav={this.handleClickNav} links={componentsForRendering} />
	    </div>
	  )
	}
}
