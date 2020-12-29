import { h } from 'preact'
import style from './opened.less'

const OpenedPreview = ({ preferred, goHome, name, value, icon, item, discount }) => {
	return (
		<div id={`${name}`} class={style.detail_price + ' ' + (preferred ? style.detail_price_active : '')}>
			<div class={style.header} onClick={goHome}>
				<div class={style.header_text}>
					<p class={style.name}>{config.translations.pricing.data[name].opened_preview.name}</p>
					<p class={style.type}>{config.translations.pricing.data[name].opened_preview.business_type}</p>
					<p class={style.cost}><span class={style.value}>{config.translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
						.replace('{price_value}', value ? item.price_yearly : item.price_monthly)}</span>{config.translations.pricing.data[name].opened_preview.period_month}</p>
				</div>
				<div class={style.icon_wrap}>
					<img src={config.urls.media + icon} alt={icon} />
				</div>
				{discount && value && <div class={style.tag_wrap}>
					<div class={style.tag_container}>
						<img class={style.tag_icon} src={config.urls.media + 'tag.svg'} alt='' />
						<span class={style.tag_value}>{`${discount} ${config.translations.pricing.discount_label}`}</span>
					</div>
				</div>}
			</div>
			<div class={style.body}>
				<ul>
					{config.translations.pricing.data[name].opened_preview.features.map(item => (
						<li class={style.feature} ><img src={config.urls.media + 'check_mark.svg'} alt=''/>{item}</li>
					))}
				</ul>
				<a class={style.link} href={config.urls.signup}><p class={style.paid}>{config.translations.pricing.data[name].opened_preview.cta_label}</p></a>
				{config.translations.pricing.data[name].opened_preview.gift && <div className={style.gift_strip}><img src={config.urls.media +'gift_active.svg'} alt='gift' /><p>{config.translations.pricing.data[name].opened_preview.gift}</p></div>}
			</div>
		</div>
	)
}
export default OpenedPreview
