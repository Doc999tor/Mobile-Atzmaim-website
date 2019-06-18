import { h, Component } from 'preact';
import CommonInfo from './component/commonInfo';
import style from './style.less';

export default class Pricing extends Component {


	render() {
		return (
			<div class={style.pricing}>
				<CommonInfo />
			</div>
		);
	}
}
