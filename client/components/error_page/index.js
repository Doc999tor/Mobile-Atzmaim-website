import { h } from 'preact'
import { config } from '../../../components-lib/Home_website/config_ssr.js'
import { Link } from 'preact-router'

export default ({ referer }) => {
	return (
		<div id='error' class='error' >
			<div class='error_wrap'>
				<div class='error_top_section'>
					<div class='error_title error_height'>
						<h2 >{config.translations.error_page.title}</h2>
						<p>{config.translations.error_page.text}</p>
					</div>
					<div class='error_background_top'>
						<img class={config.isRTL ? `scale static_bg_rtl` : 'static_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
						<img class={config.isRTL ? 'error_outer_rtl' : 'error_outer_ltr'} src={config.urls.media + 'ill_robot.svg'} alt='robot' />
						<img class={config.isRTL ? 'question_rtl' : 'question_ltr'} src={config.urls.media + 'question.svg'} alt='question image' />
						<img class={config.isRTL ? 'robot_shadow_rtl self_shadow' : 'robot_shadow_ltr self_shadow'} src={config.urls.media + 'robot_shadow.svg'} alt='robot_shadow image' />
					</div>
				</div>
				<div class='error_background_bottom'>
					<Link class={`error_button to_home`} href={config.baseUrl}><span><img src={config.urls.media + 'ic_home.svg'} alt={config.translations.error_page.home_btn} /></span>{config.translations.error_page.home_btn}</Link>
					<a class='error_button' href={config.urls.support}><span><img src={config.urls.media + 'ic_support.svg'} alt={config.translations.error_page.support_btn} /></span>{config.translations.error_page.support_btn}</a>
					<a class='error_button' href={config.urls.signup}><span><img src={config.urls.media + 'ic_join.svg'} alt={config.translations.error_page.join_btn} /></span>{config.translations.error_page.join_btn}</a>
				</div>
			</div>
		</div>
	);
};
