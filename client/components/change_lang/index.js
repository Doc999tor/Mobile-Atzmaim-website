import { h, Component } from 'preact'
import { lang, config } from '../../../components-lib/Home_website/config_ssr.js'

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
			location.href = `/${this.state.activeLang}/home`
		}, 300))
	}

	closedPopup = () => {
		this.setState({ open: false }, () => setTimeout(() => {
			this.props.close()
		}, 300))
	}

	render ({ close }, { activeLang, open }) {
		return (
			<div id='lang' onClick={this.closedPopup} class='lang_wrapper'>
				<ul onClick={this.handlestopPropagation} class={`lang_list ${!open ? 'lang_closed' : ''}`} >
					{Object.keys(config.translations.languages).map(item => (
						<li key={item}>
							<a onClick={e => this.handleChangeLanguage(e, item)} href={`/${item}/home`} class={`lang_link ${activeLang === item ? 'lang_active' : ''}`}>{config.translations.languages[item]}<img class={activeLang === item ? 'lang_check_mark' : 'lang_mark'} src={config.urls.media + 'ic_selected.svg'} /></a>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
