import { h, Component, Fragment, createRef } from 'preact'
import { postService } from '../../../../services/send_mail.js'
import validatePhone from '../../../../../components-lib/validate-phone'
import { getCurrentFormatTime } from '../../../../helpers/helpers'
import AttachFile from '../attach_file'
import File from '../file'
import Loader from '../loader'
import LabelSuccess from '../labelSuccess'
import SendModal from '../send_mail_modal'
import style from './sendForm.less'

export default class SendMailForm extends Component {
	state = {
		contact: '',
		mail: '',
		files: {},
		valid: true,
		send: false,
		sending: false,
		loaded: false,
		loading: false
	}

	contactDetail = createRef()

	textArea = createRef()

	componentDidMount () {
		this.contactDetail.current.focus()
	}

	handleChangeLoading = () => {
		this.setState({ loading: true })
	}

	handleChangeFile = e => {
		this.handleChangeLoading()
		const file = e.target.files[0]
		const newkey = file.name + Date.now()
		const reader = new FileReader()
		reader.onload = () => {
			setTimeout(() => {
				this.setState({
					loading: false, loaded: true
				}, () => {
					setTimeout(() => {
						this.setState({
							loaded: false,
							files: { ...this.state.files, [newkey]: file }
						})
					}, 1000)
				})
			}, 600)
		}
		reader.onerror = () => {
			console.log(reader.error)
		}
		reader.readAsDataURL(file)
	}

	handleDeleteFile = objKey => {
		const { [objKey]: _, ...finalData } = this.state.files
		this.setState({
			files: {
				...finalData
			}
		})
	}

	handleSendMailForm = e => {
		e.preventDefault()
		const { contact, mail, valid, files } = this.state
		if (contact && mail && valid) {
			this.setState({ send: true, sending: true }, () => {
				setTimeout(() => {
					const body = new FormData()
					body.append('contact_detail', contact.trim())
					body.append('message', mail.trim())
					body.append('added', getCurrentFormatTime())
					if (Object.values(files)?.length > 0) body.append('file', Object.values(files))
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
		const { valid, send, sending, files } = this.state
		return (
			<Fragment>
				{!send
					? <form id='send_form' onSubmit={this.handleSendMailForm} class={style.container}>
						<h2 class={style.title}>{config.translations.contact_us.mobile.send_form_title}</h2>
						<p class={style.text_label + (!valid ? ` ${style.not_valid_label}` : '')}>{config.translations.contact_us.contact_input_label}</p>
						<input ref={this.contactDetail} placeholder={config.translations.contact_us.placeholder_contact} name='contact' onBlur={this.handleValidation} onInput={this.handleCangeInput} class={`${style.contact_input} ${!this.state.valid ? style.not_valid : ''}`} type='text' />
						<p class={style.text_label}>{config.translations.contact_us.message_input_label}</p>
						<textarea ref={this.textArea} placeholder={config.translations.contact_us.placeholder_message} name='mail' onInput={this.handleCangeInput} class={style.textarea} />
						<AttachFile handleChangeFile={this.handleChangeFile} />
						<div class={style.files}>{
							Object.keys(files).map(item => {
								return <File files={files} item={item} onDeleteFile={this.handleDeleteFile} />
							})
						}</div>
						<div class={style.loader_wrap}>
							{this.state.loading && <Loader />}
							{this.state.loaded && <LabelSuccess />}
						</div>
						<div class={style.btn_position}>
							<div class={style.btn_wrap}>
								<button class={style.cancel} type='button' onClick={this.props.onCloseMailForm}>
									<img src={config.urls.media + 'ic_cancel.svg'} />
									<span >{config.translations.contact_us.mobile.send_form_cancel_btn_label}</span>
								</button>
								<button class={style.send} type='submit'>
									<img src={config.urls.media + 'ic_send.svg'} />
									<span>{config.translations.contact_us.mobile.send_form_send_btn_label}</span>
								</button>
							</div>
						</div>
					</form>
					: <SendModal sending={sending} />
				}
			</Fragment>
		)
	}
}
