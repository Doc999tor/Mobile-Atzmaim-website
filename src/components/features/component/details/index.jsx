import { h } from 'preact';
import style from './details.less';

export default ({selectedFeature, backToAll}) => {
	return (
		<div class={style.details}>
			<div class={style.main}>
				<h2>{config.translations.features.content.title}</h2>
				<div class={style.extended}>
					<div class={style.top}>
							<svg class={style.feature_icon}>
								<use xlinkHref={config.urls.media + 'sprite.svg#' + selectedFeature.preview_pic} />
							</svg>
							<p>{config.translations.features.content.data[selectedFeature.name].name}</p>
					</div>
					<p class={style.descr}>{config.translations.features.content.data[selectedFeature.name].description}</p>
					<button class={style.back_button} onClick={backToAll}><img class={style.back_img} src={config.urls.media + 'ic_arrow_back.svg'} />{config.translations.features.back_to_features}</button>
				</div>
			</div>
			<div class={style.phone_wrap}>
				<img src={config.urls.media + selectedFeature.icon} />
			</div>
		</div>
	);
};
