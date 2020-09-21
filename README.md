# fetch-params
获取完整的地址栏参数，包括hash部分
如：https://www.npmjs.com/search?q=get-url-params/#/index?id=1
结果：{ q: 'get-url-params', id: '1' }

# install
npm install -S fetch-params

#github
https://github.com/yiyuansheng/fetch-params.git

#usage
let fetchParams = require('./index')
let params = fetchParams(url)
console.log(params)

# 传参
let fetchParams = require('./index')
let url = 'https://www.npmjs.com/search?q=get-url-params/#/index?id=1'
let params = fetchParams(url)
console.log(params) // { q: 'get-url-params', id: '1' }
