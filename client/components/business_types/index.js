import { h, Fragment } from 'preact'
import { config } from '../../../components-lib/Home_website/config_ssr.js'
import Bussiness from './component'
// import styles from '../features/component/allFeatures/all.less'
// import style from './types.less'
// import common from '../hero/hero.less'

export default ({ animation }) => {
	return (
		<div id='business_types' class='height'>
			<section class='top_section'>
				<div class={`text ${animation && 'text_end'}`}>
					{animation && <h2 >{config.translations.business_types.main_title}</h2>}
					{animation && <div class='types_actions'>
						<div class='types_tap'>
							<img src={config.urls.media + 'ic_tap.svg'} alt='tap icon' />
						</div>
						<p>{config.translations.business_types.preview_text}</p>
					</div>}
				</div>
				<div class='background_top'>
					{!animation
						? <Fragment>
							<img class={config.isRTL ? `scale start_bg` : 'start_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
							<img class={config.isRTL ? 'city_rtl' : 'city_ltr'} src={config.urls.media + 'city.svg'} alt='city' />
						</Fragment>
						: <Fragment>
							<img class={config.isRTL ? `${animation && 'inner_rtl'} ` : `${animation && 'inner_ltr'}`} src={config.urls.media + 'bg_top.svg'} alt='background' />
							<img class={config.isRTL ? 'city_fin_rtl' : 'city_fin_ltr'} src={config.urls.media + 'city.svg'} alt='city' />
						</Fragment>}
					{
						!animation && <img class={config.isRTL ? 'inactive_people_rtl' : 'inactive_people_ltr'} src={config.urls.media + 'business people.svg'} alt='business people' />
					}
					{!animation
						? <img class={config.isRTL ? 'active_start_rtl' : 'active_start_ltr'} src={config.urls.media + 'business people_active.svg'} alt='business people' />
						: <img class={config.isRTL ? `${animation && 'active_end_rtl'}` : `${animation && 'active_end_ltr'}`} src={config.urls.media + 'business people_active.svg'} alt='business people' />
					}
				</div>
			</section>
			<section class={`types_wrap ${animation && 'types_wrap_end'}`}>
				{animation && <div>
					<h3 class='subtitle'>{config.translations.business_types.subtitle}</h3>
					<div class='business_type'>
						{config.modules.business_types.data.map(item => <Bussiness name={item.name} icon={item.icon} />)}
					</div>
				</div>}
			</section>
		</div>
	)
}
