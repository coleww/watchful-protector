var Twit = require('twit')
var fs = require('fs')
var quidprofollow = require('quidprofollow');
var tipots = require('this-is-probably-ok-to-say')

module.exports = function (config, name, func) {
  var T = new Twit(config)
  quidprofollow({twitterAPIKeys: config}, function reportResults(err, followed, unfollowed) {
    if (err) throw err
    console.log('Followed:', followed);
    console.log('Unfollowed:', unfollowed);

    T.get('statuses/user_timeline', {count: 1, screen_name: name, exclude_replies: false}, function (err, data, response) {
      if (err) throw err
      console.log('grabbing timeline since:', data[0].id_str)
      T.get('statuses/home_timeline', {count: 200, since_id: data[0].id_str}, function (err, data, response) {
        if (err) throw err
        console.log('got', data.length, 'tweets')
        data.some(function(tweet){
          console.log(tweet.text)
          var res = tipots(tweet.text) && func(tweet)
          if (res) {
            console.log('bingo', res)
            T.post('statuses/update', {status: res, in_reply_to_status_id: tweet.id_str}, function (err, data, response) {
              if (err) throw err
              console.log(data)
            })
          }
          return res
        })
      })
    })
  })
}
