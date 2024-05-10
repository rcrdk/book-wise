import axios from 'axios'

export const api = axios.create({
	baseURL: '/api',
})

if (process.env.NEXT_PUBLIC_ENABLE_API_DELAY) {
	api.interceptors.request.use(async (config) => {
		await new Promise((resolve) =>
			setTimeout(resolve, Math.round(Math.random() * 6000)),
		)
		return config
	})
}
