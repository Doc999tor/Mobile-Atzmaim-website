import { h } from 'preact';
import { Link } from 'preact-router';
import style from './error.less';

export default () => {
	return (
		<div id='error' class={style.error} >
			<div class={style.top_section}>
				<div class={style.title}>
					<h2 >{config.translations.error_page.title}</h2>
					<p>{config.translations.error_page.text}</p>
				</div>
				<div class={style.background_top}>
					<img class={config.isRTL ? style.inner_rtl : style.inner_ltr} src={config.urls.media + 'bg_top.svg'}/>
					<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'ill_robot.svg'}/>
					<img class={config.isRTL ? style.question_rtl : style.question_ltr} src={config.urls.media + 'ic_question.svg'}/>
				</div>
			</div>
			<div class={style.background_bottom}>
				<Link class={`${style.button} ${style.home}`} href={config.baseUrl}><span><img src={config.urls.media + 'ic_home.svg'} /></span>{config.translations.error_page.home_btn}</Link>
				<a class={style.button} href={config.urls.support}><span><img src={config.urls.media + 'ic_support.svg'} /></span>{config.translations.error_page.support_btn}</a>
				<a class={style.button} href={config.urls.signup}><span><img src={config.urls.media + 'ic_join.svg'} /></span>{config.translations.error_page.join_btn}</a>
			</div>
		</div>
	);
};