import { h, Component } from 'preact'
import AllFeatures from './component/allFeatures'
import { config }from '../../../config.js'
// import Details from './component/details/index.jsx'
// import common from '../hero/hero.less'

export default class Features extends Component {
	state = {
		selectedFeature: '',
		showDetail: false,
		animations: false
	}

	selectFeature = item => {
		const selectedFeature = config.modules.features.data.find(i => i.name === item.name)
		this.setState({
			animations: true,
			showDetail: true,
			selectedFeature
		})
	}

	backToAll = () => {
		this.setState({
			showDetail: false
		}, () => setTimeout(() => this.setState({ animations: false }), 100))
	}

	render () {
		const { showDetail, selectedFeature, animations } = this.state
		return (
			<div id='features' class='height'>
				{
					!showDetail
						? <AllFeatures {...this.props} selectFeature={this.selectFeature} animations={animations} />
						: <Details backToAll={this.backToAll} selectedFeature={selectedFeature} />
				}
			</div>
		)
	}
}
