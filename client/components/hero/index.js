import { h, Component } from 'preact'
import { config } from '../../../components-lib/Home_website/config_ssr.js';

export default class Hero extends Component {
	componentDidMount = () => {
		setTimeout(() => this.props.startAnimation(), 300)
	}
	render () {
		const { animation } = this.props
		const background = { backgroundImage: 'url(' + config.urls.media + 'pic_bg.jpg' + ')' }
		const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name))
		return (
			<div id='hero' class='hero height' >
				<div class='full' style={animation ? background : ''}>
					<div class={'common ' + (animation ? ' shadow' : ' bgr')} >
						<div class={'content ' + (animation && 'padding_end')}>
							{animation && <h2 class='hero_title'>{config.translations.hero_page.title}</h2>}
							{animation && <div class='feature_wrap'>
								{features.map(f => (
									<figure class='feature'>
										<p>
											<svg class='feature_icon'>
												<use xlinkHref={config.urls.media_features + f.icon + '#' + f.icon.slice(0, -4)} />
											</svg>
										</p>
										<figcaption class='feature_label'>{config.translations.features.content.data[f.name].name}</figcaption>
									</figure>
								))}
							</div>}
							{animation && <a class='button' href={config.urls.signup}>
								<span >{config.translations.hero_page.button_text}</span>
							</a>}
						</div>
						<div class='phone_wrap'>
							{!animation
								? <img class='black_phone' src={config.urls.media + 'black_phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
								: <img class={'start_p ' + (animation && ' end_p')} src={config.urls.media + 'pic_iphone.png'} height='366' width='183' loading='lazy' alt='phone animation' />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
