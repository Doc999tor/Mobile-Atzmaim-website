import { h } from 'preact'
import style from './carousel.less'

export default ({ name, current }) => {
	return (
		<div class={`${style.slide} ${current ? style.active : ''}`}>
			<picture>
				<source class={style.img} srcset={`${config.urls.hero_gallery}${name}.webp`} type='image/webp' loading='lazy' />
				<img class={style.img} src={`${config.urls.hero_gallery}${name}.jpg`} alt={name} height='366' width='183' loading='lazy' />
			</picture>
		</div>
	)
}
