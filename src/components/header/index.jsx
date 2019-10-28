import { h, Component } from 'preact'
import Menu from '../menu'
// import { default as MenuApp } from '../Menu/Menu.jsx'
import { default as MenuApp } from '../../../components-lib/Menu/Menu.jsx'
import style from './header.less'
import './header.less'

export default class Header extends Component {
	state = { active: false }

	menuOnOff = () => {
		this.setState({ active: !this.state.active })
	}

	render () {
		const { active } =this.state
		return (
			<header class={style.header}>
				<div class={style.cont}>
					<button class={style.menu_btn} onClick={this.menuOnOff}><img src={config.urls.media + (!active ? 'ic_menu.svg' : 'ic_menu_cross.svg')} alt='menu' /></button>
					<a class={style.login_link} href={config.urls.login}>
						<img src={config.urls.media + 'ic_lock.svg'} alt='lock' />
						<span>{config.translations.hero.log_in}</span>
					</a>
				</div>
				{this.props.mobile
					? active && <Menu close={this.menuOnOff} />
					: active && <MenuApp closeMenu={this.menuOnOff} />}
				<div class={style.cont}>
					<img src={config.urls.media + 'ic_logo.svg'} alt='Logo' />
					<span class={style.logo}>{config.translations.hero.main_logo}</span>
				</div>
			</header>
		);
	}
}
