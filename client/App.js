import { h, Component } from 'preact'
import { Router, route } from 'preact-router'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import qs from 'qs'
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
		if (config) {
			document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
			const obj = qs.parse(location.search.slice(1))
			if (obj.page === 'error') {
				if (obj.referer) {
					this.setState({ referer: obj.referer }, () => route(config.baseUrl + '/error', true))
				} else route(config.baseUrl + '/error', true)
			}
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

	render (props) {
		let internalConfig = props.config || config
		const translations = props.translations || local_translations
		return (
		<div id="app">
				<Header
					translations={translations}
					config={internalConfig}
					active={this.state.active}
					menuOnOff={this.menuOnOff}
					closeMenu={this.closeMenu}
					referer={this.state.referer} />
				<Router {...props}>
					<Main translations={translations} config={internalConfig} path={internalConfig.baseUrl + '/'} />
          <ErrorPage translations={translations} config={internalConfig} referer={this.state.referer} path={internalConfig.baseUrl + '/error'} />
					<ContactUs translations={translations} config={internalConfig} path={internalConfig.urls.contact_us} active={this.state.active} />
				</Router>
	    </div>
		)
	}
}
