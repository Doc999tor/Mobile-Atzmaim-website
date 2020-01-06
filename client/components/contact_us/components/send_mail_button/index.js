import { h } from 'preact'
import { config }from 'home_website/config_ssr.js'

export default ({ openForm }) => {
	return (
		<button class='sendmail_button' type='button' onClick={openForm}>
			<img src={config.urls.media + 'ic_mail.svg'} />
			<span class='sendmail_label'>{config.translations.contact_us.send_mail_label}</span>
		</button>
	)
}
