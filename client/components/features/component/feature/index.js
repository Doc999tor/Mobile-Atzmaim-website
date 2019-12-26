import { h } from 'preact'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'
import { Icon } from '../../../icon'

export default ({ feature, svgObj, selectFeature }) => {
	return (
		<div onClick={() => selectFeature(feature)} class='single_feature'>
			{svgObj && svgObj.svg && <Icon icon={svgObj.svg} className='single_feature_icons' />}
			<div class='text_wrap'>
				<p class='feature_text'>{config.translations.features.content.data[feature.name].name}</p>
			</div>
		</div>
	)
}
