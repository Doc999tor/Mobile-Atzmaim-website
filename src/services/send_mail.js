import { default as mainRequestService } from '../../components-lib/request.service.js'

export const postService = (url, body) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
	}
	return mainRequestService(url, options)
}

export const postValidateService = (body, url) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		mode: 'cors',
		body
	}
	return mainRequestService(url, options)
}
