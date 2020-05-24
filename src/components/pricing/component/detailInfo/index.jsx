import { h } from 'preact'
import { useState } from 'preact/hooks'
import SwichBox from '../switchBox'
import OpenedPreview from '../openedPreview'
import style from './detail.less'

export default () => {
	const [value, setValue] = useState(config.modules.pricing.switch_bill_annually)
	const handleChange = () => setValue((currentValue) => !currentValue)
	const handleChooseYearly = () => setValue(true)
	const handleChooseMonthly = () => setValue(false)
	const goBack = () => window.history.back()

	return (
		<div class={style.detail_info}>
			<div class={style.header_wrap}>
				<header class={style.header}>
					<div class={style.img_wrap}>
						<button class={style.back_btn} onClick={goBack}>
							<img class={style.back_img} src={config.urls.media + 'ic_arrow.svg'} alt='ic_arrow.svg' />
						</button>
					</div>
					<h2 class={style.title}>{config.translations.pricing.main_title}</h2>
					<div class={style.menu_btn_wrap}></div>
				</header>
			</div>
			<div class={style.content}>
				<div className={style.swichBox_wrap}>
					<SwichBox value={value} handleChange={handleChange} handleChooseYearly={handleChooseYearly} handleChooseMonthly={handleChooseMonthly} />
				</div>
				{config.modules.pricing.data.map(item => <OpenedPreview goHome={goBack} value={value} name={item.name} icon={item.icon} item={item} />)}
			</div>
		</div>
	)
}
