import { h, Component } from 'preact'
import { config } from '../../../components-lib/Home_website/config_ssr.js'

export default class Navigation extends Component {
	state = {
		active: '#hero'
	}

	toggleClass = (link, linkName) => {
		this.setState({ active: link.link }, () => this.props.handleClickNav(linkName))
	}

	render () {
		const { active } = this.state
		return (
			<div class='navigation_wrap'>
				<div class='helper_nav'>
					<nav class='navigation'>
						{this.props.links.map(linkName => {
							const link = config.navigation[linkName]
							return <a
  							onClick={() => this.toggleClass(link, linkName)}
  							class={active === link.link ? 'match_nav' : 'link_nav'}
								href={config.baseUrl + link.link}
								native
								>
								<svg class={active === link.link ? 'img_active_nav' : 'img_inactive_nav'}>
									<use xlinkHref={config.urls.media_navigation + link.icon + '#' + link.icon.slice(0, -4)} />
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
