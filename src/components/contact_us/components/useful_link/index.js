import { h } from 'preact'
import style from './useful_link.less'

export default ({ item, index }) => {
	return (
		<a class={style.useful_link} href={item.link_to} target='_blank'>
			<span class={style.title} >{config.translations.contact_us.useful_links.links[index].title}</span>
			<span class={style.text}>{config.translations.contact_us.useful_links.links[index].text}</span>
			<button class={style.link_button} type='button'>
				<span>{config.translations.contact_us.useful_links.link_label}</span>
				<img src={config.urls.media + 'ic_arrow_right.svg'} />
			</button>
		</a>
	)
}
