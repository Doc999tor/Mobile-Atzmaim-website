import { h, Component } from 'preact';
import style from './style.less';
export default class AddFeedback extends Component {
	state = {
		rate_app: [{id: 1, rating: 1},{id: 2, rating: 2},{id: 3, rating: 3},{id: 4, rating: 4},{id: 5, rating: 5}],
		picture: null,
		name: '',
		textarea: '',
		rating: null
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.name, this.state.rating, this.state.picture, this.state.textarea);
		this.setState({
			picture: null,
			name: '',
			textarea: '',
			rating: null
		}, this.props.cancel());
	}
	handleCancel = e => {
		e.preventDefault();
		this.props.cancel();
	}
	handleInputChange = e => {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value
		});
	}
	rating = (rating, icon) => (
		Array.from({ length: rating }).map((r, i) => <img class={style.star} key={i} src={config.urls.static + icon} />)
	);
	handleRateApp = rating => this.setState({ rating });
	handleRenderStars = () => {
		return (<div class={style.star_box}>
			{this.rating(this.state.rating, 'star.svg')}
			{this.rating(this.state.rate_app.length - this.state.rating, 'ic_star.svg', true)}
		</div>);
	}

	render() {
		const { rate_app, rating, name, textarea } = this.state
		console.log(this.state);

		return (
			<div class={style.feedback_wrap}>
				<form class={style.add_feedback} onSubmit={this.handleSubmit}>
					<label class={style.label}>
						<div class={style.upload}>
							<img class={style.picture} src={config.urls.static + 'ic_upload_photo.svg'} />
						</div>
						<span class={style.upload_text}>{config.translations.feedback.upload_photo}</span>
						<input class={style.file} type='file' />

					</label>
					<input value={name} onChange={this.handleInputChange} name='name' class={style.name} type='text' placeholder={config.translations.feedback.name_label} />
					<textarea value={textarea} onChange={this.handleInputChange} name='textarea' class={style.text} placeholder={config.translations.feedback.text_label} />
					{!rating
						? <div class={style.star_box}>
							{rate_app.map(item => <img onClick={() => this.handleRateApp(item.rating)} key={item.id} src={config.urls.static + 'ic_star.svg'} />)}
						</div>
						: this.handleRenderStars()
					}
					<div class={style.buttons}>
						<button onClick={this.handleCancel} class={style.cancel}>{config.translations.feedback.cancel_label}</button>
						<button type='submit' class={style.submit}>{config.translations.feedback.submit_label}</button>
					</div>
				</form>
			</div>
		);
	}
}
