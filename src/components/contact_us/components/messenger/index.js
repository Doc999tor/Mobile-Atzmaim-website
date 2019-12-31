import { h } from 'preact'
import style from './messenger.less'

export default ({ messenger }) => {
	return (
		<a class={style.item} href={messenger.url} >
			<span class={style.icon_wrap}><img class={style.icon} src={config.urls.media + messenger.icon} alt={messenger.icon} /></span>
			<span class={style.name}>{config.translations.contact_us.data[messenger.name].name}</span>
		</a>
	)
}
