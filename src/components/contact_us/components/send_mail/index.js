import { h } from 'preact'
import style from './sendMail.less'

export default ({ openForm }) => {
	return (
		<button class={style.button} type='button' onClick={openForm}>
			<img src={config.urls.media + 'ic_mail.svg'} />
			<span class={style.label}>{config.translations.contact_us.send_mail_label}</span>
		</button>
	)
}
