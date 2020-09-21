# fetch-params
获取完整的地址栏参数，包括hash部分  
如：https://www.npmjs.com/search?q=fetch-url-params/#/index?id=1  
结果：{ q: 'fetch-url-params', id: '1' }

# install
npm install -S fetch-url-params

# github
https://github.com/yiyuansheng/fetch-url-params.git  

# usage
import fetchUrlParams from 'fetch-url-params'  
let params = fetchParams(url)  
console.log(params)

# 传参
import fetchUrlParams from 'fetch-url-params'  
let url = 'https://www.npmjs.com/search?q=fetch-url-params/#/index?id=1'  
let params = fetchUrlParams(url)  
console.log(params) // { q: 'fetch-url-params', id: '1' }
