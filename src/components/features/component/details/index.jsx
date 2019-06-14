import { h } from 'preact';
import ExtendedFeature from '../extendedFeature';
import style from './style.less';

export default ({selectedFeature, backToAll}) => {
	return (
		<div class={style.details}>
			<div class={style.main}>
				<h2>{config.translations.features.content.title}</h2>
				<ExtendedFeature backToAll={backToAll} feature={selectedFeature} />
			</div>
			<div class={style.phone_wrap}>
				<img src={config.urls.static + 'pic_iphone.png'} />
			</div>
		</div>
	);
};
