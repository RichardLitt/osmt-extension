var pp = require('protocol-parser')
var _ = require('lodash')

var OSMT = pp.parse(window, 'os')

if (!_.isEmpty(OSMT))
  console.log('OSMT compliant:', OSMT)
