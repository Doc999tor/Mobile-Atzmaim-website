import { h } from 'preact';
import style from './style.less';

export default () => {
	const background = {'backgroundImage': 'url(' + config.urls.media + 'pic_bg.jpg' + ')'};
	const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name));
	return (
		<div id='hero' class={style.hero} style={background}>
			<div class={style.shadow} >
				<div class={style.content}>
					<h2>{config.translations.hero_page.title}</h2>
					<div class={style.feature_wrap}>
						{features.map(f => (
							<figure class={style.feature}>
								<p><img src={config.urls.media + f.icon} /></p>
								<figcaption>{config.translations.features.content.data[f.name].name}</figcaption>
							</figure>
						))}
					</div>
					<a href={config.urls.signup}>
						<button class={style.button}>{config.translations.hero_page.button_text}</button>
					</a>
				</div>
				<div class={style.phone_wrap}>
					<img src={config.urls.media + 'pic_iphone.png'} />
				</div>
			</div>
		</div>
	);
};
