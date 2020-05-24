import { h } from 'preact'
import CommonInfo from './component/commonInfo'
import common from '../hero/hero.less'

export default ({ animation, handleShowOpenPlan, switchValue, handleChangeSwitch, handleChooseYearly, handleChooseMonthly }) => (
	<div id='pricing' class={common.height}>
		<CommonInfo animation={animation} handleShowOpenPlan={handleShowOpenPlan} switchValue={switchValue} handleChangeSwitch={handleChangeSwitch} handleChooseYearly={handleChooseYearly} handleChooseMonthly={handleChooseMonthly} />
	</div>
)
