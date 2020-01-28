import { h, Fragment, Component } from 'preact'
import SmallPreview from '../smallPreview'
import DetailInfo from '../detailInfo'

export default class CommonInfo extends Component {
	state = {
		showDetail: false
	}

	handleShowDetail = () => this.setState({ showDetail: !this.state.showDetail })

	render ({animation, translations, config}) {
		const { showDetail } = this.state
		return (
			<div>
				<section class='top_section'>
					<div class={`text ${animation && (config.isRTL ? 'topSection_rtl' :'topSection_ltr')}`}>
						<h2 class={!animation ? 'hidden_content' : ''}>{translations.pricing.title}</h2>
					</div>
					<div class='background_top'>
						{!animation
							? <img class={config.isRTL ? 'man_rtl' : 'man_ltr'} src={config.urls.media + 'man.svg'} alt='man' />
							: <Fragment>
								<img class={config.isRTL ? `scale start_bg_rtl` : 'start_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
								<img class={config.isRTL ? 'man_active_rtl' : 'man_active_ltr'} src={config.urls.media + 'man_active.svg'} alt='man' />
								<img class={config.isRTL ? 'screen_active_rtl' : 'screen_active_ltr'} src={config.urls.media + 'screen.svg'} alt='screen' />
								<img class={config.isRTL ? 'coin_rtl' : 'coin_ltr'} src={config.urls.media + 'coin.svg'} alt='coin' />
							</Fragment>}
					</div>
				</section>
				<section class={`types_wrap ${animation && (config.isRTL ? 'topSection_rtl' :'topSection_ltr')}`}>
					<div class={!animation ? 'hidden_content' : ''}>
						<h3 class='price_subtitle'>{translations.pricing.subtitle}</h3>
						{!showDetail
							? <section class={'pricing_plan'}>
								{config.modules.pricing.data.map(item => <SmallPreview translations={translations} config={config} showDetail={this.handleShowDetail} name={item.name} icon={item.icon} value={item.price_monthly} />)}
							</section>
							: <DetailInfo translations={translations} config={config} />}
					</div>
				</section>
			</div>
		)
	}
}
