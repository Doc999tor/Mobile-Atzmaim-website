import { h } from 'preact'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'

export default ({ name, icon, value, showDetail }) => {
	const basic = name === 'basic';
	return (
		<div class={'price' + ' ' + (basic ? 'active_price' : '')} onClick={showDetail}>
			<div class='price_icon_wrap'>
				<img src={config.urls.media + icon} alt={icon} />
			</div>
			<div class='price_info'>
				<p class='price_name'>{config.translations.pricing.data[name].small_preview.name}</p>
				<p class='price_plan'><span class='currency'>{config.translations.pricing.data[name].small_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
					.replace('{price_value}', value)}</span>{config.translations.pricing.data[name].small_preview.period}</p>
			</div>
		</div>
	);
};
