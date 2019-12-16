import { Router, route } from 'preact-router'
import AsyncRoute from 'preact-async-route'
import { h, Component } from 'preact'
import qs from 'qs'
import Main from './main'

export default class App extends Component {
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
					<AsyncRoute
						path={config.baseUrl + '/error'}
						referer={this.state.referer}
						getComponent={ () => import('./error_page').then(module => module.default) }
					/>
				</Router>
	    </div>
	  )
	}
}
