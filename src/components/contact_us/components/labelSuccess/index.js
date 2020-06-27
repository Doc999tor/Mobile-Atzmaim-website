import { h } from 'preact'
import style from './label.less'

export default () => {
	return (
		<div class={style.success}>
			<img class={style.mark} src={config.urls.media + 'ic_mark.svg'} />
		</div>
	)
}
