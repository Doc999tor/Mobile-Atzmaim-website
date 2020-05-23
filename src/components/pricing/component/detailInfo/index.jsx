import { h } from 'preact'
import { useState } from 'preact/hooks'
import { route } from 'preact-router'
import SwichBox from '../switchBox'
import OpenedPreview from '../openedPreview'
import style from './detail.less'

export default () => {
	const [value, setValue] = useState(config.modules.pricing.switch_bill_annually)
	const handleChange = () => setValue((currentValue) => !currentValue)
	const handleChooseYearly = () => setValue(true)
	const handleChooseMonthly = () => setValue(false)
	const goToHome = () => route(config.baseUrl)

	return (
		<div class={style.detail_info}>
			<div className={style.swichBox_wrap}>
				<SwichBox value={value} handleChange={handleChange} handleChooseYearly={handleChooseYearly} handleChooseMonthly={handleChooseMonthly} />
			</div>
			{config.modules.pricing.data.map(item => <OpenedPreview goHome={goToHome} name={item.name} icon={item.icon} item={item} />)}
		</div>
	)
}
