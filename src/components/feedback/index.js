import { h, Fragment, Component } from 'preact'
import Feedback from './component'
import AddFeedback from './component/addFeedback/'
import page_style from './feedback.less'
import style from '../business_types/types.less'
import styles from '../features/component/allFeatures/all.less'
import common from '../hero/hero.less'

export default class Reviews extends Component {
	state = {
		addFeedback: false,
		feedback: config.modules.feedback.data
	}

	handleToggleForm = () => this.setState({ addFeedback: !this.state.addFeedback })

	onFormSubmit = (name, rating, picture, text) => {
		const newFeedback = {}
		newFeedback.id = 'Math.random() * 100'
		newFeedback.customer_name = name
		newFeedback.rating = rating
		newFeedback.picture = picture
		newFeedback.text = text
		this.setState(() => ({
			feedback: [
				newFeedback,
				...this.state.feedback
			]
		}))
	}

	render () {
		const { feedback, addFeedback } = this.state
		const { animation } = this.props
		return (
			<div id='feedback' class={common.height}>
				{addFeedback
					? <AddFeedback cancel={this.handleToggleForm} onFormSubmit={this.onFormSubmit} />
					: <div>
						<section class={styles.top_section}>
							<div class={`${styles.text} ${animation && styles.text_end}`}>
								<h2 >{config.translations.feedback.main_title}</h2>
								<div class={style.actions}>
									<div class={style.tap} onClick={this.handleToggleForm}>
										<img src={config.urls.media + 'ic_reviews_active.svg'} />
									</div>
									<p>{config.translations.feedback.leave_btn_label}</p>
								</div>
							</div>
							<div class={styles.background_top}>
								{!animation
									? <Fragment>
										<img class={config.isRTL ? `${styles.scale} ${styles.start_bg}` : styles.start_bg} src={config.urls.media + 'bg_top.svg'} />
										<img class={config.isRTL ? page_style.outer_rtl : page_style.outer_ltr} src={config.urls.media + 'woman.svg'} />
									</Fragment>
									: <Fragment>
										<img class={config.isRTL ? styles.inner_rtl : styles.inner_ltr} src={config.urls.media + 'bg_top.svg'} />
										<img class={config.isRTL ? page_style.city_rtl : page_style.city_ltr} src={config.urls.media + 'big_city.svg'} />
									</Fragment>
								}
								{
									!animation && <img class={config.isRTL ? page_style.woman_rtl : page_style.woman_ltr} src={config.urls.media + 'woman.svg'} />
								}
								{!animation
									? <img class={config.isRTL ? page_style.woman_start_rtl : page_style.woman_start_ltr} src={config.urls.media + 'woman_call.svg'} />
									: <img class={config.isRTL ? `${animation && page_style.woman_end_rtl}` : `${animation && page_style.woman_end_ltr}`} src={config.urls.media + 'woman_call.svg'} />
								}
							</div>
						</section>
						<section class={`${style.wrap} ${animation && style.wrap_end}`}>
							{animation && <div>
								<h3 class={style.subtitle}>{config.translations.feedback.subtitle}</h3>
								<div class={page_style.reviews_wrap}>
									{feedback.map(item => <Feedback icon={item.picture} name={item.customer_name} rating={item.rating} text={item.text} />)}
								</div>
							</div>}
						</section>
					</div>}
			</div>
		)
	}
}
