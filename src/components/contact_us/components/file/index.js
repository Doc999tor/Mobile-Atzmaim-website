import { h } from 'preact'
import style from './file.less'

export default ({ files, item, onDeleteFile }) => {
	return (
		<div class={style.item}>
			<div class={style.icon}>
				<img src={config.urls.media + 'ic_file.svg'} />
			</div>
			<p class={style.name}>{files[item].name}</p>
			<button class={style.delete} onClick={() => onDeleteFile(item)} type='button'>
				<img src={config.urls.media + 'ic_delete.svg'} />
			</button>
		</div>
	)
}
