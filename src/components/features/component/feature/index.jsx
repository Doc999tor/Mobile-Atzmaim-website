import { h } from 'preact'
import style from './feature.less'
import { Icon } from '../../../icon'

export default ({ feature, svgObj, selectFeature }) => {
	return (
		<div onClick={() => selectFeature(feature)} class={style.feature}>
			{svgObj && svgObj.svg && <Icon icon={svgObj.svg} className={style.icon} />}
			<div class={style.text_wrap}>
				<p class={style.text}>{config.translations.features.content.data[feature.name].name}</p>
			</div>
		</div>
	)
}
