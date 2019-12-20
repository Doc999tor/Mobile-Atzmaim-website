import { h, Fragment, Component } from 'preact'
import Feature from '../feature'
import style from './all.less'

export default class AllFeatures extends Component {
	shouldComponentUpdate = (nextProps, nextState) => {
		if (nextProps.secondAnimation === this.props.secondAnimation) return false
	}

	render () {
		const { iconsData, selectFeature, animations, secondAnimation, activeLink } = this.props
		const firstP = animations ? style.discover_phone : style.phone_act
		const firstW = animations ? style.discover_woman : style.active_woman_l
		const secondP = animations ? style.discover_phone_rtl : style.phone_act_r
		const secondW = animations ? style.discover_woman_rtl : style.active_woman_r
		const staticWrap = animations ? '' : style.static_wrap
		const staticTitleRtl = animations ? style.static_title : style.text_end_rtl
		const staticTitleLtr = animations ? style.static_title : style.text_end_ltr

		return (
			<div class={style.container}>
				<section class={style.top_section}>
					<div class={`${style.text} ${secondAnimation && (config.isRTL ? staticTitleRtl : staticTitleLtr)}`}>
						{secondAnimation && <h2>{config.translations.features.content.title}</h2>}
					</div>
					<div class={style.background_top}>
						{!secondAnimation
							? <Fragment>
								<img class={config.isRTL ? `${style.scale} ${style.blank_phone_r}` : style.blank_phone_l} src={config.urls.media + 'phone_fch.svg'} alt='phone off' />
								<img class={config.isRTL ? `${style.scale} ${style.blank_woman_r}` : style.blank_woman_l} src={config.urls.media + 'woman_fch.svg'} alt='woman' />
							</Fragment>
							: <Fragment>
								<img class={config.isRTL ? `${style.scale} ${style.start_bg_rtl}` : style.start_bg} src={config.urls.media + 'bg_top.svg'} alt='background' />
								<img class={config.isRTL ? secondP : firstP} src={config.urls.media + 'active_phone.svg'} alt='phone on' />
								<img class={config.isRTL ? secondW : firstW} src={config.urls.media + 'active_woman.svg'} alt='woman' />
							</Fragment>}
					</div>
				</section>
				<div class={`${style.wrap} ${secondAnimation && staticWrap}`}>
					{secondAnimation && <div class={style.features_container}>
						{config.modules.features.data.map(item => {
							const svgObj = iconsData.find(i => item.name === i.name)
							return <Feature selectFeature={selectFeature} feature={item} svgObj={svgObj} />
						})}
					</div>}
				</div>
			</div>
		)
	}
}
