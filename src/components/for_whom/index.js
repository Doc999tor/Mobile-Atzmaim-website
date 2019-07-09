import { h } from 'preact';
import Bussiness from './component';
import styles from '../features/component/allFeatures/style.less';
import style from './style.less';

export default () => {
	return (
		<div id='for_whom' class={style.for_whom}>
			<section class={styles.top_section}>
				<div class={style.title}>
					<h2 >{config.translations.business_types.main_title}</h2>
					<div class={style.actions}>
						<div class={style.tap}>
							<img src={config.urls.media + 'ic_tap.svg'} />
						</div>
						<p>{config.translations.business_types.preview_text}</p>
					</div>
				</div>
				<div class={styles.background_top}>
					<img class={config.isRTL ? styles.inner_rtl : styles.inner_ltr} src={config.urls.media + 'bg_top.svg'}/>
					<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'ill_business_types.svg'}/>
				</div>
			</section>
			<h3 class={style.subtitle}>{config.translations.business_types.subtitle}</h3>
			<section class={style.business_type}>
				{config.modules.business_types.data.map(item => <Bussiness name={item.name} icon={item.icon} />)}
			</section>
		</div>
	);
};
