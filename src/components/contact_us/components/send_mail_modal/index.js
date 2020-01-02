import { h } from 'preact'
import style from './sendModal.less'

export default ({ closeModal, sending }) => {
	const	bodyClick = e => e.stopPropagation()
	return (
		<div class={style.backgroud} onClick={closeModal}>
			<div class={style.body} onClick={bodyClick}>
				{sending
					? <div class={style.sending}>
						<img class={style.plane} src={config.urls.media + 'paper_plane.svg'} />
						<p>{config.translations.contact_us.send_popup.sending}</p>
					</div>
					: <div class={style.success}>
						<div class={style.outer_circle}>
							<div class={style.inner_circle}>
								<div class={style.center}>
									<img class={style.mark_modal} src={config.urls.media + 'ic_check_mark_modal.svg'} />
								</div>
							</div>
						</div>
						<p>{config.translations.contact_us.send_popup.success}</p>
					</div>}
			</div>
		</div>
	)
}
