import { h } from 'preact'
import style from './small.less'

export default ({ preferred, name, icon, value, switchValue, handleShowOpenPlan }) => {
	return (
		<div id={`${name}`} class={style.price + ' ' + (preferred ? style.active : '')} onClick={() => handleShowOpenPlan(name)}>
			<div class={style.icon_wrap}>
				<img src={config.urls.media + icon} alt={icon} />
			</div>
			<div class={style.price_info}>
				<p class={style.price_name}>{config.translations.pricing.data[name].small_preview.name}</p>
				<p class={style.for_whom}>{config.translations.pricing.data[name].small_preview.business_type}</p>
				<p class={style.price_plan}><span class={style.currency}>{config.translations.pricing.data[name].small_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
					.replace('{price_value}', value)}</span><span class={style.per}>{config.translations.pricing.data[name].small_preview.period}</span></p>
			</div>
		</div>
	);
};
