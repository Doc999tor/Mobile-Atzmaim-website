import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default ({ match }) => {
	return (
		<div class={style.navigation_wrap}>
			<div class={style.helper}>
				<nav class={style.navigation}>
					{config.navigation.map(link =>(
						<Link class={match === link.link ? style.match : style.link} href={link.link}><img src={config.urls.static + (match === link.link ? link.icon.substr(3) : link.icon)} alt={link.name}/>{link.name}</Link>
					))}
				</nav>
			</div>
		</div>
	);
};
