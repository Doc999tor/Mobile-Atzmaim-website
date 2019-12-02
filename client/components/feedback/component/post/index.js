import { h } from 'preact'
import { config }from '../../../../../config.js'
export default ({ icon, name, rating, text }) => {
	const onError = e => {
		if (!e.target.src.endsWith(config.urls.default_avatar)) {
			e.target.src = config.urls.default_path_to_avatar + config.urls.default_avatar
		}
	}
	const Rating = rating => (<div>
		{Array.from({ length: rating }).map((r, i) => <img key={i} src={config.urls.media + 'star.svg'} alt='star' />)}
	</div>)
	return (
		<div class='client_feedback'>
			<div class='client_info'>
				<img class='post_picture' height='64' width='64' alt={icon} src={config.urls.media_clients + icon} onError={onError} />
				<div class='post_wrap'>
					<p>{name}</p>
					<div>{Rating(rating)}</div>
				</div>
			</div>
			<p class='post_text'>{text}</p>
		</div>
	)
}
