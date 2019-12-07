import { h } from 'preact'
import style from './menu.less'

export default ({ close }) => {
	return (
		<section onClick={close}  class={style.background}>
			<div onClick={e => e.stopPropagation()} class={style.menu_wrap_mb}>
				<nav>
					{config.menu_mobile.map(item => (
						<li class={style.link}>
							<a href={item.link}>{config.translations.menu_mobile[item.name]}
								<img class={config.isRTL && style.scale} src={config.urls.media + 'ic_arrow.svg'} alt='arrow' />
							</a>
						</li>
					))}
				</nav>
				<div class={style.btn_wrap}>
					<a class={style.link_btn} href={config.urls.signup}>{config.translations.hero.sign_up}</a>
					<a class={style.link_btn} href={config.urls.login}>{config.translations.hero.log_in}</a>
				</div>
				<ul class={style.networks}>
					{config.urls.social_networks.map(item => (
						<li><a href={item.url}><img src={config.urls.media_social_networks + item.icon} alt={item.icon} /></a></li>
					))}
				</ul>
			</div>
		</section>
	);
};
