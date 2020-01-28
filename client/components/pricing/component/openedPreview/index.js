import { h, Component } from 'preact'

export default class OpenedPreview extends Component {
	state = {
		switchBox: true
	}
	changeSwitch = () => this.setState({switchBox: !this.state.switchBox})
	render({translations, config, name, icon, value}) {
		const basic = this.props.name === 'basic';
		const marker = {'listStyleImage': 'url(' + config.urls.media + (basic ? 'ic_check_mark_active.svg' : 'ic_check_mark.svg' ) + ')'};
		const { switchBox } = this.state;
		return (
			<div class={'detail_price'  + ' ' + (basic ? 'detail_price_active' : '')}>
				<div class='price_header'>
					<div class='icon_wrap_price'>
						<img src={config.urls.media + icon} alt={icon} />
					</div>
					<div class='header_text'>
						<p class='price_name'>{translations.pricing.data[name].opened_preview.name}</p>
						<p class='price_type'>{translations.pricing.data[name].opened_preview.business_type}</p>
						<p class='price_cost'><span class='price_value'>{translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
							.replace('{price_value}', value)}</span>{translations.pricing.data[name].opened_preview.period}</p>
					</div>
				</div>
				{translations.pricing.data[name].opened_preview.price_monthly &&
				translations.pricing.data[name].opened_preview.price_yearly && <div class='switch_section'>
					<p class={switchBox ? 'active_opened' : 'inactive_price'}>{translations.pricing.data[name].opened_preview.price_yearly}</p>
					<label class='switch' >
						<input value={switchBox} type='checkbox' onChange={this.changeSwitch} />
						<span class='slider'></span>
					</label>
					<p class={switchBox ? 'inactive_price' : 'active_opened'}>{translations.pricing.data[name].opened_preview.price_monthly}</p>
				</div>}
				<ul>
					{translations.pricing.data[name].opened_preview.features.map(item => (
						<li class='price_feature' style={marker}>{item}</li>
					))}
				</ul>
				<a class='price_link' href={config.urls.signup}><p class='price_paid'>{translations.pricing.data[name].opened_preview.cta_label}</p></a>
			</div>
		);
	}
}
