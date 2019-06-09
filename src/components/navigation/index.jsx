import { h, Component } from 'preact';
import { Link } from 'preact-router';
// import './header.css';

import style from './style.less';

export default class Navigation extends Component {
	render() {
		return (
			<nav class={style.navigation}>
				{/* <h1>Preact App</h1> */}
				{config.navigation.map(link => (
					<Link class={style.link} href={link.link}><img src={config.urls.static + link.icon} alt={link.name}/>{link.name}</Link>
				))}
				{/* <nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
					<Link href="/profile/john">John</Link>
				</nav> */}
			</nav>
		);
	}
}
