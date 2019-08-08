import { h } from 'preact';
import style from './extended.less';
import './extended.less';

export default ({ feature, backToAll }) => {
	return (
		<div class={style.extended}>
			<div class={style.top}>
				<svg class={style.feature_icon}>
					<use xlinkHref={config.urls.media + 'sprite.svg#' + feature.icon} />
				</svg>
				<p>{config.translations.features.content.data[feature.name].name}</p>
			</div>
			<p class={style.descr}>{config.translations.features.content.data[feature.name].description}</p>
			<button class={style.back_button} onClick={backToAll}><img class={style.back_img} src={config.urls.media + 'ic_arrow_back.svg'} />{config.translations.features.back_to_features}</button>
		</div>
	);
};
