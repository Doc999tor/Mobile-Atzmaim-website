import { h } from 'preact'
import style from './follow_us.less'

const FollowUs = () => {
	return (
		<div class={style.follow_us}>
			<h2 class={style.title}>{config.translations.pricing.follow_us.title}</h2>
			<div class={style.links}>
				{
					config.modules.pricing.follow_us.map(({ url, icon, type }) => <a key={url} className={style[type]} href={url}><img src={config.urls.media + icon} /></a> )
				}
			</div>
		</div>
	)
}

export default FollowUs
