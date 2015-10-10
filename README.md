watchful-protector
----------------

a node module for simply and rapidly scaffolding #wowwwwwnetwork/@godtributes style bots. 

[![NPM](https://nodei.co/npm/watchful-protector.png)](https://nodei.co/npm/watchful-protector/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


```
var watchfulProtector = require('watchful-protector')
var config = {
      "consumer_key": "spiders",
      "consumer_secret": "spiders",
      "access_token": "moreSpiders",
      "access_token_secret": "bagofspiders"
    }

// WOWWWWWIDK
// will reply "wow, idk" to tweets that have a question mark
watchfulProtector(config, "yrBotsScreenName", function (tweet) {
  if (tweet.text.match(/\?/)) {
    return '@' + tweet.user.screen_name + ' wow, idk'
  }
})

```