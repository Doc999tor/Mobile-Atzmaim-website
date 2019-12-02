import { h, Component } from 'preact'
import { config }from '../../../../config.js';
export default class Bussiness extends Component {
	state = {
		animation: false
	}

	init = () => setTimeout(() => this.setState({ animation: !this.state.animation }), 100)

	render () {
		const { name, icon } = this.props
		const { animation } = this.state
		return (
			<div class={`busn_common ${this.state.animation ? 'busn_main2' : 'busn_main'}`} onClick={this.init}>
				<div class={this.state.animation ? 'busn_sub2' : 'busn_sub'}>
					<picture>
						<source srcSet={config.urls.media_business_types + icon + '.webp'} alt={config.translations.business_types.content[name].title} />
						<img class='busn_img' src={config.urls.media_business_types + icon + '.jpg'} width='272' height='167' loading='lazy' alt={config.translations.business_types.content[name].title} />
					</picture>
				</div>
				<div class={this.state.animation ? 'busn_bottom_info2' : 'busn_bottom_info'}>
					<p class='busn_title'>{config.translations.business_types.content[name].title}</p>
					{animation &&	<div>
						<div class='busn_line' />
						<p class='busn_text'>{config.translations.business_types.content[name].text}</p>
					</div>}
				</div>
			</div>
		)
	}
}
