import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import SmallPreview from '../smallPreview'
import SignUpBtn from '../../../common_sign_up_btn'
import SwichBox from '../switchBox'
import DetailInfo from '../detailInfo'
import styles from '../../../features/component/allFeatures/all.less'
import style from './common.less'

const CommonInfo = ({ showDetail, animation, handleShowPreview, handleShowDetail }) => {
	const [value, setValue] = useState(config.modules.pricing.switch_bill_annually)
	const handleChange = () => setValue((currentValue) => !currentValue)
	const handleChooseYearly = () => setValue(true)
	const handleChooseMonthly = () => setValue(false)
	return (
		<div>
			<section class={styles.top_section}>
				<div class={`${styles.text} ${animation && (config.isRTL ? styles.text_end_rtl : styles.text_end_ltr)}`}>
					{animation && <h2>{config.translations.pricing.title}</h2>}
					{animation && <SignUpBtn />}
				</div>
				<div class={styles.background_top}>
					{!animation
						? <img class={config.isRTL ? style.man_rtl : style.man_ltr} src={config.urls.media + 'man.svg'} alt='man' />
						: <Fragment>
							<img class={config.isRTL ? `${styles.scale} ${styles.start_bg_rtl}` : styles.start_bg} src={config.urls.media + 'bg_top.svg'} alt='background' />
							<img class={config.isRTL ? style.man_active_rtl : style.man_active_ltr} src={config.urls.media + 'man_active.svg'} alt='man' />
							<img class={config.isRTL ? style.screen_active_rtl : style.screen_active_ltr} src={config.urls.media + 'screen.svg'} alt='screen' />
							<img class={config.isRTL ? style.coin_rtl : style.coin_ltr} src={config.urls.media + 'coin.svg'} alt='coin' />
						</Fragment>}
				</div>
			</section>
			<section class={`${style.wrap} ${animation && (config.isRTL ? styles.text_end_rtl : styles.text_end_ltr)}`}>
				{animation && <div>
					<div className={style.swichBox_wrap}>
						<SwichBox value={value} handleChange={handleChange} handleChooseYearly={handleChooseYearly} handleChooseMonthly={handleChooseMonthly} />
					</div>
					{!showDetail
						? <section class={style.pricing_plan}>
							{config.modules.pricing.data.map(item => <SmallPreview showDetail={handleShowDetail} name={item.name} icon={item.icon} value={value ? item.price_yearly : item.price_monthly} />)}
						</section>
						: <DetailInfo handleShowPreview={handleShowPreview} />}
				</div>}
			</section>
		</div>
	)
}

export default CommonInfo
