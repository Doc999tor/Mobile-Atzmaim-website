import { h, Component } from 'preact'
import style from './hero.less'

export default class Hero extends Component {
	componentDidMount = () => {
		setTimeout(() => this.props.startAnimation(), 300)
	}

	render () {
		const { animation } = this.props
		const background = { backgroundImage: 'url(' + config.urls.media + 'pic_bg.jpg' + ')' }
		const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name))
		return (
			<div id='hero' class={style.height} >
				<div class={`${style.full} ${animation && style.backgroundImg}`} style={animation ? background : ''}>
					<div class={`${style.common} ${animation && (style.shadow + ' ' + style.test)}`} >
						<div class={`${style.content} ${animation && (config.isRTL ? style.padding_animation_rtl : style.padding_animation_ltr)}`}>
							{animation && <h2>{config.translations.hero_page.title}</h2>}
							{animation && <div class={style.feature_wrap}>
								{features.map(f => (
									<figure class={style.feature}>
										<p>
											<svg class={style.feature_icon}>
												<use xlinkHref={config.urls.media_features + f.icon + '#' + f.icon.slice(0, -4)} />
											</svg>
										</p>
										<figcaption>{config.translations.features.content.data[f.name].name}</figcaption>
									</figure>
								))}
							</div>}
							{animation && <a class={style.button} href={config.urls.signup}>
								<span >{config.translations.hero_page.button_text}</span>
							</a>}
						</div>
						<div class={style.phone_wrap}>
							{!animation
								? <img class={style.black_phone} src={config.urls.media + 'black_phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
								: <img class={animation && style.phone_animation} src={config.urls.media + 'pic_iphone.png'} height='366' width='183' loading='lazy' alt='phone animation' />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
