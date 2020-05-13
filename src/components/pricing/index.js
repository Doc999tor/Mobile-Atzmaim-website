import { h } from 'preact'
import CommonInfo from './component/commonInfo'
import style from './pricing.less'

export default ({ animation, showDetail, handleShowPreview, handleShowDetail }) => (
	<div id='pricing' class={style.pricing}>
		<CommonInfo animation={animation} showDetail={showDetail} handleShowPreview={handleShowPreview} handleShowDetail={handleShowDetail} />
	</div>
)
