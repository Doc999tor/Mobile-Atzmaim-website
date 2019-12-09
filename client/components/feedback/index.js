import { h, Fragment, Component } from 'preact'
import { config } from '../../../components-lib/Home_website/config_ssr.js'
import AddFeedback from './component/addFeedback'
import Feedback from './component/post'

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
			<div id='feedback' class='height'>
				{addFeedback
					? <AddFeedback cancel={this.handleToggleForm} onFormSubmit={this.onFormSubmit} />
					: <div>
						<section class='top_section'>
							<div class={`text ${animation && 'text_end'}`}>
								<h2 >{config.translations.feedback.main_title}</h2>
								<div class='types_actions'>
									<div class='types_tap' onClick={this.handleToggleForm}>
										<img src={config.urls.media + 'ic_reviews_active.svg'} alt='reviews' />
									</div>
									<p>{config.translations.feedback.leave_btn_label}</p>
								</div>
							</div>
							<div class='background_top'>
								{!animation
									? <Fragment>
										<img class={config.isRTL ? `scale start_bg` : 'start_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
										<img class={config.isRTL ? 'feedback_outer_rtl' : 'feedback_outer_ltr'} src={config.urls.media + 'woman.svg'} alt='woman' />
									</Fragment>
									: <Fragment>
										<img class={config.isRTL ? 'inner_rtl' : 'inner_ltr'} src={config.urls.media + 'bg_top.svg'} alt='background' />
									</Fragment>
								}
								{
									!animation && <img class={config.isRTL ? 'woman_rtl' : 'woman_ltr'} src={config.urls.media + 'woman.svg'} alt='woman' />
								}
								{!animation
									? <img class={config.isRTL ? 'city_start_rtl' : 'city_start_ltr'} src={config.urls.media + 'big_city.svg'} alt='big city' />
									: <img class={config.isRTL ? 'big_city_rtl' : 'big_city_ltr'} src={config.urls.media + 'big_city.svg'} alt='big city' />
								}
								{!animation
									? <img class={config.isRTL ? 'woman_start_rtl' : 'woman_start_ltr'} src={config.urls.media + 'woman_call.svg'} alt='woman' />
									: <img class={config.isRTL ? `${animation && 'woman_end_rtl'}` : `${animation && 'woman_end_ltr'}`} src={config.urls.media + 'woman_call.svg'} alt='woman' />
								}
							</div>
						</section>
						<section class={`types_wrap ${animation && 'types_wrap_end'}`}>
							{animation && <div>
								<h3 class='subtitle'>{config.translations.feedback.subtitle}</h3>
								<div class='reviews_wrap'>
									{feedback.map(item => <Feedback icon={item.picture} name={item.customer_name} rating={item.rating} text={item.text} />)}
								</div>
							</div>}
						</section>
					</div>}
			</div>
		)
	}
}
