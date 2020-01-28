import { h, Component } from 'preact'
import Slide from './slide.js'

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
		const config = this.props.config
  	const current = this.state.current
  	let nextSlide = current + 1

  	if (nextSlide > config.modules.hero.gallery.length - 1) {
  		nextSlide = 0
  	}

  	this.setState({
  		current: nextSlide
  	})
  };

  prev = () => {
		const config = this.props.config
  	const current = this.state.current
  	let previousSlide = current - 1
  	if (previousSlide < 0) {
  		previousSlide = config.modules.hero.gallery.length - 1
  	}
  	this.setState({
  		current: previousSlide
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

  render ({ translations, config }) {
  	const generateSlides = (
  		config.modules.hero.gallery.map((slideName, i) => (
  			<Slide config={config} name={slideName} current={this.isActive(i)} key={i} />)
  		)
  	)
  	return (
  		<div class='slideshow__container'>
				<img src={config.urls.media + 'black_phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
  			{generateSlides}
  		</div>
  	)
  }
}
