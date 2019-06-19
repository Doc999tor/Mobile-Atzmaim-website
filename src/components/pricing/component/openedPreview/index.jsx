import { h } from 'preact';
import style from './style.less';
import './style.less';

export default ({name, icon, value}) => {
	const marker = {'listStyleImage': 'url(' + config.urls.static + 'ic_check_mark.svg' + ')'}
	return (
		<div class={style.detail_price}>
			<div class={style.header}>
				<div class={style.icon_wrap}>
					<img src={config.urls.static + icon} />
				</div>
				<div>
					<p>{config.translations.pricing.data[name].opened_preview.name}</p>
					<p>{config.translations.pricing.data[name].opened_preview.business_type}</p>
					<p><span>{config.translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
						.replace('{price_value}', value)}</span>{config.translations.pricing.data[name].opened_preview.period}</p>
				</div>
			</div>
			{config.translations.pricing.data[name].opened_preview.price_monthly &&
			config.translations.pricing.data[name].opened_preview.price_yearly && <div class={style.switch_section}>
				<p>{config.translations.pricing.data[name].opened_preview.price_yearly}</p>
				<label class={style.switch}>
					<input type='checkbox' />
					<span class={style.slider}></span>
				</label>
				<p>{config.translations.pricing.data[name].opened_preview.price_monthly}</p>
			</div>}
			<ul>
				{config.translations.pricing.data[name].opened_preview.features.map(item => (
					<li style={marker}>{item}</li>
				))}
			</ul>
			<button>{config.translations.pricing.data[name].opened_preview.cta_label}</button>
		</div>
	);
};
