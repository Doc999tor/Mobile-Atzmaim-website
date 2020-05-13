import { h } from 'preact'
import OpenedPreview from '../openedPreview'
import style from './detail.less'

export default ({ handleShowPreview }) => {
	return (
		<div class={style.detail_info}>
			{config.modules.pricing.data.map(item => <OpenedPreview name={item.name} handleShowPreview={handleShowPreview} icon={item.icon} item={item} />)}
		</div>
	)
}
