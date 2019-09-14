import { h, Fragment } from 'preact'
import Feature from '../feature'
import style from './all.less'

export default ({ selectFeature, animations, secondAnimation, activeLink }) => {
	const firstP = animations ? `${style.phone_act} ${style.start}` : style.phone_act
	const firstW = animations ? `${style.active_woman_l} ${style.start}` : style.active_woman_l
	// const second = animations ? `${style.outer_ltr} ${style.end}` : style.outer_ltr
	const firstPhone = !secondAnimation ? `${style.active_phone_r} ${style.start_p_r}` : style.active_phone_r
	return (
		<div class={style.container}>
			<section class={style.top_section}>
				<div class={`${style.text} ${secondAnimation && style.text_end}`}>
					{secondAnimation && <h2>{config.translations.features.content.title}</h2>}
				</div>
				<div class={style.background_top}>
					{!secondAnimation
						? <img class={config.isRTL ? `${style.scale} ${style.start_bg}` : style.start_bg} src={config.urls.media + 'bg_top.svg'} />
						: <img class={config.isRTL ? `${secondAnimation && style.inner_rtl}` : `${secondAnimation && style.inner_ltr}`} src={config.urls.media + 'bg_top.svg'} />}
					{secondAnimation
						 ? <img class={config.isRTL ? `${style.phone_begin} ${style.scale}` : style.phone_begin} src={config.urls.media + 'active_phone.svg'} />
						 : <img class={config.isRTL ? firstPhone : `${secondAnimation && firstP}`} src={config.urls.media + 'active_phone.svg'} />}
					{!secondAnimation && <Fragment>
						<img class={config.isRTL ? style.blank_phone_r : style.blank_phone_l} src={config.urls.media + 'phone_fch.svg'} />
						<img class={config.isRTL ? style.blank_woman_r : style.blank_woman_l} src={config.urls.media + 'woman_fch.svg'} />
					</Fragment>
					}
					{!secondAnimation
						? <img class={config.isRTL ? firstPhone : style.wmn} src={config.urls.media + 'active_woman.svg'} />
						: <img class={config.isRTL ? firstPhone : `${secondAnimation && firstW}`} src={config.urls.media + 'active_woman.svg'} />}
				</div>
			</section>
			<div class={`${style.wrap} ${secondAnimation && style.wrap_fix}` }>
				{secondAnimation && <div class={style.features_container}>
					{config.modules.features.data.map(item => <Feature selectFeature={selectFeature} feature={item} />)}
				</div>}
			</div>
		</div>
	)
}
