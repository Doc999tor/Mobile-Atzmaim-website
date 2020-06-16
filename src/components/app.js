import { h, Component } from 'preact'
import { Router, route } from 'preact-router'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Redirect from './redirect'
import Header from './header'
import Main from './main'
import ErrorPage from './error_page'
import ContactUs from './contact_us'
import PricingDetailInfo from '../components/pricing/component/detailInfo'

export default class App extends Component {
	state = {
		referer: 'home_page',
		switch_value: config.modules.pricing?.switch_bill_annually,
		active: false,
		closeAnimation: false
	}

	componentDidMount () {
		document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
	}

	menuOnOff = () => {
		const menu = document.getElementById('menu_modal')
		this.setState({ active: !this.state.active }, () => {
			disableBodyScroll(menu)
		})
	}

	closeMenu = () => {
		this.setState({
			closeAnimation: true
		}, () => {
			setTimeout(() => {
				this.setState({ closeAnimation: false, active: false  })
			}, 310)
		})
		clearAllBodyScrollLocks()
	}

	handleChangeReferer = referer => this.setState({ referer })

	handleChangeSwitch = () => this.setState(prevState => ({ switch_value: !prevState.switch_value }))

	handleChooseYearly = () => this.setState({ switch_value: true })

	handleChooseMonthly = () => this.setState({ switch_value: false })

	handleShowOpenPlan = priceName => {
		this.setState({ priceName }, () => {
			route(config.baseUrl + '/pricing')
		})
	}

	render () {
	  return (
	    <div id='app'>
				<Header active={this.state.active} menuOnOff={this.menuOnOff} closeAnimation={this.state.closeAnimation} closeMenu={this.closeMenu} referer={this.state.referer} />
				<Router>
					<Main path={config.baseUrl} handleChangeReferer={this.handleChangeReferer} switchValue={this.state.switch_value} handleShowOpenPlan={this.handleShowOpenPlan} handleChangeSwitch={this.handleChangeSwitch} handleChooseYearly={this.handleChooseYearly} handleChooseMonthly={this.handleChooseMonthly} />
					<ErrorPage path={config.baseUrl + '/error'} referer={this.state.referer} />
					<PricingDetailInfo handleShowOpenPlan={this.handleShowOpenPlan} priceName={this.state.priceName} path={config.baseUrl + '/pricing'} switchValue={this.state.switch_value} handleChangeSwitch={this.handleChangeSwitch} handleChooseYearly={this.handleChooseYearly} handleChooseMonthly={this.handleChooseMonthly} />
					{config.urls.contact_us && <ContactUs path={config.baseUrl + '/contact_us'} active={this.state.active} />}
					<Redirect path='/' to={config.baseUrl} />
				</Router>
	    </div>
	  )
	}
}
