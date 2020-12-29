import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { route } from 'preact-router'
import SwichBox from '../switchBox'
import OpenedPreview from '../openedPreview'
import AllPlans from '../allplans/allplans'
import FollowUs from '../follow_us/follow_us'
import Footer from '../footer/footer'
import style from './detail.less'
import menu from '../../../header/header.less'

export default ({
	priceName,
	active,
	closeMenu,
	menuOnOff,
	switchValue,
	handleChangeSwitch,
	handleChooseYearly,
	handleChooseMonthly
}) => {
	const goBack = () => window.history.back()
	useEffect(() => {
		const chosenPlan = document.getElementById(priceName)
		chosenPlan && chosenPlan.scrollIntoView({ block: 'center' })
	}, [])

	const goHome = () => {
		closeMenu()
		route(config.baseUrl || '/')
		const hero = document.getElementById('hero')
		hero && hero.scrollIntoView({ block: 'start' })
	}

	return (
		<div class={style.detail_info}>
			<div class={style.header_wrap}>
				<header class={style.header}>
					<div class={style.img_wrap}>
						<button class={style.back_btn} onClick={goBack}>
							<img class={style.back_img} src={config.urls.media + 'arrow_back.svg'} alt='ic_arrow.svg' />
						</button>
					</div>
					<div class={`${menu.cont} ${style.title}`} onClick={goHome}>
						<img src={config.urls.media_logo + 'logo.svg'} alt={config.translations.hero.logo_label} />
					</div>
					<div class={`${menu.alive_button} ${active ? menu.active_b : style.inactive_b} ${style.menu_btn_wrap}`} onClick={active ? closeMenu : menuOnOff}>
						<div class={`${menu.stick_top} ${active && menu.alive_stick_top}`} />
						<div class={`${menu.stick_bottom} ${active && menu.alive_stick_bottom}`} />
					</div>
				</header>
			</div>
			<div class={style.content}>
				<h2 class={style.page_title}>{config.translations.pricing.main_title}</h2>
				<div class={style.swichBox_wrap}>
					<SwichBox value={switchValue} handleChange={handleChangeSwitch} handleChooseYearly={handleChooseYearly} handleChooseMonthly={handleChooseMonthly} />
				</div>
				{config.modules.pricing.data.map(item => <OpenedPreview preferred={item.preferred} goHome={goBack} value={switchValue} name={item.name} icon={item.icon} item={item} discount={item.discount} />)}
			</div>
			{config.translations.pricing.all_plans && <AllPlans />}
			<FollowUs />
			<Footer />
		</div>
	)
}
