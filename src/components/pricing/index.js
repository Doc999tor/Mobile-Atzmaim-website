import { h, Component } from 'preact';
import CommonInfo from './component/commonInfo';
import DetailInfo from './component/detailInfo';
import style from './style.less';

export default class Pricing extends Component {
	state = {
		showDetail: false
	}

	handleShowDetail = () => this.setState({showDetail: !this.state.showDetail})

	render() {
		const { showDetail } =this.state
		return (
			<div class={style.pricing}>
				{!showDetail
					? <CommonInfo showDetail={this.handleShowDetail}  />
					: <DetailInfo />
				}
			</div>
		);
	}
}
