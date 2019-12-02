import { h, Component } from 'preact'
import { config }from '../../../../../config.js'

export default class OpenedPreview extends Component {
	state = {
		switchBox: true
	}
	changeSwitch = () => this.setState({switchBox: !this.state.switchBox})
	render() {
		const basic = this.props.name === 'basic';
		const marker = {'listStyleImage': 'url(' + config.urls.media + (basic ? 'ic_check_mark_active.svg' : 'ic_check_mark.svg' ) + ')'};
		const { name, icon, value } = this.props;
		const { switchBox } = this.state;
		return (
			<div class={'detail_price'  + ' ' + (basic ? 'detail_price_active' : '')}>
				<div class='price_header'>
					<div class='icon_wrap_price'>
						<img src={config.urls.media + icon} alt={icon} />
					</div>
					<div class='header_text'>
						<p class='price_name'>{config.translations.pricing.data[name].opened_preview.name}</p>
						<p class='price_type'>{config.translations.pricing.data[name].opened_preview.business_type}</p>
						<p class='price_cost'><span class='price_value'>{config.translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
							.replace('{price_value}', value)}</span>{config.translations.pricing.data[name].opened_preview.period}</p>
					</div>
				</div>
				{config.translations.pricing.data[name].opened_preview.price_monthly &&
				config.translations.pricing.data[name].opened_preview.price_yearly && <div class='switch_section'>
					<p class={switchBox ? 'active_opened' : 'inactive_price'}>{config.translations.pricing.data[name].opened_preview.price_yearly}</p>
					<label class='switch' >
						<input value={switchBox} type='checkbox' onChange={this.changeSwitch} />
						<span class='slider'></span>
					</label>
					<p class={switchBox ? 'inactive_price' : 'active_opened'}>{config.translations.pricing.data[name].opened_preview.price_monthly}</p>
				</div>}
				<ul>
					{config.translations.pricing.data[name].opened_preview.features.map(item => (
						<li class='price_feature' style={marker}>{item}</li>
					))}
				</ul>
				<a class='price_link' href={config.urls.signup}><p class='price_paid'>{config.translations.pricing.data[name].opened_preview.cta_label}</p></a>
			</div>
		);
	}
}
