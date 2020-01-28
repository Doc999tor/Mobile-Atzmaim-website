import { h, Fragment } from 'preact'
import Bussiness from './component'

export default ({ animation, config, translations  }) => {
	return (
		<div id='business_types' class='height'>
			<section class='top_section'>
				<div class={`text ${animation && (config.isRTL ? 'topSection_rtl' :'topSection_ltr')}`}>
					<h2 class={!animation ? 'hidden_content' : ''}>{translations.business_types.main_title}</h2>
					 <div class={!animation ? 'hidden_content' : 'types_actions'}>
						<div class='types_tap'>
							<img src={config.urls.media + 'ic_tap.svg'} alt='tap icon' />
						</div>
						<p>{translations.business_types.preview_text}</p>
					</div>
				</div>
				<div class='background_top'>
					{!animation
						? <img class={config.isRTL ? 'inactive_people_rtl' : 'inactive_people_ltr'} src={config.urls.media + 'business people.svg'} alt='business people' />
						: <Fragment>
							<img class={config.isRTL ? `scale start_bg_rtl` : 'start_bg'} src={config.urls.media + 'bg_top.svg'} alt='background' />
							<img class={config.isRTL ? 'city_rtl' : 'city_ltr'} src={config.urls.media + 'city.svg'} alt='city' />
							<img class={config.isRTL ? 'active_people_rtl' : 'active_people_ltr'} src={config.urls.media + 'business people_active.svg'} alt='business people' />
						</Fragment>}
				</div>
			</section>
			<section class={animation && (config.isRTL ? 'topSection_rtl' :'topSection_ltr')}>
				<div class={!animation ? 'hidden_content' : ''}>
					<h3 class='subtitle'>{translations.business_types.subtitle}</h3>
					<div class='business_type'>
						{config.modules.business_types.data.map(item => <Bussiness translations={translations} config={config} name={item.name} icon={item.icon} />)}
					</div>
				</div>
			</section>
		</div>
	)
}
