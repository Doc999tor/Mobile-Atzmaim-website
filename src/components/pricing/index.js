import { h } from 'preact'
import CommonInfo from './component/commonInfo'
import style from './pricing.less'

export default ({ animation }) => (
	<div id='pricing' class={style.pricing}>
		<CommonInfo animation={animation} />
	</div>
)
