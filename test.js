var tap = require('tap')

var watchfulProtector = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(watchfulProtector('world'), 'hello world', 'does it')
})
