import { h, Component } from 'preact'
import BusinessTypes from '../business_types'
import { config } from '../../../components-lib/Home_website/config_ssr.js'
import Navigation from '../navigation'
import Features from '../features'
import Header from '../header'
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
		const promises = config.modules.features.data.map(feature => {
			return fetch(`${config.urls.media_features}${feature.icon}`)
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
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		if (nextState.animation === this.state.animation) return false
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
	    <div id='main' class='main'>
				<Header />
	      {
	        componentsForRendering.map(i => objSplitLoadingComponents[i])
				}
	      <Navigation handleClickNav={this.handleClickNav} links={componentsForRendering} />
	    </div>
	  )
	}
}
