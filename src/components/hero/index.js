import { h, Component } from 'preact'
import style from './hero.less'
import styles from '../features/component/allFeatures/all.less'
import { Icon } from '../icon'
import Slideshow from '../carousel/slideshow.jsx'
export default class Hero extends Component {
	componentDidMount = () => {
		setTimeout(() => this.props.startAnimation(), 300)
	}

	render () {
		const { animation, iconsData } = this.props
		const background = { backgroundImage: 'url(' + config.urls.media + 'pic_bg.jpg' + ')' }
		const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name))
		return (
			<div id='hero' className={style.height} >
				<div class={`${style.full} ${animation && style.backgroundImg}`} style={animation ? background : ''}>
					<div class={`${style.common} ${animation && (style.shadow + ' ' + style.test)}`} >
						<div class={`${style.content} ${animation && (config.isRTL ? styles.text_end_rtl : styles.text_end_ltr)}`}>
							{animation && <h2>{config.translations.hero.main_title}</h2>}
							{animation && <div class={style.feature_wrap}>
								{features.map(f => {
									const svgObj = iconsData.find(i => f.name === i.name)
									return (
										<figure class={style.feature}>
											{svgObj && svgObj.svg && <Icon icon={svgObj.svg} className={style.feature_icon} />}
											<figcaption>{config.translations.features.content.data[f.name].name}</figcaption>
										</figure>
									)
								})}
							</div>}
							{animation && <a class={style.button} href={config.urls.signup}>
								<span class={style.button_label} >{config.translations.hero.button_label}</span>
							</a>}
						</div>
						<div class={style.phone_wrap}>
							{!animation
								? <img class={style.black_phone} src={config.urls.media + 'black_phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
								: <Slideshow cycleSpeed={config.modules.hero.carousel_time} />
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
