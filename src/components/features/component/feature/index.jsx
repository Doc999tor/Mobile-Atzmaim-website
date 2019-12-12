import { h } from 'preact'
import style from './feature.less'
import { Icon } from '../icon'

export default ({ feature, iconsData, selectFeature }) => {
	const svgString = iconsData[0]
	return (
		<div onClick={() => selectFeature(feature)} class={style.feature}>
			<Icon icon={svgString} className={style.icon} />
			<p class={style.text}>{config.translations.features.content.data[feature.name].name}</p>
		</div>
	)
}
