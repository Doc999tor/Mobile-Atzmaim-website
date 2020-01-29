import { h, Component } from 'preact'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Menu from '../menu'
import { default as MenuApp } from '../../../components-lib/Menu/Menu.jsx'

export default class Header extends Component {
	state = { active: false }

	menuOnOff = () => {
		this.setState({ active: !this.state.active }, () => {
			disableBodyScroll(document.querySelector('#menu_modal'))
		})
	}

	closeMenu = () => {
		this.setState({ active: false })
		clearAllBodyScrollLocks()
	}

	render ({translations, config, lang}) {
		const { active } = this.state
		return (
			<div class='header_wrap'>
				<header id='header' class='header'>
					<div class='header_cont'>
						<div class={`alive_button ${active ? 'active_b' : ''}`} onClick={active ? this.closeMenu : this.menuOnOff}>
							<div class={`stick_top ${active ? 'alive_stick_top' : ''}`} />
							<div class={`stick_bottom ${active ? 'alive_stick_bottom' : ''}`} />
						</div>
						<a class='login_link' href={config.urls.login}>
							<img src={config.urls.media + 'ic_lock.svg'} alt='lock' />
							<span>{translations.hero.log_in}</span>
						</a>
					</div>
					{this.props.referer !== 'application'
						? active && <Menu translations={translations} config={config} lang={lang} close={this.closeMenu} />
						: active && <MenuApp translations={translations} commonConfig={config} closeMenu={this.closeMenu} />}
					<div class='header_cont'>
						<img src={config.urls.media + 'ic_logo.svg'} alt='Logo' />
						<span class='header_logo'>{translations.hero.main_logo}</span>
					</div>
				</header>
			</div>
		)
	}
}
