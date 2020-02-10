import { h, Component } from 'preact'
import AllFeatures from './component/allFeatures'
import Details from './component/details'

export default class Features extends Component {
	state = {
		selectedFeature: {},
		svgObj: {},
		showDetail: false,
		animations: false
	}

	selectFeature = item => {
		const selectedFeature = this.props.config.modules.features.data.find(i => i.name === item.name)
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

	render ({ translations, config }) {
		const { showDetail, selectedFeature, svgObj, animations } = this.state
		return (
			<div id='features' class='height'>
				{
					!showDetail
						? <AllFeatures {...this.props} translations={translations} config={config} selectFeature={this.selectFeature} animations={animations} />
						: <Details backToAll={this.backToAll} translations={translations} config={config} svgObj={svgObj} selectedFeature={selectedFeature} />
				}
			</div>
		)
	}
}
