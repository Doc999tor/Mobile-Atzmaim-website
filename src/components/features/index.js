import { h, Component } from 'preact'
import AllFeatures from './component/allFeatures/index.jsx'
import Details from './component/details/index.jsx'
import common from '../hero/hero.less'

export default class Features extends Component {
	state = {
		selectedFeature: {},
		svgObj: {},
		showDetail: false,
		animations: false
	}

	selectFeature = item => {
		const selectedFeature = this.props.features.find(i => i.name === item.name)
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
			<div id='features' class={common.height}>
				{
					!showDetail
						? <AllFeatures {...this.props} selectFeature={this.selectFeature} animations={animations} />
						: <Details {...this.props} backToAll={this.backToAll} svgObj={svgObj} selectedFeature={selectedFeature} />
				}
			</div>
		)
	}
}
