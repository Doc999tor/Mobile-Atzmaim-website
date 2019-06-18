import { h } from 'preact';
import style from './style.less';

export default ({ name, icon, value }) => {
	return (
		<div class={style.price}>
			<div class={style.icon_wrap}>
				<img src={config.urls.static + icon} />
			</div>
			<div class={style.price_info}>
				<p class={style.price_name}>{config.translations.pricing.data[name].small_preview.name}</p>
				<p class={style.price_plan}>{config.translations.pricing.data[name].small_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
			.replace('{price_value}', value) + config.translations.pricing.data[name].small_preview.period}</p>
			</div>
		</div>
	);
};
