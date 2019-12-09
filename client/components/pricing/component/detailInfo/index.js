import { h } from 'preact'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'
import OpenedPreview from '../openedPreview'

export default () => {
	return (
		<div class='opened_detail_info'>
			{config.modules.pricing.data.map(item => <OpenedPreview name={item.name} icon={item.icon} value={item.price_monthly} />)}
		</div>
	)
}
