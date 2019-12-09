import { h } from 'preact'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'

export default ({ feature, selectFeature }) => {
	return (
		<div onClick={() => selectFeature(feature)} class='single_feature'>
			<p>
				<svg class='feature_icon'>
					<use xlinkHref={config.urls.media_features + feature.icon + '#' + feature.icon.slice(0, -4)} />
				</svg>
			</p>
			<p class='feature_text'>{config.translations.features.content.data[feature.name].name}</p>
		</div>
	)
}
