import request from 'superagent'

const getCookieUrl = '/projects'

export function getCookie (callback) {
  request
    .get(getCookieUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}