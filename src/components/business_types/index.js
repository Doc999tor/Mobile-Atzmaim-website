import { h, Fragment } from 'preact'
import Bussiness from './component'
import styles from '../features/component/allFeatures/all.less'
import style from './types.less'
import common from '../hero/hero.less'

export default ({ animation }) => {
	return (
		<div id='business_types' class={common.height}>
			<section class={styles.top_section}>
				<div class={`${styles.text} ${animation && (config.isRTL ? styles.text_end_rtl : styles.text_end_ltr)}`}>
					{animation && <h2 >{config.translations.business_types.main_title}</h2>}
					{animation && <div class={style.actions}>
						<div class={style.tap}>
							<img src={config.urls.media + 'ic_tap.svg'} alt='tap icon' />
						</div>
						<p>{config.translations.business_types.preview_text}</p>
					</div>}
				</div>
				<div class={styles.background_top}>
					{!animation
						? <img class={config.isRTL ? style.inactive_people_rtl : style.inactive_people_ltr} src={config.urls.media + 'business people.svg'} alt='business people' />
						: <Fragment>
							<img class={config.isRTL ? `${styles.scale} ${styles.start_bg_rtl}` : styles.start_bg} src={config.urls.media + 'bg_top.svg'} alt='background' />
							<img class={config.isRTL ? style.city_rtl : style.city_ltr} src={config.urls.media + 'city.svg'} alt='city' />
							<img class={config.isRTL ? style.active_people_rtl : style.active_people_ltr} src={config.urls.media + 'business people_active.svg'} alt='business people' />
						</Fragment>}
				</div>
			</section>
			<section class={`${animation && styles.static_wrap}`}>
				{animation && <div>
					<h3 class={style.subtitle}>{config.translations.business_types.subtitle}</h3>
					<div class={style.business_type}>
						{config.modules.business_types.data.map(item => <Bussiness name={item.name} icon={item.icon} />)}
					</div>
				</div>}
			</section>
		</div>
	)
}
