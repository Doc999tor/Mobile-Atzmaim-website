import { h } from 'preact'
import { route } from 'preact-router'

import style from './footer.less'

export default () => {
	const goHome = () => {
		route(config.baseUrl || '/')
		const hero = document.getElementById('hero')
		hero && hero.scrollIntoView({ block: 'start' })
	}
	return (
		<footer class={style.footer}>
			<div class={style.top_block}>
				<div onClick={goHome}>
					<img src={config.urls.media_logo + 'logo.svg'} alt={config.translations.hero.logo_label} />
				</div>
				<nav class={style.footer_nav}>
					<ul>
						{
							config.modules.footer.data.map(({ icon, name, link }) => {
								return (
									<li key={name}>
										<a href={link}>
											{icon && <img class={style.nav_img} src={config.urls.media + icon} alt={icon} />}
											<span>{config.translations.menu_footer[name]}</span>
										</a>
										<div class={style.footer_line} />
									</li>
								)
							})
						}
					</ul>
				</nav>
			</div>
			<div class={style.bot_block}>
				<div class={style.footer_info}>
					<p class={style.sub_block}>{config.translations.footer.copy_right.replace('{year}', new Date().getFullYear())}</p>
				</div>
			</div>
		</footer>
	)
}
