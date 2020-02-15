import { h } from 'preact'

export default ({ name, current, config }) => {
	return (
		<div class={`carousel_slide ${current ? 'active_slide' : ''}`}>
			<picture>
				<source class='slide_picture' srcset={`${config.urls.hero_gallery}${name}.webp`} type='image/webp' loading='lazy' />
				<img class='slide_picture' src={`${config.urls.hero_gallery}${name}.png`} alt={name} height='366' width='183' loading='lazy' />
			</picture>
		</div>
	)
}