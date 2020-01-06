import { default as mainRequestService } from 'project_components/request.service.js'

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
