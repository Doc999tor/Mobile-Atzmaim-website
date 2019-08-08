import { h, Component } from 'preact';
import style from './nav.less';
import './nav.less';

export default class Navigation extends Component {
	state = {
		active: location.hash ? location.hash : '#hero'
	}
	toggleClass = link => {
		const currentState = this.state.active;
		this.setState({ active: link.link })
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
								<svg class={active === link.link ? style.img_active : style.img_inactive}>
                  <use xlinkHref={config.urls.media + 'sprite.svg#' + link.icon} />
                </svg>
								{config.translations.navigation[linkName].name}
							</a>
						})}
					</nav>
				</div>
			</div>
		);
	}
}
