import { h, Component } from 'preact'
import common from '../hero/hero.less'
import Messenger from './components/messenger'
import SendMail from './components/send_mail'
import styles from '../features/component/allFeatures/all.less'
import style from './contactUs.less'

export default class ContactUs extends Component {
	state = {
		mailForm: false
	}

	openMailForm = () => this.setState({ mailForm: true })

	render () {
		return (
			<div id='contact_us' class={common.height}>
				<section class={styles.top_section}>
					<div class={style.top_title}>
						<h2 >{config.translations.contact_us.main_title}</h2>
						<a class={style.phone} href={`tel:${config.modules.contact_us.phone_number}`}>{config.modules.contact_us.phone_number}</a>
						<div class={style.actions}>
							<div class={style.tap}>
								<img src={config.urls.media + 'ic_question_small.svg'} alt='tap icon' />
							</div>
							<p>{config.translations.contact_us.preview_text}</p>
						</div>
					</div>
					<div class={styles.background_top}>
						<img class={config.isRTL ? `${styles.scale} ${styles.static_bd_rtl}` : styles.static_bd} src={config.urls.media + 'bg_top.svg'} alt='background' />
						<img class={config.isRTL ? `${styles.scale} ${style.contact_img_rtl}` : style.contact_img} src={config.urls.media + 'ill_contact_us.svg'} alt='background' />
					</div>
				</section>
				<section class={style.bottom_section}>
					<h3 class={style.subtitle}> {config.translations.contact_us.subtitle}</h3>
					<div class={style.container}>
						{config.modules.contact_us.data.map(item => <Messenger messenger={item} />)}
					</div>
					<SendMail openForm={this.openMailForm} />
				</section>
			</div>
		)
	}
}
