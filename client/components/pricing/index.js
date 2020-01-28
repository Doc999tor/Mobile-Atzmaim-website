import { h } from 'preact'
import CommonInfo from './component/commonInfo'

export default ({ animation, translations, config }) => (
	<div id='pricing' class='pricing'>
		<CommonInfo translations={translations} config={config} animation={animation} />
	</div>
)
