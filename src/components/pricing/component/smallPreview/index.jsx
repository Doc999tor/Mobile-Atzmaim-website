import { h } from 'preact';
import style from './small.less';

export default ({ name, icon, value, showDetail }) => {
	const basic = name === 'basic';
	return (
		<div class={style.price + ' ' + (basic ? style.active : '')} onClick={showDetail}>
			<div class={style.icon_wrap}>
				<img src={config.urls.media + icon} />
			</div>
			<div class={style.price_info}>
				<p class={style.price_name}>{config.translations.pricing.data[name].small_preview.name}</p>
				<p class={style.price_plan}><span class={style.currency}>{config.translations.pricing.data[name].small_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
					.replace('{price_value}', value)}</span>{config.translations.pricing.data[name].small_preview.period}</p>
			</div>
		</div>
	);
};
