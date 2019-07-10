import { h, Component } from 'preact';
import AllFeatures from './component/allFeatures/index.jsx';
import Details from './component/details/index.jsx';
import style from './style.less';

export default class Features extends Component {
	state = {
		selectedFeature: '',
		showDetail: false
	}
	selectFeature = item => {
		const selectedFeature = config.modules.features.data.find(i => i.name === item.name);
		this.setState({
			showDetail: true,
			selectedFeature
		});

	}
	backToAll = () => {
		this.setState({
			showDetail: false
		});
	}
	render() {
		const { showDetail, selectedFeature } = this.state
		return (
			<div id='features' class={style.features}>
				{
					!showDetail
					? <AllFeatures selectFeature={this.selectFeature} />
					: <Details backToAll={this.backToAll} selectedFeature={selectedFeature}/>
				}
			</div>
		);
	}
}

