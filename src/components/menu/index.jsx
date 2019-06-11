import { h } from 'preact';
import style from './style.less';

export default ({close}) => {
	return (
		<section onClick={close}  class={style.background}>
			<div onClick={e => e.stopPropagation()} class={style.menu_wrap}>
				<nav>
				{config.menu.map(item => (
					<li class={style.link}>
						<a href={item.link}>{config.translations.menu[item.name]}
							<img src={config.urls.static + 'ic_arrow.svg'} />
						</a>
					</li>
				))}
				</nav>
				<div class={style.btn_wrap}>
					<button>{config.translations.hero.sign_up}</button>
					<button>{config.translations.hero.log_in}</button>
				</div>
				<ul class={style.networks}>
					{config.urls.social_networks.map(item => (
						<li><a href={item.url}><img src={config.urls.static + item.icon} /></a></li>
					))}
				</ul>
			</div>
		</section>
	);
};
