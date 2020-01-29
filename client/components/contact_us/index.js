import { h, Component } from 'preact'
import MainContent from './components/main_content'
import SendMailForm from './components/send_mail_form'

export default class ContactUs extends Component {
	state = {
		openMailForm: false
	}

	handleOpenMailForm = () => this.setState({ openMailForm: true })

	handleCloseMailForm = () => this.setState({ openMailForm: false })

	render ({ translations, config }) {
		const { openMailForm } = this.state
		const background = { backgroundColor: 'white' }
		return (
			<div id='contact_us' class='height' style={openMailForm ? background : ''}>
				{!openMailForm
					? <MainContent translations={translations} config={config} onOpenMailForm={this.handleOpenMailForm} />
					: <SendMailForm translations={translations} config={config} onCloseMailForm={this.handleCloseMailForm} />}
			</div>
		)
	}
}
