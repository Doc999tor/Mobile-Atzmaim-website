import { h } from 'preact'

export default ({ name, current, config }) => {
	return (
		<div class={`carousel_slide ${current ? 'active_slide' : ''}`}>
			<picture>
				<source srcset={`${config.urls.hero_gallery}${name}.webp`} type='image/webp' loading='lazy' />
				<img src={`${config.urls.hero_gallery}${name}.png`} alt={name} height='366' width='183' loading='lazy' />
			</picture>
		</div>
	)
}