/* eslint-disable import/no-extraneous-dependencies */

const withPlugins = require('next-compose-plugins')

const fonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    fonts,
    [
      optimizedImages,
      {
        handleImages: ['gif', 'ico', 'jpg', 'png', 'svg', 'webp'],
      },
    ],
  ],
  {
    distDir: 'build',
    future: { webpack5: true },
  },
)
