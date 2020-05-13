import { h } from 'preact'
import OpenedPreview from '../openedPreview'
import style from './detail.less'

export default ({ handleShowDetail }) => {
	return (
		<div class={style.detail_info}>
			{config.modules.pricing.data.map(item => <OpenedPreview name={item.name} handleShowDetail={handleShowDetail} icon={item.icon} item={item} />)}
		</div>
	)
}
