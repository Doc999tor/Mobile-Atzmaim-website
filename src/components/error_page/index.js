import { h } from 'preact';
import style from './error.less';

export default () => {
	return (
		<div id='error' class={style.error} >
			<div class={style.top_section}>
				<div class={style.title}>
					<h2 >Oops!</h2>
					<p>Something went wrong, but we're going to fix it! Sorry about that</p>
				</div>
				<div class={style.background_top}>
					<img class={config.isRTL ? style.inner_rtl : style.inner_ltr} src={config.urls.media + 'bg_top.svg'}/>
					<img class={config.isRTL ? style.outer_rtl : style.outer_ltr} src={config.urls.media + 'ill_robot.svg'}/>
				</div>
			</div>
		</div>
	);
};
