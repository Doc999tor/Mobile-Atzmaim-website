import { h, Component, Fragment, createRef } from 'preact'
import { postService, postValidateService } from '../../../../services/send_mail.js'
import { getCurrentFormatTime } from '../../../../helpers/helpers'
import SendModal from '../send_mail_modal'
import style from './sendForm.less'

export default class SendMailForm extends Component {
	state = {
		contact: '',
		mail: '',
		statusOutsideValidation: false,
		incorrectNumber: false,
		send: false,
		sending: false
	}

 contactDetail = createRef()

 textArea = createRef()

 componentDidMount () {
 	this.contactDetail.current.focus()
 }

	handleBlurPhone = () => {
		const value = this.state.contact
		if (value) {
			const url = config.urls.validate_api
			const body = `phone=${value}`
			this.setState({
				statusOutsideValidation: true
			})
			return postValidateService(body, url)
				.then(({ status }) => {
					if (status === 200) {
						this.setState({
							incorrectNumber: false
						})
						return true
					}
					if (status === 422) {
						this.setState({
							incorrectNumber: true
						})
						return false
					}
				})
				.catch(error => console.log({ error }))
				.finally(() => {
					this.setState({
						statusOutsideValidation: false
					})
				})
		}
	}

	handleSendMailForm = e => {
		e.preventDefault()
		const { contact, mail, incorrectNumber } = this.state
		if (mail && this.handleValidation()) {
			this.handleBlurPhone().then(res => {
				if (res) {
					this.setState({ send: true, sending: true }, () => {
						setTimeout(() => {
							const body = `contact_detail=${contact.trim()}&message=${mail.trim()}&added=${getCurrentFormatTime()}`
							postService(config.urls.send_mail, body).then(r => {
								if (r.status === 201) {
									this.setState({
										sending: false
									}, () => {
										setTimeout(() => {
											window.history.back()
										}, 2000)
									})
								}
							})
						}, 2000)
					})
				}
			})
		} else if (incorrectNumber || contact?.trim() === '') {
			this.contactDetail.current.focus()
			this.setState({
				incorrectNumber: true
			})
		} else if (!mail) {
			this.textArea.current.focus()
		}
	}

	handleCangeInput = e => {
		const value = e.target.value
		const name = e.target.name
		this.setState({
			[name]: value,
			incorrectNumber: name === 'contact' ? false : this.state.incorrectNumber
		})
	}

	handleCloseModal = () => this.setState({ send: false })

	handleValidation = () => {
		if (this.state.contactValue?.trim() !== '' && !this.state.statusOutsideValidation && !this.state.incorrectNumber) {
			this.setState({
				incorrectNumber: false
			})
			return true
		} else {
			this.setState({
				incorrectNumber: true
			})
			return false
		}
	}

	render () {
		const { incorrectNumber, send, sending } = this.state
		return (
			<Fragment>
				{!send
					? <form id='send_form' onSubmit={this.handleSendMailForm} class={style.container}>
						<h2 class={style.title}>{config.translations.contact_us.mobile.send_form_title}</h2>
						<p class={style.text_label + (incorrectNumber ? ` ${style.not_valid_label}` : '')}>{config.translations.contact_us.contact_input_label}</p>
						<input ref={this.contactDetail} placeholder={config.translations.contact_us.placeholder_contact} name='contact' onBlur={this.handleValidation} onInput={this.handleCangeInput} class={`${style.contact_input} ${this.state.incorrectNumber ? style.not_valid : ''}`} type='tel' />
						<p class={style.text_label}>{config.translations.contact_us.message_input_label}</p>
						<textarea ref={this.textArea} placeholder={config.translations.contact_us.placeholder_message} name='mail' onInput={this.handleCangeInput} class={style.textarea} />
						<div class={style.btn_wrap}>
							<button class={style.cancel} type='button' onClick={this.props.onCloseMailForm}><img src={config.urls.media + 'ic_cancel.svg'} />{config.translations.contact_us.mobile.send_form_cancel_btn_label}</button>
							<button class={style.send} type='submit'><img src={config.urls.media + 'ic_send.svg'} />{config.translations.contact_us.mobile.send_form_send_btn_label}</button>
						</div>
					</form>
					: <SendModal sending={sending} />
				}
			</Fragment>
		)
	}
}
