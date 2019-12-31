import { h, Component } from 'preact'
import style from './sendForm.less'

export default class SendMailForm extends Component {

	handleSendMailForm = e => {
		e.preventDefault()
		console.log('SendMailForm')
	}

	render () {
		return (
			<form id='send_form' onSubmit={this.handleSendMailForm} class={style.container}>
				<h2 class={style.title}>{config.translations.contact_us.send_form.main_title}</h2>
				<p class={style.text_label}>{config.translations.contact_us.send_form.phone_mail_label}</p>
				<input class={style.contact_input} type='text' />
				<p class={style.text_label}>{config.translations.contact_us.send_form.message_label}</p>
				<textarea class={style.textarea} />
				<button type='button' onClick={this.props.onCloseMailForm}>{config.translations.contact_us.send_form.cancel_btn_label}</button>
				<button type='submit'>{config.translations.contact_us.send_form.send_btn_label}</button>
			</form>
		)
	}
}
