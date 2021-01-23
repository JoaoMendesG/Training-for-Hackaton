const http = require('http')
const app = require('./configurations/express')

http.createServer(app).listen(3000, function () {
    console.log(`[Products Application - ${(new Date()).toISOString()}] Server Online in Port >>> ${this.address().port}`)
})