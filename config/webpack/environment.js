var { environment } = require('@rails/webpacker')

// Bootstrap 3 has a dependency over jQuery:
var webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

module.exports = environment
