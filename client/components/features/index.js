import { h, Component } from 'preact'
import AllFeatures from './component/allFeatures'
import { config }from '../../../components-lib/Home_website/config_ssr.js'
import Details from './component/details'

export default class Features extends Component {
	state = {
		selectedFeature: {},
		svgObj: {},
		showDetail: false,
		animations: false
	}

	selectFeature = item => {
		const selectedFeature = config.modules.features.data.find(i => i.name === item.name)
		const svgObj = this.props.iconsData.find(i => item.name === i.name)
		this.setState({
			animations: true,
			showDetail: true,
			selectedFeature,
			svgObj
		})
	}

	backToAll = () => {
		this.setState({
			showDetail: false
		}, () => setTimeout(() => this.setState({ animations: false }), 100))
	}

	render () {
		const { showDetail, selectedFeature, svgObj, animations } = this.state
		return (
			<div id='features' class='height'>
				{
					!showDetail
						? <AllFeatures {...this.props} selectFeature={this.selectFeature} animations={animations} />
						: <Details backToAll={this.backToAll} svgObj={svgObj} selectedFeature={selectedFeature} />
				}
			</div>
		)
	}
}