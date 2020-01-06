import { h, Component, Fragment, createRef } from 'preact'
import { route } from 'preact-router'
import { postService } from '../../../../services/send_mail.js'
import { default as validatePhone } from '../../../../../components-lib/validate-phone'
import { getCurrentFormatTime } from '../../../../helpers/helpers'
import SendModal from '../send_mail_modal'
import style from './sendForm.less'

export default class SendMailForm extends Component {
	state = {
		contact: '',
		mail: '',
		valid: true,
		send: false,
		sending: false
	}

 contactDetail = createRef()

 textArea = createRef()

 componentDidMount () {
 	this.contactDetail.current.focus()
 }

	handleSendMailForm = e => {
		e.preventDefault()
		const { contact, mail, valid } = this.state
		if (contact && mail && valid) {
			this.setState({ send: true, sending: true }, () => {
				setTimeout(() => {
					const body = `contact_detail=${contact.trim()}&message=${mail.trim()}&added=${getCurrentFormatTime()}`
					postService(config.urls.send_mail, body).then(r => {
						if (r.status === 201) {
							this.setState({
								sending: false
							}, () => {
								setTimeout(() => {
									this.handleCloseModal()
									route(config.baseUrl + '/', true)
								}, 700)
							})
						}
					})
				}, 2000)
			})
		} else if (!valid || !contact) {
			this.contactDetail.current.focus()
		} else if (!mail) {
			this.textArea.current.focus()
		}
	}

	handleCangeInput = e => {
		const value = e.target.value
		const name = e.target.name
		this.setState({
			[name]: value
		})
	}

	handleCloseModal = () => this.setState({ send: false })

	handleValidation = () => {
		const regMail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,6})/
		if (validatePhone(this.state.contact.trim()) || regMail.test(this.state.contact.trim())) {
			this.setState({
				valid: true
			})
		} else {
			this.setState({
				valid: false
			})
		}
	}

	render () {
		const { valid, send, sending } = this.state
		return (
			<Fragment>
				{!send
					? <form id='send_form' onSubmit={this.handleSendMailForm} class={style.container}>
						<h2 class={style.title}>{config.translations.contact_us.send_form.main_title}</h2>
						<p class={style.text_label + (!valid ? ` ${style.not_valid_label}` : '')}>{config.translations.contact_us.send_form.phone_mail_label}</p>
						<input ref={this.contactDetail} name='contact' onBlur={this.handleValidation} onInput={this.handleCangeInput} class={`${style.contact_input} ${!this.state.valid ? style.not_valid : ''}`} type='text' />
						<p class={style.text_label}>{config.translations.contact_us.send_form.message_label}</p>
						<textarea ref={this.textArea} name='mail' onInput={this.handleCangeInput} class={style.textarea} />
						<div class={style.btn_wrap}>
							<button class={style.cancel} type='button' onClick={this.props.onCloseMailForm}><img src={config.urls.media + 'ic_cancel.svg'} />{config.translations.contact_us.send_form.cancel_btn_label}</button>
							<button class={style.send} type='submit'><img src={config.urls.media + 'ic_send.svg'} />{config.translations.contact_us.send_form.send_btn_label}</button>
						</div>
					</form>
					: <SendModal sending={sending} />
				}
			</Fragment>
		)
	}
}
