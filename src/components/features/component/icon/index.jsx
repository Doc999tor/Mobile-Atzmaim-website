import { h } from 'preact'

export const Icon = ({ icon, ...props }) => {
	const svg = require(`!raw-loader!home_website/features/${icon}`)
	return <span {...props} dangerouslySetInnerHTML={{ __html: svg.default }} />
}
