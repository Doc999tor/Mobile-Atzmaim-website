import { h, Component } from 'preact'
import { route } from 'preact-router'
import qs from 'qs'
import Hero from '../hero'
import Navigation from '../navigation'
import Features from '../features'
import BusinessTypes from '../business_types'
import Pricing from '../pricing'
import Feedback from '../feedback'
import style from './main.less'

export default class Main extends Component {
	state = {
		animation: false,
		activeLink: 'hero',
		svgData: []
	}

	componentDidMount = () => {
		const obj = qs.parse(location.search.slice(1))
		if (obj.referer) this.props.handleChangeReferer(obj.referer)
		if (obj.page === 'error') route(config.baseUrl + config.urls.page_error, true)
		if (obj.page === 'contact_us') route(config.baseUrl + config.urls.page_contact_us, true)
		if (obj.page === 'pricing') route(config.baseUrl + config.urls.page_pricing, true)
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
		const blockID = location.hash && location.hash.substr(1)
		if (blockID) {
			setTimeout(() => {
				document.getElementById(blockID).scrollIntoView({ block: 'start' })
			}, 0)
		}
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
	    pricing: <Pricing handleShowOpenPlan={this.props.handleShowOpenPlan} switchValue={this.props.switchValue} handleChangeSwitch={this.props.handleChangeSwitch} handleChooseYearly={this.props.handleChooseYearly} handleChooseMonthly={this.props.handleChooseMonthly} animation={this.state.animation} activeLink={this.state.activeLink} />
		}
	  return (
	    <div id='main' class={style.main + ' ' + (this.state.showDetail ? '' : style.snap_scroll)}>
	      {
	        componentsForRendering.map(i => objSplitLoadingComponents[i])
				}
	      <Navigation handleClickNav={this.handleClickNav} links={componentsForRendering} />
	    </div>
	  )
	}
}
