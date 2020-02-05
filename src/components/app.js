import { Router, route } from 'preact-router'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import AsyncRoute from 'preact-async-route'
import { h, Component } from 'preact'
import qs from 'qs'
import Header from './header'
// import Redirect from './redirect'

export default class App extends Component {
	state = {
		referer: 'home_page',
		active: false
	}

	componentDidMount = () => {
		document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
		const obj = qs.parse(location.search.slice(1))
		console.log('object')
		if (obj.page === 'error') {
			if (obj.referer) {
				this.setState({ referer: obj.referer }, () => route(config.baseUrl + '/error', true))
			} else route(config.baseUrl + '/error', true)
		}
	}

	handleRoute = e => {
		console.log('e.url', e.url)
		if (e.url !== config.baseUrl || e.url !== config.baseUrl + '/error' || config.urls.contact_us) {
			route(config.baseUrl, true)
		}
}

	menuOnOff = () => {
		this.setState({ active: !this.state.active }, () => {
			disableBodyScroll(document.querySelector('#menu_modal'))
		})
	}

	closeMenu = () => {
		this.setState({ active: false })
		clearAllBodyScrollLocks()
	}

	getMain = (url, cb, props) => import('./main').then(module => module.default)

	getError = (url, cb, props) => import('./error_page').then(module => module.default)

	getContactUs = (url, cb, props) => import('./contact_us').then(module => module.default)

	render () {
	  return (
	    <div id='app'>
				<Header active={this.state.active} menuOnOff={this.menuOnOff} closeMenu={this.closeMenu} referer={this.state.referer} />
				<Router onChange={this.handleRoute}>
					<AsyncRoute
						path={config.baseUrl}
						getComponent={this.getMain}
					/>
					<AsyncRoute
						path={config.baseUrl + '/error'}
						referer={this.state.referer}
						getComponent={this.getError}
					/>
					<AsyncRoute
						active={this.state.active}
						path={config.urls.contact_us}
						getComponent={this.getContactUs}
					/>
					{/* <Redirect path='/' to={config.baseUrl} /> */}
				</Router>
	    </div>
	  )
	}
}
