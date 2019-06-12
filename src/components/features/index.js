import { h } from 'preact';
import Feature from './components';
import style from './style.less';

export default () => {
	return (
		<div class={style.features}>
			<section class={style.top_section}>
				<h2>{config.translations.features.content.title}</h2>
				<div class={style.background_top}>
					<img class={config.isRTL ? style.inner_rtl : style.inner_ltr} src={config.urls.static + 'bg_top.svg'}/>
					<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.static + 'ill_features.svg'}/>
				</div>
			</section>
			<div class={style.features_container}>
				{config.features.map(item => <Feature feature={item} />)}
			</div>
		</div>
	);
};
