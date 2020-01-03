import { h, Component } from 'preact'
import common from '../hero/hero.less'
import MainContent from './components/main_content'
import SendMailForm from './components/send_mail_form'

export default class ContactUs extends Component {
	state = {
		openMailForm: false
	}

	handleOpenMailForm = () => this.setState({ openMailForm: true })

	handleCloseMailForm = () => this.setState({ openMailForm: false })

	render () {
		const { openMailForm } = this.state
		const background = { backgroundColor: 'white' }
		return (
			<div id='contact_us' class={common.height} style={openMailForm ? background : ''}>
				{!openMailForm
					? <MainContent onOpenMailForm={this.handleOpenMailForm} />
					: <SendMailForm onCloseMailForm={this.handleCloseMailForm} />}
			</div>
		)
	}
}
