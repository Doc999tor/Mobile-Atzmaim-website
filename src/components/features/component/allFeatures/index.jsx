import { h } from 'preact'
import Feature from '../feature'
import style from './all.less'

export default ({ selectFeature, animations, secondAnimation, activeLink }) => {
	console.log(secondAnimation)
	const first = animations ? `${style.outer_rtl} ${style.start}` : style.outer_rtl
	const second = animations ? `${style.outer_ltr} ${style.end}` : style.outer_ltr
	const firstActive = !secondAnimation ? `${style.active_woman_r} ${style.start_r}` : style.active_woman_r
	const secondActive = !secondAnimation ? `${style.active_woman_l} ${style.end_l}` : style.active_woman_l
	const firstPhone = !secondAnimation ? `${style.active_phone_r} ${style.start_p_r}` : style.active_phone_r
	const secondPhone = !secondAnimation ? `${style.active_phone_l} ${style.end_p_l}` : style.active_phone_l
	const bgrSecond = secondAnimation ? style.inner_ltr : style.start_bg
	// const bgrSecond = `${style.start_bg} ${secondAnimation && style.inner_ltr}`
	// ${secondAnimation && style.inner_ltr}
	// const bgrSecond = !secondAnimation ? `${style.inner_ltr} ${style.start_bg}` : style.inner_ltr
	const blankPhonSecond = !secondAnimation ? `${style.blank_phone_l} ${style.start_bp}` : style.blank_phone_l
	const blankWomanSecond = !secondAnimation ? `${style.blank_woman_l} ${style.start_wmn}` : style.blank_woman_l
	return (
		<div class={style.container}>
			<section class={style.top_section}>
				<div class={style.title}>
					{secondAnimation && <h2>{config.translations.features.content.title}</h2>}
				</div>
				<div class={style.background_top}>
					{secondAnimation && <img class={config.isRTL ? style.inner_rtl : bgrSecond} src={config.urls.media + 'bg_top.svg'} />}

					{/* <img class={config.isRTL ? first : second} src={config.urls.media + 'ill_features.svg'} /> */}
					{!secondAnimation && <img class={config.isRTL ? style.blank_phone_r : style.blank_phone_l} src={config.urls.media + 'phone_fch.svg'} />}
					{!secondAnimation && <img class={config.isRTL ? style.blank_woman_r : style.blank_woman_l} src={config.urls.media + 'woman_fch.svg'} />}
					{/* <img class={config.isRTL ? style.blank_phone_r : blankPhonSecond} src={config.urls.media + 'phone_fch.svg'} />
					<img class={config.isRTL ? style.blank_woman_r : blankWomanSecond} src={config.urls.media + 'woman_fch.svg'} /> */}

					{/* <img class={config.isRTL ? firstPhone : secondPhone} src={config.urls.media + 'active_phone.svg'} />
					<img class={config.isRTL ? firstActive : secondActive} src={config.urls.media + 'active_woman.svg'} /> */}

				</div>
			</section>
			{secondAnimation && <div class={style.features_container}>
				{config.modules.features.data.map(item => <Feature selectFeature={selectFeature} feature={item} />)}
			</div>}
		</div>
	)
}
