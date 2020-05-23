import { h, Component } from 'preact'
import style from './opened.less'
import './opened.less'

const OpenedPreview = ({goHome, name, value, icon, item}) => {
	const basic = name === 'basic'
	const marker = {'listStyleImage': 'url(' + config.urls.media + (basic ? 'ic_check_mark_active.svg' : 'ic_check_mark.svg' ) + ')'};
	return (
		<div id={`${name}`} class={style.detail_price  + ' ' + (basic ? style.detail_price_active : '')}>
			<div class={style.header} onClick={goHome}>
				<div class={style.icon_wrap}>
					<img src={config.urls.media + icon} alt={icon} />
				</div>
				<div class={style.header_text}>
					<p class={style.name}>{config.translations.pricing.data[name].opened_preview.name}</p>
					<p class={style.type}>{config.translations.pricing.data[name].opened_preview.business_type}</p>
					<p class={style.cost}><span class={style.value}>{config.translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
						.replace('{price_value}', value ? item.price_yearly : item.price_monthly)}</span>{value ? config.translations.pricing.data[name].opened_preview.period_year : config.translations.pricing.data[name].opened_preview.period_month}</p>
				</div>
			</div>
			<ul>
				{config.translations.pricing.data[name].opened_preview.features.map(item => (
					<li class={style.feature} style={marker}>{item}</li>
				))}
			</ul>
			<a class={style.link} href={config.urls.signup}><p class={style.paid}>{config.translations.pricing.data[name].opened_preview.cta_label}</p></a>
		</div>
	)
}
export default OpenedPreview
