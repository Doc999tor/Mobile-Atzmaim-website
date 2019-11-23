import { h, Component } from 'preact'
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
						<img class={config.isRTL ? styles.inner_rtl : styles.inner_ltr} src={config.urls.media + 'bg_top.svg'} />
						<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'ill_pricing.svg'} />
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
