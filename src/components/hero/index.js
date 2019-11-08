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
			<div id='hero' class={`${style.hero} ${style.height}`} >
				<div class={style.full} style={animation ? background : ''}>
					<div class={`${style.common} ${animation ? style.shadow : style.bgr}`} >
						<div class={`${style.content} ${animation && style.padding_end}`}>
							{animation && <h2>{config.translations.hero_page.title}</h2>}
							{animation && <div class={style.feature_wrap}>
								{features.map(f => (
									<figure class={style.feature}>
										<p>
											<svg class={style.feature_icon}>
												<use xlinkHref={config.urls.features_icons + f.preview_pic + '#' + f.preview_pic.slice(0, -4)} />
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
								? <img class={style.black_phone} src={config.urls.media + 'black_phone.png'} />
								: <img class={`${style.start_p} ${animation && style.end_p}`} src={config.urls.media + 'pic_iphone.png'} />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
