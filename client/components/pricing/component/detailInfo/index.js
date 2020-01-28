import { h } from 'preact'
import OpenedPreview from '../openedPreview'

export default ({ translations, config }) => {
	return (
		<div class='opened_detail_info'>
			{config.modules.pricing.data.map(item => <OpenedPreview translations={translations} config={config} name={item.name} icon={item.icon} value={item.price_monthly} />)}
		</div>
	)
}
