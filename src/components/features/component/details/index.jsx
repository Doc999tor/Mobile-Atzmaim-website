import { h, Component } from 'preact'
import style from './details.less'

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
	    <div class={style.details}>
	      <div class={style.main}>
	        <h2>{config.translations.features.content.title}</h2>
	        <div class={style.extended}>
	          <div class={this.state.animation ? style.top : style.min}>
	            <svg class={style.feature_icon}>
	              <use xlinkHref={config.urls.media + 'sprite.svg#' + selectedFeature.preview_pic} />
			          </svg>
	            <p>{config.translations.features.content.data[selectedFeature.name].name}</p>
	          </div>
	          <p class={style.descr}>{config.translations.features.content.data[selectedFeature.name].description}</p>
	          <button class={this.state.animation ? style.back_button : style.min_bth} onClick={backToAll}><img class={style.back_img} src={config.urls.media + 'ic_arrow_back.svg'} />{config.translations.features.back_to_features}</button>
	        </div>
	      </div>
	      <div class={style.phone_wrap}>
	        <img class={this.state.animation ? style.max : style.min} src={config.urls.media + selectedFeature.icon} />
	      </div>
	    </div>
	  )
	}
}
