import { h } from 'preact'
import style from './sign_up_btn.less'

export default ({ glow }) => {
	return (
		<a class={`${style.button} ${glow ? style.glowing : style.static}`} href={config.urls.signup}>
			<span class={style.button_label} >{config.translations.hero.sign_up}</span>
		</a>
	)
}
