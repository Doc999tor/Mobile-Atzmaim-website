import { h } from 'preact'
import style from './feature.less'
import { Icon } from '../icon'

export default ({ feature, selectFeature }) => {
	return (
		<div onClick={() => selectFeature(feature)} class={style.feature}>
			<Icon icon={feature.icon} className={style.icon} />
			<p class={style.text}>{config.translations.features.content.data[feature.name].name}</p>
		</div>
	)
}
