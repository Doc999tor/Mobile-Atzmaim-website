import { h, Component } from 'preact'
import ChangeLang from '../change_lang'
import { lang, config } from '../../../components-lib/Home_website/config_ssr.js'

export default class Menu extends Component {
	state = {
		changeLang: false
	}

	handleChangeLanguages = () => this.setState({ changeLang: !this.state.changeLang })

	render ({ close }, { changeLang }) {
		return (
			<section onClick={close}  class='background'>
			<div onClick={e => e.stopPropagation()} class='menu_wrap_mb'>
				<nav>
					{config.menu_mobile.map(item => (
						<li class='menu_link'>
							<a href={item.link}>{config.translations.menu_mobile[item.name]}
								<img class={config.isRTL && 'scale'} src={config.urls.media + 'ic_arrow.svg'} alt='arrow' />
							</a>
						</li>
					))}
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
				<button onClick={this.handleChangeLanguages} type='button' class='lang_btn'><img class='lang_img' src={config.urls.media + 'ic_language.svg'} alt='language image' />{config.translations.languages[lang]}</button>
				{changeLang && <ChangeLang close={this.handleChangeLanguages} />}
			</div>
		</section>
		)
	}	
}
