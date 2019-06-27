import { h, Component } from 'preact';
import Menu from '../menu';
import style from './style.less';
import './style.less';

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
					<button class={style.menu_btn} onClick={this.menuOnOff}><img src={config.urls.static + (!active ? 'ic_menu.svg' : 'ic_menu_cross.svg')} alt='menu' /></button>
					<button class={style.login_btn}><img src={config.urls.static + 'ic_lock.svg'} alt='lock' />{config.translations.hero.log_in}</button>
				</div>
				{active && <Menu close={this.menuOnOff} />}
				<div>
					<img src={config.urls.static + 'ic_logo.svg'} alt='Logo' />
					<h1>{config.translations.hero.main_logo}</h1>
				</div>
			</header>
		);
	}
}
