import { h, Component } from 'preact'
import style from './bussiness.less'
export default class Bussiness extends Component {
	state = {
		animation: false
	}

	init = () => setTimeout(() => this.setState({ animation: !this.state.animation }), 100)

	render () {
		const { name, icon } = this.props
		const { animation } = this.state
		return (
			<div class={this.state.animation ? style.main2 : style.main} onClick={this.init}>
				<div class={this.state.animation ? style.sub2 : style.sub}>
					<img src={config.urls.media + icon + '.jpg'} />
				</div>
				<div class={this.state.animation ? style.bottom_info2 : style.bottom_info}>
					<p class={style.title}>{config.translations.business_types.content[name].title}</p>
					{animation &&	<div class={style.extend1}>
						<div class={style.line} />
						<p class={style.text}>{config.translations.business_types.content[name].text}</p>
					</div>}
				</div>
			</div>
		)
	}
}
