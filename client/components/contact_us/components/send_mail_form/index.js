import { h, Component, Fragment, createRef } from 'preact'
import { route } from 'preact-router'
import { postService } from '../../../../services/send_mail.js'
import { default as validatePhone } from '../../../../../components-lib/validate-phone'
import { getCurrentFormatTime } from '../../../../helpers/helpers.js'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'
import SendModal from '../send_mail_modal'

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

	componentDidMount() {
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
		} else {
			mail ? this.contactDetail.current.focus() : this.textArea.current.focus()
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
		const { send, sending } = this.state
		return (
			<Fragment>
				{!send
					? <form id='send_form' onSubmit={this.handleSendMailForm} class='send_form_container'>
						<h2 class='send_form_title'>{config.translations.contact_us.send_form.main_title}</h2>
						<p class='input_label'>{config.translations.contact_us.send_form.phone_mail_label}</p>
						<input ref={this.contactDetail} name='contact' onBlur={this.handleValidation} onInput={this.handleCangeInput} class={`contact_input ${!this.state.valid ? 'not_valid' : ''}`} type='text' />
						<p class='input_label'>{config.translations.contact_us.send_form.message_label}</p>
						<textarea ref={this.textArea} name='mail' onInput={this.handleCangeInput} class='textarea' />
						<div class='send_form_btn_wrap'>
							<button class='send_form_cancel' type='button' onClick={this.props.onCloseMailForm}><img src={config.urls.media + 'ic_cancel.svg'} />{config.translations.contact_us.send_form.cancel_btn_label}</button>
							<button class='send_form_send' type='submit'><img src={config.urls.media + 'ic_send.svg'} />{config.translations.contact_us.send_form.send_btn_label}</button>
						</div>
					</form>
					: <SendModal sending={sending} />
				}
			</Fragment>
		)
	}
}
