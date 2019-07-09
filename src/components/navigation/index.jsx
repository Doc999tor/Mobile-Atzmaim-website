import { h, Component } from 'preact';
import style from './style.less';

export default class Navigation extends Component {
	state = {
		active: '#hero'
	}
	toggleClass = link => {
		const currentState = this.state.active;
		console.log('state', this.state)
		console.log('location', location)
		this.setState({ active: link.link }, () => console.log('callback', this.state));
	}
	render() {
		const { active } = this.state
		return (
			<div class={style.navigation_wrap}>
				<div class={style.helper}>
					<nav class={style.navigation}>
						{this.props.links.map(linkName => {
							const link = config.navigation[linkName]
							return <a
								onClick={() => this.toggleClass(link)}
								class={active === link.link ? style.match : style.link}
								href={location.pathname + link.link}>
								<img src={config.urls.media + (active === link.link ? link.icon.substr(3) : link.icon)} alt={link.name}/>
								{config.translations.navigation[linkName].name}
							</a>
						})}
					</nav>
				</div>
			</div>
		);
	}
}
