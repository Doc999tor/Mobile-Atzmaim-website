import { h, Component } from 'preact';
import style from './style.less';
export default class AddFeedback extends Component {
	state = {
		rate_app: [{id: 1, rating: 1},{id: 2, rating: 2},{id: 3, rating: 3},{id: 4, rating: 4},{id: 5, rating: 5}],
		picture: null,
		flag: true,
		el: false,
		file: {},
		name: '',
		textareaField: '',
		rating: null
	}
	addFoto = e => {
		let f = e.target.files[0];
		let reader = new FileReader();
		reader.onload = e => this.setState({imgUrl: e.target.result, file: f, picture: f.name});
		reader.readAsDataURL(e.target.files[0]);
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.name, this.state.rating, this.state.picture, this.state.textareaField);
		this.setState({
			picture: null,
			name: '',
			textareaField: '',
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
			[name]: value,
			flag: false
		});
	}
	rating = (rating, icon) => (
		Array.from({ length: rating }).map((r, i) => <img class={style.star} key={i} src={config.urls.static + icon} />)
	);
	handleRateApp = rating => this.setState({ rating });
	handleRenderStars = () => {
		if (document.querySelector('#parent') && document.querySelector('#child') ) {
			document.querySelector('#parent').removeChild(document.querySelector('#child'));
		}
		return (<div id='child' class={style.star_box}>
			{this.rating(this.state.rating, 'star.svg') }
			{this.rating(5 - this.state.rating, 'ic_star.svg')}
		</div>);
	}
	render() {
		const { rate_app, rating, name, textareaField, flag } = this.state
		const disabled = !rating || !this.state.name || !this.state.textareaField
		return (
			<div class={style.feedback_wrap}>
				<form class={style.add_feedback} onSubmit={this.handleSubmit}>
					<div class={style.label_wrap}>
						{!this.state.imgUrl
							? <label class={style.label}>
								<div class={style.upload}>
									<img class={style.picture} src={config.urls.static + 'ic_upload_photo.svg'} />
								</div>
								<span class={style.upload_text}>{config.translations.feedback.upload_photo}</span>
								<input accept='image/*' class={style.file} type='file' onChange={this.addFoto} />
							</label>
							: <div class={style.added_photo}>
								<img class={style.uploaded_photo} src={this.state.imgUrl} />
								<p class={style.uploaded_text}>{config.translations.feedback.uploaded_photo}<img class={style.mark} src={config.urls.static + 'ic_check_mark.svg'} /></p>
							</div> }
					</div>
					<input value={name} onInput={this.handleInputChange} autoComplete='off' name='name' class={style.name} type='text' placeholder={config.translations.feedback.name_label} />
					<textarea value={textareaField} onInput={this.handleInputChange} name='textareaField' class={style.text} placeholder={config.translations.feedback.text_label} />
					<div id='parent' class={style.wrap} >
						{!rating
							? <div class={style.star_box}>
								{rate_app.map(item => <img onClick={() => this.handleRateApp(item.rating)} key={item.id} src={config.urls.static + 'ic_star.svg'} />)}
							</div>
							: this.handleRenderStars()
						}
					</div>
					<div class={style.buttons}>
						<button onClick={this.handleCancel} class={style.cancel}>{config.translations.feedback.cancel_label}</button>
						<button disabled={disabled} type='submit' class={style.submit + ' ' + (disabled ? style.disabled : '')}>{config.translations.feedback.submit_label}</button>
					</div>
				</form>
			</div>
		);
	}
}
