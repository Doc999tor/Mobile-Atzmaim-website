import { Router } from 'preact-router'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { h, Component } from 'preact'
import Redirect from './redirect'
import Header from './header'
import Main from './main'
import ErrorPage from './error_page'
import ContactUs from './contact_us'
import PricingDetailInfo from '../components/pricing/component/detailInfo'

export default class App extends Component {
	state = {
		referer: 'home_page',
		active: false
	}

	componentDidMount () {
		document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
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

	render () {
	  return (
	    <div id='app'>
				<Header active={this.state.active} menuOnOff={this.menuOnOff} closeMenu={this.closeMenu} referer={this.state.referer} />
				<Router>
					<Main path={config.baseUrl} />
					<ErrorPage path={config.baseUrl + '/error'} referer={this.state.referer} />
					<PricingDetailInfo path={config.baseUrl + '/pricing'} />
					{config.urls.contact_us && <ContactUs path={config.baseUrl + '/contact_us'} active={this.state.active} />}
					<Redirect path='/' to={config.baseUrl} />
				</Router>
	    </div>
	  )
	}
}
