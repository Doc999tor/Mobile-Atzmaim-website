import { h, Fragment } from 'preact'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js';
import Feature from '../feature'

export default ({ selectFeature, animations, secondAnimation, activeLink }) => {
	const firstP = animations ? `phone_act start` : 'phone_act'
	const firstW = animations ? `active_woman_l start` : 'active_woman_l'
	const secondP = animations ? `phone_act_r end` : 'phone_act_r'
	const secondW = animations ? `active_woman_r end` : 'active_woman_r'
	return (
		<div class={`container ${!secondAnimation && 'bgr'}`}>
			<section class='top_section'>
				<div class={`text ${secondAnimation && 'text_end'}`}>
					{secondAnimation && <h2>{config.translations.features.content.title}</h2>}
				</div>
				<div class='background_top'>
					{!secondAnimation
						? <img class={config.isRTL ? `scale start_bg` : 'start_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
						: <img class={config.isRTL ? secondAnimation && 'inner_rtl ' : secondAnimation && 'inner_ltr'} src={config.urls.media + 'bg_top.svg'} alt='background' />}
					{!secondAnimation
						 ? <img class={config.isRTL ? `phone_begin_r scale` : 'phone_begin'} src={config.urls.media + 'active_phone.svg'} alt='phone on' />
						 : <img class={config.isRTL ? `${secondAnimation && secondP}` : `${secondAnimation && firstP}`} src={config.urls.media + 'active_phone.svg'} alt='phone on' />}
					{!secondAnimation && <Fragment>
						<img class={config.isRTL ? `scale blank_phone_r` : 'blank_phone_l'} src={config.urls.media + 'phone_fch.svg'} alt='phone off' />
						<img class={config.isRTL ? `scale blank_woman_r` : 'blank_woman_l'} src={config.urls.media + 'woman_fch.svg'} alt='woman' />
					</Fragment>
					}
					{!secondAnimation
						? <img class={config.isRTL ? 'wmn_r' : 'wmn'} src={config.urls.media + 'active_woman.svg'} alt='woman' />
						: <img class={config.isRTL ? `${secondAnimation && secondW}` : `${secondAnimation && firstW}`} src={config.urls.media + 'active_woman.svg'} alt='woman' />}
				</div>
			</section>
			<div class={`wrap ${secondAnimation && 'wrap_fix'}` }>
				{secondAnimation && <div class='features_container'>
					{config.modules.features.data.map(item => <Feature selectFeature={selectFeature} feature={item} />)}
				</div>}
			</div>
		</div>
	)
}
