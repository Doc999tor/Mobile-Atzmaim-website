import { h, Component } from 'preact'
import { Icon } from '../icon'
import Slideshow from '../carousel'
import { config } from '../../../components-lib/Home_website/config_ssr.js';

export default class Hero extends Component {
	componentDidMount = () => {
		setTimeout(() => this.props.startAnimation(), 300)
	}
	render () {
		const { animation, iconsData } = this.props
		const background = { backgroundImage: 'url(' + config.urls.media + 'pic_bg.jpg' + ')' }
		const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name))
		return (
			<div id='hero' class='height' >
				<div class={`full ${animation ? 'backgroundImg' : ''}`} style={animation ? background : ''}>
					<div class={'common' + (animation ? ' shadow' : '')} >
						<div class={'content ' + (animation && (config.isRTL ? 'topSection_rtl' : 'topSection_ltr'))}>
							{animation && <h2>{config.translations.hero_page.title}</h2>}
							{animation && <div class='feature_wrap'>
								{features.map(f => {
									const svgObj = iconsData.find(i => f.name === i.name)
									return (
									<figure class='feature'>
										{svgObj && svgObj.svg && <Icon icon={svgObj.svg} className='feature_icon' />}
										<figcaption class='feature_label'>{config.translations.features.content.data[f.name].name}</figcaption>
									</figure>
								)})}
							</div>}
							{animation && <a class='button' href={config.urls.signup}>
								<span >{config.translations.hero_page.button_text}</span>
							</a>}
						</div>
						<div class='phone_wrap'>
							{!animation
								? <img class='black_phone' src={config.urls.media + 'black_phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
								: <Slideshow cycleSpeed={config.modules.hero.gallery_speed} />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
