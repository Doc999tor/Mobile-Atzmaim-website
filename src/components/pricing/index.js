import { h } from 'preact'
import CommonInfo from './component/commonInfo'
import style from './pricing.less'
import common from '../hero/hero.less'

export default ({ animation, showDetail, handleShowPreview, handleShowDetail }) => (
	<div id='pricing' class={common.height}>
		<CommonInfo animation={animation} showDetail={showDetail} handleShowPreview={handleShowPreview} handleShowDetail={handleShowDetail} />
	</div>
)
