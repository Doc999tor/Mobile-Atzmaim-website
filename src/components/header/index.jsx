import { h } from 'preact'
import { route } from 'preact-router'
import Menu from '../menu'
import { default as MenuApp } from '../../../components-lib/Menu/Menu.jsx'
import style from './header.less'
import './header.less'

export default ({ active, referer, closeMenu, menuOnOff, closeAnimation }) => {
	const goHome = () => {
		closeMenu()
		route(config.baseUrl || '/')
		const hero = document.getElementById('hero')
		hero && hero.scrollIntoView({ block: 'start' })
	}
	return (
		<div class={style.header_wrap}>
			<header class={style.header}>
				<div class={style.cont} onClick={goHome}>
					<img src={config.urls.media_logo + 'logo.svg'} alt={config.translations.hero.logo_label} />
				</div>
				<div class={style.cont}>
					<a class={style.login_link} href={config.urls.login}>
						<img src={config.urls.media + 'ic_lock.svg'} alt='lock' />
						<span>{config.translations.hero.log_in}</span>
					</a>
					<div class={`${style.alive_button} ${active && style.active_b}`} onClick={active ? closeMenu : menuOnOff}>
						<div class={`${style.stick_top} ${active && style.alive_stick_top}`} />
						<div class={`${style.stick_bottom} ${active && style.alive_stick_bottom}`} />
					</div>
				</div>
				{referer !== 'application'
					? active && <Menu close={closeMenu} />
					: active && <MenuApp closeAnimation={closeAnimation} closeMenu={closeMenu} />
				}
			</header>
		</div>
	)
}
