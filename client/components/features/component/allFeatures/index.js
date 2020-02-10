import { h, Fragment, Component } from 'preact'
import Feature from '../feature'

export default class AllFeatures extends Component {

	shouldComponentUpdate = (nextProps, nextState) => {
		if (nextProps.secondAnimation === this.props.secondAnimation) return false
	}

	render ({ translations, config, iconsData, selectFeature, animations, secondAnimation, activeLink }) {
		const firstP = animations ? 'discover_phone' : 'phone_act'
		const firstW = animations ? 'discover_woman' : 'active_woman_l'
		const secondP = animations ? 'discover_phone_rtl' : 'phone_act_r'
		const secondW = animations ? 'discover_woman_rtl' : 'active_woman_r'
		const staticBgrL = animations ? 'static_bg' : 'start_bg'
		const staticBgrR = animations ? 'static_bg_rtl' : 'start_bg_rtl'
		const staticTitleRtl = animations ? 'static_title' : 'topSection_rtl'
		const staticTitleLtr = animations ? 'static_title' : 'topSection_ltr'
		return (
			<div class={`container ${!secondAnimation && 'bgr'}`}>
				<section class='top_section'>
					<div class={`text ${secondAnimation && (config.isRTL ? staticTitleRtl : staticTitleLtr)}`}>
						<h2 class={!secondAnimation ? 'hidden_content' : ''}>{translations.features.content.title}</h2>
					</div>
					<div class='background_top'>
						{!secondAnimation
							? <Fragment>
								<img class={config.isRTL ? `scale blank_phone_r` : 'blank_phone_l'} src={config.urls.media + 'phone_fch.svg'} alt='phone off' />
								<img class={config.isRTL ? `scale blank_woman_r` : 'blank_woman_l'} src={config.urls.media + 'woman_fch.svg'} alt='woman' />
							</Fragment>
							: <Fragment>
								<img class={config.isRTL ? `scale ${staticBgrR}` : staticBgrL} src={config.urls.media + 'bg_top.svg'} alt='background' />
								<img class={config.isRTL ? secondP : firstP} src={config.urls.media + 'active_phone.svg'} alt='phone on' />
								<img class={config.isRTL ? secondW : firstW} src={config.urls.media + 'active_woman.svg'} alt='woman' />
							</Fragment>}
					</div>
				</section>
				<div class={`wrap ${secondAnimation && (config.isRTL ? staticTitleRtl : staticTitleLtr)}` }>
					{<div class={!secondAnimation ? 'hidden_content' : 'features_container'}>
					{config.modules.features.data.map(item => {
							const svgObj = iconsData.find(i => item.name === i.name)
							return <Feature translations={translations} selectFeature={selectFeature} feature={item} svgObj={svgObj} />
						})}
					</div>}
				</div>
			</div>
		)
	}
}
