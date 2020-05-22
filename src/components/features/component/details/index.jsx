import { h } from 'preact'
import SignUpBtn from '../../../common_sign_up_btn'
import style from './details.less'
import { Icon } from '../../../icon'

export default ({ selectedFeature, svgObj, backToAll }) => {
	return (
		<div class={style.details}>
			<div class={style.main}>
				<div class={style.title_block}>
					<h2>{config.translations.features.main_title}</h2>
					<SignUpBtn />
				</div>
				<div class={style.extended}>
					<div class={style.extended_title} onClick={backToAll}>
						{svgObj && svgObj.svg && <Icon icon={svgObj.svg} class={style.icon} />}
						<p>{config.translations.features.content.data[selectedFeature.name].name}</p>
					</div>
					<p class={style.descr}>{config.translations.features.content.data[selectedFeature.name].description}</p>
					<button class={style.back_button} onClick={backToAll}><img class={style.back_img} src={config.urls.media + 'ic_arrow_back.svg'} alt={config.translations.features.back_to_features} />{config.translations.features.back_to_features}</button>
				</div>
			</div>
			<div class={style.phone_wrap}>
				<img class={style.preview} height='366' width='183' loading='lazy' src={config.urls.media_features + selectedFeature.preview_pic} alt='preview image' />
			</div>
		</div>
	)
}
