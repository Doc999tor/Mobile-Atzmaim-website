import { h } from 'preact';
import style from './style.less';
export default ({rating}) => {
	return (
		<div>
			<div>
				<img src='' />
				<div>
					<p></p>
					{/* <div>{rating.map(star => (<img src={config.urls.static + 'star.svg'} />))}</div> */}
				</div>
			</div>
		</div>
	);
};

