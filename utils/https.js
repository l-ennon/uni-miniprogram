import BASE_URL from './baseURL.js'
 const request = (options = {}) => {
 // 在这里可以对请求头进行一些设置
 // 例如：
  // options.header = {
  //   "Content-Type": "application/x-www-form-urlencoded"
  // }
  
  // options.header = {
  //   'content-type': 'application/x-www-form-urlencoded',
  //   'cookie': uni.getStorageSync("Cookie")// 读取cookie
  // }
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url || '',
			method: options.type || 'GET',
			data: options.data || {},
			header: {
        'cookie': uni.getStorageSync("Cookie"), // 读取cookie
        ...options.header
       } || {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': uni.getStorageSync("Cookie")// 读取cookie
      }
		}).then(data => {
			let [err, res] = data;        
			resolve(res.data);
		}).catch(error => {
			reject(error)
		})
	});
}

 const get = (url, data, options = {}) => {
	options.type = 'GET';
	options.data = data;
	options.url = url;
	return request(options)
}

const post = (url, data, options = {}) => {
	options.type = 'POST';
	options.data = data;
	options.url = url;
	return request(options)
}


export default {
	request,
	get,
	post
}