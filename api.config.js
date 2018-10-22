/**
 * @file Api config / Commonjs module
 * @module api.config
 * @author Surmon <https://github.com/surmon-china>
 */

const { isProdMode } = require('./environment')

module.exports = {
  cdnUrl: isProdMode ? '' : '',
  proxyUrl: isProdMode ? 'https://qiekenol.com/proxy/' : '/proxy/',
  baseUrl: isProdMode ? 'https://api.qiekenol.com' : 'http://localhost:8000',
  socketHost: isProdMode ? 'https://qiekenol.com' : 'http://localhost:3000'
}
