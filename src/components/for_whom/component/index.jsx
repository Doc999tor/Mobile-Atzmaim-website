import { h, Component } from 'preact';
import style from './style.less';
export default class Bussiness extends Component {
	state = {showInfo: false}
	handleShowInfo = () => {
		this.setState({ showInfo: !this.state.showInfo });
	}
	render() {
		const { name, icon } = this.props
		const { showInfo } =this.state
		return (
			<div>
				{ !showInfo
					? <figure onClick={this.handleShowInfo} class={style.business}>
						<p><img src={config.urls.static + icon} /></p>
						<figcaption>{config.translations.business_types.content[name].title}</figcaption>
					</figure>
					: <div class={style.show_info} onClick={this.handleShowInfo}>
						<div class={style.wrap}>
							<img src={config.urls.static + icon} />
						</div>
						<div class={style.main_info}>
							<p class={style.title}>{config.translations.business_types.content[name].title}</p>
							<div class={style.line}/>
							<p class={style.text}>{config.translations.business_types.content[name].text}</p>
						</div>
					</div>
				}
			</div>
		);
	}
}

