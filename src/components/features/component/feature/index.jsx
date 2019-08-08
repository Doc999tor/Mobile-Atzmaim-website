import { h } from 'preact';
import style from './feature.less';

export default ({ feature, selectFeature }) => {
	return (
		<div onClick={ () => selectFeature(feature) } class={style.feature}>
			<svg class={style.feature_icon}>
				<use xlinkHref={config.urls.media + 'sprite.svg#' + feature.icon} />
			</svg>
			<p>{config.translations.features.content.data[feature.name].name}</p>
		</div>
	);
};
