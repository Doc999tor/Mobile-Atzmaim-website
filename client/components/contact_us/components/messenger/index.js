import { h } from 'preact'

export default ({ messenger, config, translations }) => {
	return (
		<a class='messenger_item' href={messenger.url} >
			<span class='messenger_icon_wrap'><img src={config.urls.media + messenger.icon} alt={messenger.icon} /></span>
			<span class='messenger_name'>{translations.contact_us.data[messenger.name].name}</span>
		</a>
	)
}
