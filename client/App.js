import { h, Component } from 'preact'
import { Router, route } from 'preact-router'
// import AsyncRoute from 'preact-async-route'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import qs from 'qs'
import { config }from '../components-lib/Home_website/config_ssr.js'
import Header from './components/header'
import Main from './components/main'
import ErrorPage from './components/error_page'
import ContactUs from './components/contact_us'

export class App extends Component {
	state = {
		referer: 'home_page',
		active: false
	}

	componentDidMount = () => {
		document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
		const obj = qs.parse(location.search.slice(1))
		if (obj.page === 'error') {
			if (obj.referer) {
				this.setState({ referer: obj.referer }, () => route(config.baseUrl + '/error', true))
			} else route(config.baseUrl + '/error', true)
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

	// getMain = (url, cb, props) => {
	// 	const component = import('./components/main')
	// 	cb({component: component.default})
	// }
	// getError = (url, cb, props) => {
	// 	const component = import('./components/error_page')
	// 	cb({component: component.default})
	// }
	// getContactUs = (url, cb, props) => {
	// 	const component = import('./components/contact_us')
	// 	cb({component: component.default})
	// }
	render () {
		return (
		<div id="app">
				<Header active={this.state.active}
					menuOnOff={this.menuOnOff}
					closeMenu={this.closeMenu}
					referer={this.state.referer} />
				<Router>
					<Main path={config.baseUrl + '/'} />
          <ErrorPage referer={this.state.referer} path={config.baseUrl + '/error'} />
					<ContactUs path={config.urls.contact_us} active={this.state.active} closeMenu={this.closeMenu} />
					{/* <AsyncRoute
						path={config.baseUrl + '/'}
						getComponent={this.getMain} />
          <AsyncRoute
						referer={this.state.referer}
						path={config.baseUrl + '/error'}
						getComponent={this.getError}
					/>
					<AsyncRoute
						path={config.urls.contact_us}
						active={this.state.active}
						closeMenu={this.closeMenu}
						getComponent={this.getContactUs}
					/> */}
				</Router>
	    </div>
		)
	}
}
