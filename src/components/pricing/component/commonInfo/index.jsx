import { h } from 'preact';
import Price from '../price';
import styles from '../../../features/component/allFeatures/style.less';
import style from './style.less';

export default () => {
	return (
		<div>
			<section class={styles.top_section}>
				<h2 >{config.translations.pricing.title}</h2>
				<div class={styles.background_top}>
					<img class={config.isRTL ? styles.inner_rtl : styles.inner_ltr} src={config.urls.static + 'bg_top.svg'}/>
					<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.static + 'ill_pricing.svg'}/>
				</div>
			</section>
			<h3 class={style.subtitle}>{config.translations.pricing.subtitle}</h3>
			<section class={style.pricing_plan}>
				{config.modules.pricing.data.map(item => <Price name={item.name} icon={item.icon} value={item.price_monthly} />)}
			</section>
		</div>
	);
};
