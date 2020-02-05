import { h, Component } from 'preact';
import style from './opened.less';
import './opened.less';

export default class OpenedPreview extends Component {
	state = {
		switchBox: true
	}
	changeSwitch = () => this.setState({switchBox: !this.state.switchBox})
	render() {
		console.log('CommonInfo pricing')
		const basic = this.props.name === 'basic';
		const marker = {'listStyleImage': 'url(' + config.urls.media + (basic ? 'ic_check_mark_active.svg' : 'ic_check_mark.svg' ) + ')'};
		const { name, icon, value } = this.props;
		const { switchBox } = this.state;
		return (
			<div class={style.detail_price  + ' ' + (basic ? style.detail_price_active : '')}>
				<div class={style.header}>
					<div class={style.icon_wrap}>
						<img src={config.urls.media + icon} alt={icon} />
					</div>
					<div class={style.header_text}>
						<p class={style.name}>{config.translations.pricing.data[name].opened_preview.name}</p>
						<p class={style.type}>{config.translations.pricing.data[name].opened_preview.business_type}</p>
						<p class={style.cost}><span class={style.value}>{config.translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
							.replace('{price_value}', value)}</span>{config.translations.pricing.data[name].opened_preview.period}</p>
					</div>
				</div>
				{config.translations.pricing.data[name].opened_preview.price_monthly &&
				config.translations.pricing.data[name].opened_preview.price_yearly && <div class={style.switch_section}>
					<p class={switchBox ? style.active : style.inactive}>{config.translations.pricing.data[name].opened_preview.price_yearly}</p>
					<label class={style.switch} >
						<input value={switchBox} type='checkbox' onChange={this.changeSwitch} />
						<span class={style.slider}></span>
					</label>
					<p class={switchBox ? style.inactive : style.active}>{config.translations.pricing.data[name].opened_preview.price_monthly}</p>
				</div>}
				<ul>
					{config.translations.pricing.data[name].opened_preview.features.map(item => (
						<li class={style.feature} style={marker}>{item}</li>
					))}
				</ul>
				<a class={style.link} href={config.urls.signup}><p class={style.paid}>{config.translations.pricing.data[name].opened_preview.cta_label}</p></a>
			</div>
		);
	}
}
