export default (options) => {
	let baseUrl = "http://localhost:9090"
	let url = options.url
	let method = options.method ? options.method : "GET"
	let data = options.data ? options.data : {}
	let header = options.header ? options.header : {}
	return new Promise((resolve, reject) => {
		uni.request({
			method: method,
			url: baseUrl + url,
			data: data,
			header: header,
			dataType: 'json',
		}).then((response) => {
			if (response.data.code == 1 && response.data) {
				resolve(response.data)
			}

		}).catch(error => reject(error))
	});
}
