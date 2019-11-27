import { h, Fragment, Component } from 'preact'
import SmallPreview from '../smallPreview'
import DetailInfo from '../detailInfo'
import styles from '../../../features/component/allFeatures/all.less'
import typesStyl from '../../../business_types/types.less'
import style from './common.less'

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
				<section class={styles.top_section}>
					<div class={`${styles.text} ${animation && styles.text_end}`}>
						{animation && <h2>{config.translations.pricing.title}</h2>}
					</div>
					<div class={styles.background_top}>
						{!animation
							? <Fragment>
								<img class={config.isRTL ? `${styles.scale} ${styles.start_bg}` : styles.start_bg} src={config.urls.media + 'bg_top.svg'} alt='background' />
								<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'man_active.svg'} alt='man' />
							</Fragment>
							: <Fragment>
								<img class={config.isRTL ? styles.inner_rtl : styles.inner_ltr} src={config.urls.media + 'bg_top.svg'} alt='background' />
							</Fragment>
						}

						{
							!animation && <img class={config.isRTL ? style.man_rtl : style.man_ltr} src={config.urls.media + 'man.svg'} alt='man' />
						}
						{!animation
							? <img class={config.isRTL ? style.man_start_rtl : style.man_start_ltr} src={config.urls.media + 'man.svg'} alt='man' />
							: <img class={config.isRTL ? `${animation && style.man_end_rtl}` : `${animation && style.man_end_ltr}`} src={config.urls.media + 'man_active.svg'} alt='man' />
						}
						{!animation
							? <img class={config.isRTL ? style.coin_start_rtl : style.coin_start_ltr} src={config.urls.media + 'coin.svg'} alt='coin' />
							: <img class={config.isRTL ? style.coin_rtl : style.coin_ltr} src={config.urls.media + 'coin.svg'} alt='coin' />
						}
						{!animation
							? <img class={config.isRTL ? style.outer_start_rtl : style.outer_start_ltr} src={config.urls.media + 'screen.svg'} alt='screen' />
							: <img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'screen.svg'} alt='screen' />
						}
					</div>
				</section>
				<section class={`${typesStyl.wrap} ${animation && typesStyl.wrap_end}`}>
					{animation && <div>
						<h3 class={style.subtitle}>{config.translations.pricing.subtitle}</h3>
						{!showDetail
							? <section class={style.pricing_plan}>
								{config.modules.pricing.data.map(item => <SmallPreview showDetail={this.handleShowDetail} name={item.name} icon={item.icon} value={item.price_monthly} />)}
							</section>
							: <DetailInfo />}
					</div>}
				</section>
			</div>
		)
	}
}
