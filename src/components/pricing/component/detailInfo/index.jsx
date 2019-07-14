import { h } from 'preact';
import OpenedPreview from '../openedPreview';
import style from './detail.less';

export default () => {
	return (
		<div class={style.detail_info}>
			{config.modules.pricing.data.map(item => <OpenedPreview name={item.name} icon={item.icon} value={item.price_monthly} />)}
		</div>
	);
};
