import { h, Component } from 'preact';
import style from './bussiness.less';
import './bussiness.less';
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
						<p><a href={config.urls.media + icon + '.jpg'} class='progressive replace'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvHi9DwAGKQJD0JDfYwAAAABJRU5ErkJggg==' class= 'preview'/></a></p>
						{/* <p><a href={config.urls.media + icon + '.jpg'} class='progressive replace'><img src={config.urls.media + 'pic_cosmetics-min.jpg'} class= 'preview'/></a></p> */}
						<figcaption>{config.translations.business_types.content[name].title}</figcaption>
					</figure>
					: <div class={style.show_info} onClick={this.handleShowInfo}>
						<div class={style.wrap}>
							<img src={config.urls.media + icon + '.jpg'} />
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

