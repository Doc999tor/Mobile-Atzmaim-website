import { h } from 'preact';
import style from './style.less';

export default () => {
	const background = {'backgroundImage': 'url(' + config.urls.static + 'pic_bg.jpg' + ')'};
	const features = config.modules.features.data.filter(i => {
		if (config.modules.hero.features.includes(i.name)) {
			return i;
		}
	});
	return (
		<div id='home' class={style.home} style={background}>
			<div class={style.shadow} >
				<div class={style.content}>
					<h2>{config.translations.home_page.title}</h2>
					<div class={style.feature_wrap}>
						{features.map(i => (
							<figure class={style.feature}>
								<p><img src={config.urls.static + i.icon} /></p>
								<figcaption>{config.translations.features.content.data[i.name].name}</figcaption>
							</figure>
						))}
					</div>
					<a href={config.urls.signup}>
						<button class={style.button}>{config.translations.home_page.button_text}</button>
					</a>
				</div>
				<div class={style.phone_wrap}>
					<img src={config.urls.static + 'pic_iphone.png'} />
				</div>
			</div>
		</div>
	);
};
