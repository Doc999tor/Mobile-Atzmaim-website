import { h, Component } from 'preact'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'

export default class Details extends Component {
	state = {
		animation: false
	}

  componentDidMount = () => this.init()

	init = () => {
		setTimeout(() => this.setState({ animation: true }), 100)
	}

	render () {
	  const { selectedFeature, backToAll } = this.props
	  return (
	    <div class='details'>
	      <div class='details_main'>
	        <h2>{config.translations.features.content.title}</h2>
	        <div class='extended'>
	          <div class={this.state.animation ? 'details_top' : 'details_min'}>
							<svg class='details_icon'>
								<use xlinkHref={config.urls.media_features + selectedFeature.icon + '#' + selectedFeature.icon.slice(0, -4)} />
							</svg>
	            <p>{config.translations.features.content.data[selectedFeature.name].name}</p>
	          </div>
	          <p class='details_descr'>{config.translations.features.content.data[selectedFeature.name].description}</p>
	          <button class={this.state.animation ? 'back_button' : 'min_bth'} onClick={backToAll}><img class='back_img' src={config.urls.media + 'ic_arrow_back.svg'} alt={config.translations.features.back_to_features} />{config.translations.features.back_to_features}</button>
	        </div>
	      </div>
	      <div class='details_img_wrap'>
	        <img class={this.state.animation ? 'details_max' : 'details_min'} height='366' width='183' loading='lazy' src={config.urls.media + selectedFeature.preview_pic} alt='preview image' />
	      </div>
	    </div>
	  )
	}
}
