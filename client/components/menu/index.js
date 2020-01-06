import { h } from 'preact'
import { Link } from 'preact-router'
import { config } from '../../../components-lib/Home_website/config_ssr.js'

export default ({ close }) => {
	return (
		<section onClick={close}  class='background'>
			<div onClick={e => e.stopPropagation()} class='menu_wrap_mb'>
				<nav>
					{config.menu_mobile.map(item => {
						if (item.link === config.urls.contact_us) {
							return (
								<li class='menu_link' >
									<Link href={item.link}>
										{config.translations.menu_mobile[item.name]}
										<span>
											<img class={config.isRTL && 'scale'} src={config.urls.media + 'ic_arrow.svg'} alt='arrow' />
										</span>
									</Link>
								</li>)
						}
						return (
						<li class='menu_link'>
							<a href={item.link}>{config.translations.menu_mobile[item.name]}
								<img class={config.isRTL && 'scale'} src={config.urls.media + 'ic_arrow.svg'} alt='arrow' />
							</a>
						</li>
					)})}
				</nav>
				<div class='btn_wrap'>
					<a class='link_btn' href={config.urls.signup}>{config.translations.hero.sign_up}</a>
					<a class='link_btn' href={config.urls.login}>{config.translations.hero.log_in}</a>
				</div>
				<ul class='networks'>
					{config.urls.social_networks.map(item => (
						<li><a href={item.url}><img src={config.urls.media + item.icon} alt={item.icon} /></a></li>
					))}
				</ul>
			</div>
		</section>
	);
};
