import { h, Fragment } from 'preact'
import Bussiness from './component'
import styles from '../features/component/allFeatures/all.less'
import style from './types.less'
import common from '../hero/hero.less'

export default ({ animation }) => {
	const firstP = animation ? `${style.phone_act} ${style.start}` : style.phone_act
	const secondP = animation ? `${style.phone_act_r} ${style.end}` : style.phone_act_r
	return (
		<div id='business_types' class={common.height}>
			<section class={styles.top_section}>
				<div class={`${styles.text} ${animation && styles.text_end}`}>
					{animation && <h2 >{config.translations.business_types.main_title}</h2>}
					{animation && <div class={style.actions}>
						<div class={style.tap}>
							<img src={config.urls.media + 'ic_tap.svg'} />
						</div>
						<p>{config.translations.business_types.preview_text}</p>
					</div>}
				</div>
				<div class={styles.background_top}>
				{!animation
						? <Fragment>
							<img class={config.isRTL ? `${styles.scale} ${styles.start_bg}` : styles.start_bg} src={config.urls.media + 'bg_top.svg'} />
							<img class={config.isRTL ? style.inactive_people_rtl : style.city_ltr} src={config.urls.media + 'city.svg'} />
						</Fragment>
						: <Fragment>
							<img class={config.isRTL ? `${animation && styles.inner_rtl} ` : `${animation && styles.inner_ltr}`} src={config.urls.media + 'bg_top.svg'} />
						<img class={config.isRTL ? style.inactive_people_rtl : style.city_fin_ltr} src={config.urls.media + 'city.svg'} />
						</Fragment>}
				{
					!animation && <img class={config.isRTL ? style.inactive_people_rtl : style.inactive_people_ltr} src={config.urls.media + 'business people.svg'} />
				}
				{!animation
					? <img class={config.isRTL ? style.active_start_rtl : style.active_start_ltr} src={config.urls.media + 'business people_active.svg'} />
					: <img class={config.isRTL ? `${animation && style.active_end_rtl}` : `${animation && style.active_end_ltr}`} src={config.urls.media + 'business people_active.svg'} />
				}
				</div>
			</section>
			<section class={`${style.wrap} ${animation && style.wrap_end}`}>
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
