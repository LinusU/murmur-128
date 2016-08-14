var murmur = require('./')
var assert = require('assert')
var isEqual = require('arraybuffer-equal')
var hexToArrayBuffer = require('hex-to-array-buffer')

var testCases = [
  ['00000000000000000000000000000000', ''],
  ['852ea787f44ea21e1b4bee191b4bee19', 'test'],
  ['ceae96a325e1dc5dd4f405d905049ceb', 'linus'],
  ['73a7e2a0357fed7dd3a154bfda6a0a4c', 'murmur'],
  ['3143abb69ed7402204fd9ac052a63dec', 'veni, vidi, vici'],
  ['aadcaf1f8ca44a433674358b28deda53', 'Caesar non supra grammaticos!'],
  ['f732d668cae5f5751c4926cf1a15ebf6', 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'],
  ['20596afc6d104fbbffb8327c009668a7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur mollis orci a consectetur. Maecenas in ornare ligula, vel venenatis mauris.']
]

testCases.forEach(function (testCase) {
  assert(isEqual(murmur(testCase[1]), hexToArrayBuffer(testCase[0])))
})
