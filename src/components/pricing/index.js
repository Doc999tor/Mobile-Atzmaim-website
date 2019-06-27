import { h } from 'preact';
import CommonInfo from './component/commonInfo';
import style from './style.less';

export default () => (
	<div id='pricing' class={style.pricing}>
		<CommonInfo />
	</div>
);
