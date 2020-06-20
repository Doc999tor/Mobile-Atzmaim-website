import { h, Component } from 'preact'
import ChangeLang from '../change_lang'
import style from './menu.less'

export default class Menu extends Component {
	state = {
		changeLang: false
	}

	handleChangeLanguages = () => this.setState({ changeLang: !this.state.changeLang })

	render ({ close }, { changeLang }) {
		return (
			<section class={style.background}>
				<div onClick={e => e.stopPropagation()} class={style.menu_wrap_mb}>
					<nav>
						{config.menu_mobile.map(item => (<li class={style.link}>
							<a href={item.link}>{config.translations.menu_mobile[item.name]}
								<img class={config.isRTL && style.scale} src={config.urls.media + 'ic_arrow.svg'} alt='arrow' />
							</a>
						</li>)
						)}
					</nav>
					<div class={style.btn_wrap}>
						<a class={style.link_btn} href={config.urls.signup}>{config.translations.hero.sign_up}</a>
					</div>
					<ul class={style.networks}>
						{config.urls.social_networks.map(item => (
							<li><a href={item.url}><img src={config.urls.media_social_networks + item.icon} alt={item.icon} /></a></li>
						))}
					</ul>
					{config.translations.languages && <button onClick={this.handleChangeLanguages} type='button' class={style.lang_btn}><img class={style.lang_img} src={config.urls.media + 'ic_language.svg'} alt='language image' />{config.translations.languages[lang]}</button>}
					{changeLang && <ChangeLang close={this.handleChangeLanguages} />}
				</div>
			</section>
		)
	}
}
