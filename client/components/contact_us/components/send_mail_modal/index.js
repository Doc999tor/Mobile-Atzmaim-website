import { h } from 'preact'

export default ({ translations, config, sending }) => {
	return (
		<div class='send_modal_backgroud'>
			<div class='send_modal_body'>
				{sending
					? <div class='sending'>
						<img class='plane' src={config.urls.media + 'paper_plane.svg'} />
						<p>{translations.contact_us.send_popup.sending}</p>
					</div>
					: <div class='success'>
						<div class='outer_circle'>
							<div class='inner_circle'>
								<div class='center'>
									<img class='mark_modal' src={config.urls.media + 'ic_check_mark_modal.svg'} />
								</div>
							</div>
						</div>
						<p>{translations.contact_us.send_popup.success}</p>
					</div>}
			</div>
		</div>
	)
}
