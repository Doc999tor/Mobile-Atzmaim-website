import { h } from 'preact'
import { useState } from 'preact/hooks'
import style from './swichBox.less'

export default ({value, handleChange, handleChooseYearly, handleChooseMonthly }) => {
	// const [value, setValue] = useState(config.modules.pricing.switch_bill_annually)
	// const handleChange = () => setValue((currentValue) => !currentValue)
	// const handleChooseYearly = () => setValue(true)
	// const handleChooseMonthly = () => setValue(false)

	const countDiscont = (monthly, yearly) => {
		const total = monthly * 12
		const percent = Math.round((yearly * 100) / total)
		return 100 - percent
	}
	const discontItem = config.modules.pricing.data.find(i => i.price_monthly && i.price_yearly)
	return (
		<div class={style.switch_section}>
			<p class={`${style.yearly_wrap} ${value ? style.active : style.inactive}`} onClick={handleChooseYearly}>
				{<span className={style.to_save}>{config.translations.pricing.to_save_label} {countDiscont(discontItem.price_monthly, discontItem.price_yearly)}%</span>}
				{config.translations.pricing.switch_annually}
			</p>
			<input checked={value} onChange={handleChange} className='switch_bill' type='checkbox' name='bill' id='bill' />
			<p class={value ? style.inactive : style.active} onClick={handleChooseMonthly}>{config.translations.pricing.switch_monthly}</p>
		</div>
	)
}
