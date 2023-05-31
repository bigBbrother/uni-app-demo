import request from "../utils/request.js"
export const empApi = {
	getList: "/test"
}

export const getListAPi = () => {
	return request({
		url: empApi.getList,
		method: 'get'
	})
}
