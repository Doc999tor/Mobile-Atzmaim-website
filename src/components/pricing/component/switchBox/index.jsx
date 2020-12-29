import { h } from 'preact'
import style from './swichBox.less'

export default ({ value, handleChange, handleChooseYearly, handleChooseMonthly }) => {
	const discontArray = config.modules.pricing.data.map(i => i.discount && parseInt(i.discount))
	const maxDiscont = Math.max(...discontArray)
	return (
		<div class={style.switch_section}>
			<p class={`${style.yearly_wrap} ${value ? style.active : style.inactive}`} onClick={handleChooseYearly}>
				{<span className={style.to_save}>{config.translations.pricing.to_save_label} {maxDiscont}%</span>}
				{config.translations.pricing.switch_annually}
			</p>
			<input checked={value} onChange={handleChange} className='switch_bill' type='checkbox' name='bill' id='bill' />
			<p class={value ? style.inactive : style.active} onClick={handleChooseMonthly}>{config.translations.pricing.switch_monthly}</p>
		</div>
	)
}
