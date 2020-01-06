import { h } from 'preact'
import { config }from 'home_website/config_ssr.js'

export default ({ messenger }) => {
	return (
		<a class='messenger_item' href={messenger.url} >
			<span class='messenger_icon_wrap'><img src={config.urls.media + messenger.icon} alt={messenger.icon} /></span>
			<span class='messenger_name'>{config.translations.contact_us.data[messenger.name].name}</span>
		</a>
	)
}
