import { h } from 'preact'
import style from './carousel.less'

export default ({ name, current }) => {
	return (
		<div class={`${style.slide} ${current ? style.active : ''}`}>
			<picture>
				<source srcset={`${config.urls.hero_gallery}${name}.webp`} type='image/webp' loading='lazy' />
				<img src={`${config.urls.hero_gallery}${name}.png`} alt={name} height='366' width='183' loading='lazy' />
			</picture>
		</div>
	)
}
