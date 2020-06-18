import { default as mainRequestService } from '../../components-lib/request.service.js'

export const postService = (url, body) => {
	const options = {
		method: 'POST',
		body
	}
	return mainRequestService(url, options)
}
