import { h } from 'preact';
import style from './hero.less';

export default () => {
	const background = {'backgroundImage': 'url(' + config.urls.media + 'pic_bg.jpg' + ')'};
	const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name));
	return (
		<div id='hero' class={`${style.hero} ${style.height}`} style={background}>
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
					<a class={style.button} href={config.urls.signup}>
						<span >{config.translations.hero_page.button_text}</span>
					</a>
				</div>
				<div class={style.phone_wrap}>
					<a href={config.urls.media + 'pic_iphone.png'} class='progressive replace'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU1LzgAwADFQFwh4dq+AAAAABJRU5ErkJggg==' class= 'preview'/></a>
					{/* <a href={config.urls.media + 'pic_iphone.png'} class='progressive replace'><img src={config.urls.media + 'pic_iphone-min.png'} class= 'preview'/></a> */}
				</div>
			</div>
		</div>
	);
};
