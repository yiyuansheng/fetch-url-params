function fetchParams(url) {
  let search = ''
  let hash = ''
  if (url) { // 传入地址
    let s = url.indexOf('?')
    let h = url.indexOf('#')
    if (s > -1)search = url.substring(s, h)
    if (h > -1) hash = url.substr(h)
  }
  else { // 获取地址栏
    search = location.search
    hash = location.hash
  }

  // search部分
  search = search.split('?')
  if (search[1]) {
    search = search[1]
    let index = search.indexOf('/')
    if (index > 0) {
      search = search.substring(0, index)
    }
  }
  else search = ''
  // 哈希部分
  hash = hash.split('?')
  if (hash[1]) hash = hash[1]
  else hash = ''
  const arrSearch = search.split('&')
  const arrHash = hash.split('&')
  const params = {}
  // 切割参数
  arrSearch.forEach(item => {
    let arr = item.split('=')
    if (!params[arr[0]] && arr.length === 2) params[arr[0]] = arr[1]
  })
  arrHash.forEach(item => {
    let arr = item.split('=')
    if (!params[arr[0]] && arr.length === 2) params[arr[0]] = arr[1]
  })
  // console.log(params)
  return params
}

module.exports = fetchParams
