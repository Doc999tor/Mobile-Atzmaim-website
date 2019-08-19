import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { h, Component } from 'preact'
import Header from './header'
import Main from './main'
import ErrorPage from './error_page'

export default class App extends Component {
	componentDidMount = () => document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
	render() {
	  return (
	    <div id="app">
				<Header />
				<Router>
					<Main path="/" />
					<AsyncRoute
						path={config.baseUrl + '/error'}
						getComponent={ () => import('./error_page').then(module => module.default) }
					/>
				</Router>
	    </div>
	  )
	}
}
