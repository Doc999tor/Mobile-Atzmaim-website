import { h, Component } from 'preact'
import style from './hero.less'
import styles from '../features/component/allFeatures/all.less'
import { Icon } from '../icon'
import SignUpBtn from '../common_sign_up_btn'
export default class Hero extends Component {
	state = {
  	current: 0,
  	speed: this.props.cycleSpeed || 5000,
  	timer: null
	};

  startRotation = () => {
  	this.interval = setInterval(this.next, this.state.speed)
  };

  stopRotation = () => {
  	clearInterval(this.interval)
  	this.setState({
  		time: null
  	})
  };

  next = () => {
  	const current = this.state.current
  	let nextSlide = current + 1

  	if (config.modules.hero.gallery && nextSlide > config.modules.hero.gallery.length - 1) {
  		nextSlide = 0
  	}

  	this.setState({
  		current: nextSlide
  	})
  };

  isActive = (slide) => {
  	return this.state.current === slide
  };

  componentDidMount () {
  	setTimeout(() => this.props.startAnimation(), 300)
  	this.startRotation()
  }

  componentWillUnmount () {
  	this.stopRotation()
  }

  render () {
  	const { animation, iconsData } = this.props
  	const background = { backgroundImage: 'url(' + config.urls.media + 'pic_bg.jpg' + ')' }
  	return (
  		<div id='hero' className={style.height} >
  			<div class={`${style.full} ${animation && style.backgroundImg}`} style={animation ? background : ''}>
  				<div class={`${animation && style.shadow}`} >
  					{config.modules.hero.gallery.map((slideItem, i) => {
  						const features = config.modules.features.data.filter(item => slideItem.features.includes(item.name))
  						return (
  							<div class={`${style.common} ${this.isActive(i) ? style.active : ''}`}>
  								<div class={`${style.content} ${animation && (config.isRTL ? styles.text_end_rtl : styles.text_end_ltr)}`}>
  									<div class={style.texts}>
  										{animation && <div class={style.title_container}><h2 class={style.title}>{config.translations.hero.carousel_text[i].title}</h2></div>}
  										{animation && <div>
  											{features && features.map(f => {
  												const svgObj = iconsData.find(i => f.name === i.name)
  												return (
  													<figure class={style.feature}>
  														{svgObj && svgObj.svg && <Icon icon={svgObj.svg} className={style.feature_icon} />}
  														<figcaption>{config.translations.features.content.data[f.name].name}</figcaption>
  													</figure>
  												)
  											})}
  										</div>}
  									</div>
  									{animation && <SignUpBtn glow />}
  								</div>
  								<div class={style.phone_wrap}>
  									{!animation
  										? <img class={style.black_phone} src={config.urls.media + 'black_phone.png'} height='382' width='180' loading='lazy' alt='phone animation' />
  										: <div class={style.border_container}>
  											<picture>
  												<source class={style.img} srcset={`${config.urls.hero_gallery}${slideItem.picture}.webp`} type='image/webp' loading='lazy' />
  												<img class={style.img} src={`${config.urls.hero_gallery}${slideItem.picture}.png`} alt={name} height='363' width='174' loading='lazy' />
  											</picture>
  											<picture>
  												<source class={style.img_border} srcset={`${config.urls.media}black_phone.png`} type='image/webp' loading='lazy' />
  												<img class={style.img_border} src={`${config.urls.media}black_phone.png`} alt={name} height='382' width='180' loading='lazy' />
  											</picture>
  										</div>
  									}
  								</div>
  							</div>
  						)
  					})}
  				</div>
  			</div>
  		</div>
  	)
  }
}
