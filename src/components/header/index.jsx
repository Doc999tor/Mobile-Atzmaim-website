import { h, Component } from 'preact';
import Menu from '../menu';
import style from './header.less';
import './header.less';

export default class Header extends Component {
	state = {active: false}
	menuOnOff = () => {
		this.setState({ active: !this.state.active });
	}
	render() {
		const { active } =this.state
		return (
			<header class={style.header}>
				<div>
					<button class={style.menu_btn} onClick={this.menuOnOff}><img src={config.urls.media + (!active ? 'ic_menu.svg' : 'ic_menu_cross.svg')} alt='menu' /></button>
					<a class={style.login_link} href={config.urls.login}>
						<button class={style.login_btn}><img src={config.urls.media + 'ic_lock.svg'} alt='lock' />{config.translations.hero.log_in}</button>
					</a>
				</div>
				{active && <Menu close={this.menuOnOff} />}
				<div>
					<img src={config.urls.media + 'ic_logo.svg'} alt='Logo' />
					<h1>{config.translations.hero.main_logo}</h1>
				</div>
			</header>
		);
	}
}
