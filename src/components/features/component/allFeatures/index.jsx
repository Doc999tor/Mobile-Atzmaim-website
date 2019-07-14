import { h } from 'preact';
import Feature from '../feature';
import style from './all.less';

export default ({selectFeature}) => {
	return (
		<div class={style.features}>
			<div class={style.all_features}>
				<section class={style.top_section}>
					<h2>{config.translations.features.content.title}</h2>
					<div class={style.background_top}>
						<img class={config.isRTL ? style.inner_rtl : style.inner_ltr} src={config.urls.media + 'bg_top.svg'}/>
						<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'ill_features.svg'}/>
					</div>
				</section>
				<div class={style.features_container}>
					{config.modules.features.data.map(item => <Feature selectFeature={selectFeature} feature={item} />)}
				</div>
			</div>
		</div>
	);
};

