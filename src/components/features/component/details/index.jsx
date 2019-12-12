import { h, Component } from 'preact'
import style from './details.less'
import { Icon } from '../../../icon'

export default class Details extends Component {
	state = {
		animation: false
	}

  componentDidMount = () => this.init()

	init = () => {
		setTimeout(() => this.setState({ animation: true }), 100)
	}

	render () {
	  const { selectedFeature, svgObj, backToAll } = this.props
	  return (
	    <div class={style.details}>
	      <div class={style.main}>
	        <h2>{config.translations.features.content.title}</h2>
	        <div class={style.extended}>
	          <div class={this.state.animation ? style.top : style.min}>
							{svgObj && svgObj.svg && <Icon icon={svgObj.svg} class={style.icon} />}
	            <p>{config.translations.features.content.data[selectedFeature.name].name}</p>
	          </div>
	          <p class={style.descr}>{config.translations.features.content.data[selectedFeature.name].description}</p>
	          <button class={this.state.animation ? style.back_button : style.min_bth} onClick={backToAll}><img class={style.back_img} src={config.urls.media + 'ic_arrow_back.svg'} alt={config.translations.features.back_to_features} />{config.translations.features.back_to_features}</button>
	        </div>
	      </div>
	      <div class={style.phone_wrap}>
	        <img class={this.state.animation ? style.max : style.min} height='366' width='183' loading='lazy' src={config.urls.media_features + selectedFeature.preview_pic} alt='preview image' />
	      </div>
	    </div>
	  )
	}
}
