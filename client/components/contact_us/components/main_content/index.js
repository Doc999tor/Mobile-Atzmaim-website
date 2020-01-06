import { h } from 'preact'
import Messenger from '../messenger'
import SendButton from '../send_mail_button'
import { config }from '../../../../../components-lib/Home_website/config_ssr.js'

export default ({ onOpenMailForm }) => {
	return (
		<div id='main_content'>
			<section class='top_section'>
				<div class='top_title'>
					<h2 >{config.translations.contact_us.main_title}</h2>
					<a class='phone' href={`tel:${config.modules.contact_us.phone_number}`}>{config.modules.contact_us.phone_number}</a>
					<div class='contact_actions'>
						<div class='tap'>
							<img src={config.urls.media + 'ic_question_small.svg'} alt='tap icon' />
						</div>
						<p>{config.translations.contact_us.preview_text}</p>
					</div>
				</div>
				<div class='background_top'>
					<img class={config.isRTL ? 'scale static_bg_rtl' : 'static_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
					<img class={config.isRTL ? 'scale contact_img_rtl' : 'contact_img'} src={config.urls.media + 'ill_contact_us.svg'} alt='contact_img' />
				</div>
			</section>
			<section class='bottom_section'>
				<h3 class='contact_subtitle'> {config.translations.contact_us.subtitle}</h3>
				<div class='contact_container'>
					{config.modules.contact_us.data.map(item => <Messenger messenger={item} />)}
				</div>
				<SendButton openForm={onOpenMailForm} />
			</section>
		</div>
	)
}
