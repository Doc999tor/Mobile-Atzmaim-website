import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default () => (
	<nav class={style.navigation}>
		{config.navigation.map(link => (
			<Link class={style.link} href={link.link}><img src={config.urls.static + link.icon} alt={link.name}/>{link.name}</Link>
		))}
	</nav>
)
