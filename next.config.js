const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  ...withImages({ esModule: true })
}
