import { h } from 'preact'
import style from './carousel.less'

export default ({ name, current }) => {
	return (
		<div class={`${style.slide} ${current ? style.active : ''}`}>
			<img src={`${config.urls.hero_gallery}${name}`} alt={name} loading='lazy' />
		</div>
	)
}
