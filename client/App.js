import { Router, route } from 'preact-router';
import { config }from '../config.js';
import { h, Component } from 'preact';
import qs from 'qs';
// import Header from './header'
import Main from './components/main'
// import ErrorPage from './error_page'

export const App = () => (
	    <div id="app">
				<Router>
					<Main path={config.baseUrl + '/'} />
          {/* <ErrorPage path={config.baseUrl + '/error'} /> */}
					{/* <AsyncRoute
						path={config.baseUrl + '/error'}
						getComponent={ () => import('./error_page').then(module => module.default) } */}
					{/* /> */}
				</Router>
	    </div>
	  )
