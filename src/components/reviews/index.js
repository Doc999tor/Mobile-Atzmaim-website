import { h, Component } from 'preact';
import Feedback from './component';
import AddFeedback from './component/addFeedback/';
import page_style from './style.less';
import style from '../for_whom/style.less';
import styles from '../features/component/allFeatures/style.less';

export default class Reviews extends Component {
	state = {
		addFeedback: false,
		feedback: config.modules.feedback.data
	}
	handleToggleForm = () => this.setState({addFeedback: !this.state.addFeedback})
	onFormSubmit = (name, rating, picture, text) => {
		console.log(name, rating, picture, text);
		let newFeedback = {};
		newFeedback.id = 'Math.random() * 100';
		newFeedback.customer_name = name;
		newFeedback.rating = rating;
		newFeedback.picture = picture;
		newFeedback.text = text;
		this.setState(() => ({
			feedback: [
				newFeedback,
				...this.state.feedback
			]
		}));
	}

	render() {
		const { feedback, addFeedback } = this.state;
		return (
			<div class={style.for_whom}>
				{addFeedback
					? <AddFeedback cancel={this.handleToggleForm} onFormSubmit={this.onFormSubmit} />
					: <div>
						<section class={styles.top_section}>
							<div class={style.title}>
								<h2 >{config.translations.feedback.main_title}</h2>
								<div class={style.actions}>
									<div class={style.tap} onClick={this.handleToggleForm}>
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
						<section class={page_style.reviews_wrap}>
							{feedback.map(item => <Feedback icon={item.picture} name={item.customer_name} rating={item.rating} text={item.text} />)}
						</section>
					</div>}
			</div>
		);
	}
}
