import { h, Component } from 'preact'
import style from './change_lang.less'

export default class ChangeLang extends Component {
	state = {
		activeLang: lang,
		open: true
	}

	handlestopPropagation = e => e.stopPropagation()

	handleChangeLanguage = (e, value) => {
		e.preventDefault()
		if (value === this.state.activeLang) {
			this.closedPopup()
			return
		}
		this.setState({
			activeLang: value,
			open: false
		}, () => setTimeout(() => {
			location.href = config.urls.home_page.replace('{lang}', this.state.activeLang)
		}, 300))
	}

	closedPopup = () => {
		this.setState({ open: false }, () => setTimeout(() => {
			this.props.close()
		}, 300))
	}

	render ({ close }, { activeLang, open }) {
		return (
			<div id='lang' onClick={this.closedPopup} class={style.wrapper}>
				<ul onClick={this.handlestopPropagation} class={`${style.list} ${!open ? style.closed : ''}`} >
					{Object.keys(config.translations.languages).map(item => (
						<li key={item}>
							<a onClick={e => this.handleChangeLanguage(e, item)} href={config.urls.home_page.replace('{lang}', item)} class={`${style.link} ${activeLang === item ? style.active : ''}`}>{config.translations.languages[item]}<img class={activeLang === item ? style.check_mark : style.mark} src={config.urls.media + 'ic_selected.svg'} /></a>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
