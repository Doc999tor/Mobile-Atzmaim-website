import { h, Component } from 'preact';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<div>
					<img src={config.urls.static + 'ic_logo.svg'} alt='Logo' />
					<h1>{config.translations.hero.main_logo}</h1>
				</div>
				<div>
					<button class={style.login_btn}><img src={config.urls.static + 'ic_lock.svg'} alt='lock' />{config.translations.hero.log_in}</button>
					<button class={style.menu_btn}><img src={config.urls.static + 'ic_menu.svg'} alt='' /></button>
				</div>
			</header>
		);
	}
}
