import { h, Component, Fragment } from 'preact'
import SendModal from '../send_mail_modal'
import style from './sendForm.less'

export default class SendMailForm extends Component {
	state = {
		contact: '',
		mail: '',
		send: false,
		sending: false
	}

	handleSendMailForm = e => {
		e.preventDefault()
		const { contact, mail } = this.state
		this.setState({ send: true, sending: true }, () => {
			setTimeout(() => {
				this.setState({
					sending: false
				})
			}, 2000)
		})

		console.log('contact', contact, 'mail', mail)
	}

	handleCangeInput = e => {
		const value = e.target.value
		const name = e.target.name
		this.setState({
			[name]: value
		})
	}

	handleCloseModal = () => this.setState({ send: false })

	render () {
		const { send, sending } = this.state
		return (
			<Fragment>
				{!send
					? <form id='send_form' onSubmit={this.handleSendMailForm} class={style.container}>
						<h2 class={style.title}>{config.translations.contact_us.send_form.main_title}</h2>
						<p class={style.text_label}>{config.translations.contact_us.send_form.phone_mail_label}</p>
						<input name='contact' onInput={this.handleCangeInput} class={style.contact_input} type='text' />
						<p class={style.text_label}>{config.translations.contact_us.send_form.message_label}</p>
						<textarea name='mail' onInput={this.handleCangeInput} class={style.textarea} />
						<div class={style.btn_wrap}>
							<button class={style.cancel} type='button' onClick={this.props.onCloseMailForm}><img src={config.urls.media + 'ic_cancel.svg'} />{config.translations.contact_us.send_form.cancel_btn_label}</button>
							<button class={style.send} type='submit'><img src={config.urls.media + 'ic_send.svg'} />{config.translations.contact_us.send_form.send_btn_label}</button>
						</div>
					</form>
					: <SendModal sending={sending} closeModal={this.handleCloseModal} />
				}
			</Fragment>
		)
	}
}
