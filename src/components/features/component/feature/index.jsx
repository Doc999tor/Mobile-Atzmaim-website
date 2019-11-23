import { h } from 'preact'
import style from './feature.less'

export default ({ feature, selectFeature }) => {
	return (
		<div onClick={() => selectFeature(feature)} class={style.feature}>
			<p>
				<svg class={style.feature_icon}>
					<use xlinkHref={config.urls.media_features + feature.icon + '#' + feature.icon.slice(0, -4)} />
				</svg>
			</p>
			<p class={style.text}>{config.translations.features.content.data[feature.name].name}</p>
		</div>
	)
}
