import { h, Fragment, Component } from 'preact'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'
import SmallPreview from '../smallPreview'
import DetailInfo from '../detailInfo'

export default class CommonInfo extends Component {
	state = {
		showDetail: false
	}

	handleShowDetail = () => this.setState({ showDetail: !this.state.showDetail })

	render () {
		const { animation } = this.props
		const { showDetail } = this.state
		return (
			<div>
				<section class='top_section'>
					<div class={`text ${animation && 'text_end'}`}>
						{animation && <h2>{config.translations.pricing.title}</h2>}
					</div>
					<div class='background_top'>
						{!animation
							? <Fragment>
								<img class={config.isRTL ? `scale start_bg` : 'start_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
								<img class={config.isRTL ? 'outer_rtl' : 'outer_ltr'} src={config.urls.media + 'man_active.svg'} alt='man' />
							</Fragment>
							: <Fragment>
								<img class={config.isRTL ? 'inner_rtl' : 'inner_ltr'} src={config.urls.media + 'bg_top.svg'} alt='background' />
							</Fragment>
						}

						{
							!animation && <img class={config.isRTL ? 'man_rtl' : 'man_ltr'} src={config.urls.media + 'man.svg'} alt='man' />
						}
						{!animation
							? <img class={config.isRTL ? 'man_start_rtl' : 'man_start_ltr'} src={config.urls.media + 'man.svg'} alt='man' />
							: <img class={config.isRTL ? `${animation && 'man_end_rtl'}` : `${animation && 'man_end_ltr'}`} src={config.urls.media + 'man_active.svg'} alt='man' />
						}
						{!animation
							? <img class={config.isRTL ? 'coin_start_rtl' : 'coin_start_ltr'} src={config.urls.media + 'coin.svg'} alt='coin' />
							: <img class={config.isRTL ? 'coin_rtl' : 'coin_ltr'} src={config.urls.media + 'coin.svg'} alt='coin' />
						}
						{!animation
							? <img class={config.isRTL ? 'outer_start_rtl' : 'outer_start_ltr'} src={config.urls.media + 'screen.svg'} alt='screen' />
							: <img class={config.isRTL ? 'outer_rtl' : 'outer_ltr'} src={config.urls.media + 'screen.svg'} alt='screen' />
						}
					</div>
				</section>
				<section class={`types_wrap ${animation && 'types_wrap_end'}`}>
					{animation && <div>
						<h3 class='price_subtitle'>{config.translations.pricing.subtitle}</h3>
						{!showDetail
							? <section class={'pricing_plan'}>
								{config.modules.pricing.data.map(item => <SmallPreview showDetail={this.handleShowDetail} name={item.name} icon={item.icon} value={item.price_monthly} />)}
							</section>
							: <DetailInfo />}
					</div>}
				</section>
			</div>
		)
	}
}
