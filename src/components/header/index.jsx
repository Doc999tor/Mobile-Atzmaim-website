import { h } from 'preact'
import Menu from '../menu'
import { default as MenuApp } from '../../../components-lib/Menu/Menu.jsx'
import style from './header.less'
import './header.less'

export default ({ active, referer, closeMenu, menuOnOff }) => {
	return (
		<div class={style.header_wrap}>
			<header class={style.header}>
				<div class={style.cont}>
					<div class={`${style.alive_button} ${active && style.active_b}`} onClick={active ? closeMenu : menuOnOff}>
						<div class={`${style.stick_top} ${active && style.alive_stick_top}`} />
						<div class={`${style.stick_bottom} ${active && style.alive_stick_bottom}`} />
					</div>
					<a class={style.login_link} href={config.urls.login}>
						<img src={config.urls.media + 'ic_lock.svg'} alt='lock' />
						<span>{config.translations.hero.log_in}</span>
					</a>
				</div>
				{referer !== 'application'
					? active && <Menu close={closeMenu} />
					: active && <MenuApp closeMenu={closeMenu} />}
				<div class={style.cont}>
					<img src={config.urls.media_logo + 'ic_logo.svg'} alt='Logo' />
					<span class={style.logo}>{config.translations.hero.main_logo}</span>
				</div>
			</header>
		</div>
	)
}
