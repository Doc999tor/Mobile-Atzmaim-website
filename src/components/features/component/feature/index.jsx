import { h } from 'preact';
import style from './style.less';

export default ({ feature, selectFeature }) => {
	return (
		<div onClick={ () => selectFeature(feature) } class={style.feature}>
			<img src={config.urls.static + feature.icon} />
			<p>{config.translations.features.content.data[feature.name].name}</p>
		</div>
	);
};
