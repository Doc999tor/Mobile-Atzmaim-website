import { h, Component } from 'preact'
import { Icon } from '../../../icon'

export default ({ translations, config, selectedFeature, svgObj, backToAll }) => {
	return (
		<div class='details'>
		<div class='details_main'>
			<h2>{translations.features.content.title}</h2>
			<div class='extended'>
				<div class={'extended_title'} onClick={backToAll}>
				{svgObj && svgObj.svg && <Icon icon={svgObj.svg} class='details_icon' />}
					<p>{translations.features.content.data[selectedFeature.name].name}</p>
				</div>
				<p class='details_descr'>{translations.features.content.data[selectedFeature.name].description}</p>
				<button class='back_button' onClick={backToAll}><img class='back_img' src={config.urls.media + 'ic_arrow_back.svg'} alt={translations.features.back_to_features} />{translations.features.back_to_features}</button>
			</div>
		</div>
		<div class='preview_wrap'>
			<img class='preview' height='366' width='183' loading='lazy' src={config.urls.media + selectedFeature.preview_pic} alt='preview image' />
		</div>
	</div>
	)
}
