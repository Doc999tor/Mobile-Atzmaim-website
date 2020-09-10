import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import SwichBox from '../switchBox'
import OpenedPreview from '../openedPreview'
import AllPlans from '../allplans/allplans'
import style from './detail.less'

export default ({ handleShowOpenPlan, priceName, switchValue, handleChangeSwitch, handleChooseYearly, handleChooseMonthly }) => {
	const goBack = () => window.history.back()
	useEffect(() => {
		const chosenPlan = document.getElementById(priceName)
		chosenPlan && chosenPlan.scrollIntoView({ block: 'center' })
	}, [])

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
				<div class={style.swichBox_wrap}>
					<SwichBox value={switchValue} handleChange={handleChangeSwitch} handleChooseYearly={handleChooseYearly} handleChooseMonthly={handleChooseMonthly} />
				</div>
				{config.modules.pricing.data.map(item => <OpenedPreview preferred={item.preferred} goHome={goBack} value={switchValue} name={item.name} icon={item.icon} item={item} />)}
			</div>
			{config.translations.pricing.all_plans && <AllPlans />}
		</div>
	)
}
