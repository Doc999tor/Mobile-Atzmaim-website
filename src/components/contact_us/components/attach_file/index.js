import { h } from 'preact'
import style from './attachFile.less'

export default ({ handleChangeFile }) => {
	return (
		<div class={style.attach_file}>
			<input class={style.attach_file_input} type='file' name='file' id='input_file' onChange={handleChangeFile} />
			<p class={style.attach_text}>
				{config.translations.contact_us.attach_file_text}
			</p>
			<button class={style.attach_button} type='button'>
				<img src={`${config.urls.media}ic_attach.svg`} alt='image-attach' />
				<span>
					{config.translations.contact_us.attach_file_btn_label}
				</span>
			</button>
		</div>
	)
}
