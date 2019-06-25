import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default ({ match }) => {
	return (
		<nav class={style.navigation}>
			{config.navigation.map(link => (
				<Link activeClassName="active" class={match === link.link ? style.match : style.link} href={link.link}><img src={config.urls.static + (match === link.link ? link.icon : link.icon)} alt={link.name}/>{link.name}</Link>
			))}
		</nav>
	);
};
