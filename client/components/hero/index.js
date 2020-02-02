import { h, Component } from 'preact'
import { Icon } from '../icon'
import Slideshow from '../carousel'

export default class Hero extends Component {
	componentDidMount = () => {
		setTimeout(() => this.props.startAnimation(), 300)
	}
	render ({ translations, config }) {
		const { animation, iconsData } = this.props
		const background = { backgroundImage: 'url(' + config.urls.media + 'pic_bg.jpg' + ')' }
		const features = config.modules.features.data.filter(i => config.modules.hero.features.includes(i.name))
		return (
			<div id='hero' class='height' >
				<div class={`full ${animation ? 'backgroundImg' : ''}`} style={animation ? background : ''}>
					<div class={'common' + (animation ? ' shadow' : '')} >
						<div class={'content ' + (animation && (config.isRTL ? 'topSection_rtl' : 'topSection_ltr'))}>
							<h1 class={!animation ? 'hidden_content' : ''}>{translations.hero_page.title}</h1>
							<div class={animation ? 'feature_wrap' : 'hidden_content'}>
								{features.map(f => {
									const svgObj = iconsData.find(i => f.name === i.name)
									return (
									<figure class='feature'>
										{svgObj && svgObj.svg && <Icon icon={svgObj.svg} className='feature_icon' />}
										<figcaption class='feature_label'>{translations.features.content.data[f.name].name}</figcaption>
									</figure>
								)})}
							</div>
							<a class={!animation ? 'hidden_content' :'button'} href={config.urls.signup}>
								<span class='hero_btn_label'>{translations.hero_page.button_text}</span>
							</a>
						</div>
						<div class='phone_wrap'>
							{!animation
								? <img class='black_phone' src={config.urls.media + 'black_phone.png'} height='366' width='183' loading='lazy' alt='phone animation' />
								: <Slideshow translations={translations} config={config} cycleSpeed={config.modules.hero.gallery_speed} />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
