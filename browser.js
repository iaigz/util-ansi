'use strict'

var exports = module.exports = require('./backend')

// cleanout every sequence for browserifyed code
Object.keys(module.exports).forEach(function (key) {
  module.exports[key] = ''
})

// TODO could use spans, someway, but YAGNI && KISS

exports.reset = ''
