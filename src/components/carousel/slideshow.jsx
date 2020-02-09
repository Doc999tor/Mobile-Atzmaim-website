import { h, Component } from 'preact'
import Slide from './slide.jsx'
import style from './carousel.less'

export default class Slideshow extends Component {
  state = {
  	current: 0,
  	speed: this.props.cycleSpeed || 3000,
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
  	this.startRotation()
  }

  componentWillUnmount () {
  	this.stopRotation()
  }

  render () {
  	const generateSlides = (
  		config.modules.hero.gallery && config.modules.hero.gallery.map((slideName, i) => (
  			<Slide name={slideName} current={this.isActive(i)} key={i} />)
  		)
  	)
  	return (
  		<div class={style.slideshow__container}>
  			<div class={style.border_container}>
  				<img src={config.urls.media + 'black_phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
  				<img class={style.img_border} src={config.urls.media + 'phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
  				{generateSlides}
  			</div>
  		</div>
  	)
  }
}
