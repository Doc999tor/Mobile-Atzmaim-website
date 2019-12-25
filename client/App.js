import { Router, route } from 'preact-router'
import { config }from '../components-lib/Home_website/config_ssr.js'
import { h, Component } from 'preact'
import qs from 'qs'
import Main from './components/main'
import ErrorPage from './components/error_page'

export class App extends Component {
	state = {
		referer: 'home_page'
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

	render () {
		return (
		<div id="app">
				<Router>
					<Main path={config.baseUrl + '/'} />
          <ErrorPage referer={this.state.referer} path={config.baseUrl + '/error'} />
				</Router>
	    </div>
		)
	}
}
