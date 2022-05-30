'use strict'
const os = require('os')
const { '以太网': winList, 'en0': macList } = os.networkInterfaces()

let ip = ''
for (const item of (winList || macList)) {
  if (item.family === 'IPv4') {
    ip = item.address
    break
  }
}

module.exports = {
  ip
}
