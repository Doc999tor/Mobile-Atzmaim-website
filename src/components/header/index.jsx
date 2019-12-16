import { h, Component } from 'preact'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Menu from '../menu'
import { default as MenuApp } from '../../../components-lib/Menu/Menu.jsx'
import style from './header.less'
import './header.less'

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

	render () {
		const { active } = this.state
		return (
			<header class={style.header}>
				<div class={style.cont}>
					<button class={style.menu_btn} onClick={active ? this.closeMenu : this.menuOnOff}><img src={config.urls.media + (!active ? 'ic_menu.svg' : 'ic_menu_cross.svg')} alt='menu' /></button>
					<a class={style.login_link} href={config.urls.login}>
						<img src={config.urls.media + 'ic_lock.svg'} alt='lock' />
						<span>{config.translations.hero.log_in}</span>
					</a>
				</div>
				{this.props.referer !== 'application'
					? active && <Menu close={this.closeMenu} />
					: active && <MenuApp closeMenu={this.closeMenu} />}
				<div class={style.cont}>
					<img src={config.urls.media_logo + 'ic_logo.svg'} alt='Logo' />
					<span class={style.logo}>{config.translations.hero.main_logo}</span>
				</div>
			</header>
		)
	}
}
