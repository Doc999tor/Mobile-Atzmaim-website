import { h, render } from 'preact'
import './style'

let root
function init () {
	const App = require('./components/app').default
	document.body.setAttribute('dir', config.isRTL ? 'rtl' : 'ltr')
	root = render(<App />, document.body, root)
}

if (module.hot) {
	// require('preact/devtools')   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init))
}

init()
