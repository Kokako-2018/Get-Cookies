import request from 'superagent'

const getCookieUrl = 'https://priya-sesame-street-server.herokuapp.com/monsters'

export function getCookie (callback) {
  request
    .get(getCookieUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}