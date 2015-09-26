// var watchfulProtector = require('watchful-protector')
var watchfulProtector = require('./')
// var config = require('./twitconfig')
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
