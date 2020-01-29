import { h } from 'preact'

export default ({ translations, config, openForm }) => {
	return (
		<button class='sendmail_button' type='button' onClick={openForm}>
			<img src={config.urls.media + 'ic_mail.svg'} />
			<span class='sendmail_label'>{translations.contact_us.send_mail_label}</span>
		</button>
	)
}
