import { h, Component } from 'preact';
import SmallPreview from '../smallPreview';
import DetailInfo from '../detailInfo';
import styles from '../../../features/component/allFeatures/style.less';
import style from './style.less';

export default class CommonInfo extends Component {
	state = {
		showDetail: false
	}

	handleShowDetail = () => this.setState({showDetail: !this.state.showDetail})
	render() {
		const { showDetail } = this.state
		return (
			<div>
				<section class={styles.top_section}>
					<h2 >{config.translations.pricing.title}</h2>
					<div class={styles.background_top}>
						<img class={config.isRTL ? styles.inner_rtl : styles.inner_ltr} src={config.urls.media + 'bg_top.svg'}/>
						<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'ill_pricing.svg'}/>
					</div>
				</section>
				<h3 class={style.subtitle}>{config.translations.pricing.subtitle}</h3>
				{!showDetail
					? <section class={style.pricing_plan}>
						{config.modules.pricing.data.map(item => <SmallPreview showDetail={this.handleShowDetail} name={item.name} icon={item.icon} value={item.price_monthly} />)}
					</section>
					: <DetailInfo />}
			</div>
		);
	}
}
