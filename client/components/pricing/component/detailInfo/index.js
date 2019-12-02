import { h } from 'preact'
import { config }from '../../../../../config.js'
import OpenedPreview from '../openedPreview'
// import style from './detail.less'

export default () => {
	return (
		<div class='opened_detail_info'>
			{config.modules.pricing.data.map(item => <OpenedPreview name={item.name} icon={item.icon} value={item.price_monthly} />)}
		</div>
	)
}
