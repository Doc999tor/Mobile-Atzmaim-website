import { h, Component } from 'preact'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Menu from '../menu'
import { config }from '../../../config.js'
// import { default as MenuApp } from '../../../components-lib/Menu/Menu.jsx'

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
			<header id='header' class='header'>
				<div class='header_cont'>
					<button class='menu_btn' onClick={active ? this.closeMenu : this.menuOnOff}><img src={config.urls.media + (!active ? 'ic_menu.svg' : 'ic_menu_cross.svg')} alt='menu' /></button>
					<a class='login_link' href={config.urls.login}>
						<img src={config.urls.media + 'ic_lock.svg'} alt='lock' />
						<span>{config.translations.hero.log_in}</span>
					</a>
				</div>
				{this.props.mobile
					? active && <Menu close={this.closeMenu} />
					: active && <Menu close={this.closeMenu} />}
					{/* // : active && <MenuApp closeMenu={this.closeMenu} />} */}
				<div class='header_cont'>
					<img src={config.urls.media + 'ic_logo.svg'} alt='Logo' />
					<span class='header_logo'>{config.translations.hero.main_logo}</span>
				</div>
			</header>
		);
	}
}
