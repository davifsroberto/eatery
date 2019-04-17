import * as restify from 'restify'

const server = restify.createServer({
  name: 'meat-api',
  version: '1.0.0'
})

server.get('/hello', function (req, resp, next) {
  resp.json({ message: 'hello!' })
  return next()
})
server.listen(3000, function () {
  console.log("API runing in http://localhost:3000")
})
