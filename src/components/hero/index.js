import { h, Component } from 'preact'
import style from './hero.less'

export default class Hero extends Component {
	componentDidMount = () => {
		setTimeout(() => this.props.startAnimation(), 500)
	}

	shouldComponentUpdate (nextProps, nextState) {
		if (!nextProps.animation && !nextProps.activeLink === 'hero') {
			return false
		}
	}

	render () {
		const { animation } = this.props
		const background = { backgroundImage: 'url(' + config.urls.media + 'pic_bg.jpg' + ')' }
		const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name))
		return (
			<div id='hero' class={`${style.hero} ${style.height}`} >
				{animation ? <div class={style.full} style={background}>
					<div class={style.shadow} >
						<div class={style.content}>
							<h2>{config.translations.hero_page.title}</h2>
							<div class={style.feature_wrap}>
								{features.map(f => (
									<figure class={style.feature}>
										<p>
											<svg class={style.feature_icon}>
												<use xlinkHref={config.urls.media + 'sprite.svg#' + f.preview_pic} />
											</svg>
										</p>
										<figcaption>{config.translations.features.content.data[f.name].name}</figcaption>
									</figure>
								))}
							</div>
							<a class={style.button} href={config.urls.signup}>
								<span >{config.translations.hero_page.button_text}</span>
							</a>
						</div>
						<div class={style.phone_wrap}>
							<img src={config.urls.media + 'pic_iphone.png'} />
						</div>
					</div>
				</div> : <div class={`${style.full} ${style.bgr}`} >
					<div class={style.empty} />
					<div class={style.img_cont}>
						<img src={config.urls.media + 'black_phone.png'} />
					</div>
				</div>}
			</div>
		)
	}
}
