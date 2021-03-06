import { h } from 'preact'
import style from './sendButton.less'

export default ({ openForm }) => {
	return (
		<button class={style.button} type='button' onClick={openForm}>
			<img src={config.urls.media + 'ic_mail.svg'} />
			<span class={style.label}>{config.translations.contact_us.mobile.create_mail_btn_label}</span>
		</button>
	)
}
