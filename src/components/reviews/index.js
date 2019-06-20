import { h, Component } from 'preact';
import Feedback from './component';
import page_style from './style.less';
import style from '../for_whom/style.less';
import styles from '../features/component/allFeatures/style.less';

export default class Reviews extends Component {
	state = {
		feedback: config.modules.feedback.data
	}
	render() {
		const { feedback } = this.state
		console.log(feedback)
		return (
			<div class={style.for_whom}>
				<section class={styles.top_section}>
					<div class={style.title}>
						<h2 >{config.translations.feedback.main_title}</h2>
						<div class={style.actions}>
							<div class={style.tap}>
								<img src={config.urls.static + 'ic_reviews_active.svg'} />
							</div>
							<p>{config.translations.feedback.leave_btn_label}</p>
						</div>
					</div>
					<div class={styles.background_top}>
						<img class={config.isRTL ? styles.inner_rtl : styles.inner_ltr} src={config.urls.static + 'bg_top.svg'}/>
						<img class={config.isRTL ? page_style.outer_rtl : page_style.outer_ltr} src={config.urls.static + 'ill_reviews.svg'}/>
					</div>
				</section>
				<h3 class={style.subtitle}>{config.translations.feedback.subtitle}</h3>
				<section class={style.business_type}>
					{feedback.map(item => <Feedback name={item.customer_name} rating={item.rating} />)}
				</section>
			</div>
		);
	}
}
