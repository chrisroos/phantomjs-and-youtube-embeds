I'm using this to explore the intermittent failures we're seeing in the GOV.UK Smokey tests, as described in https://github.com/alphagov/smokey/issues/279.

The youtube-embed.html page contains the video embedded on https://www.gov.uk/transformation which is one of the ones causing us a problem.

The phantomjs-test.js script demonstrates the problem we're seeing in the Smokey tests:

```
$ phantomjs -v
1.9.8

$ phantomjs phantomjs-test.js 
TypeError: 'undefined' is not a function (evaluating 'this.g.pause()')
    at https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:6480
    at https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:3410
    at https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:3383
    at https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:4146
    at https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:4125
    at https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:7223
    at https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:373
    at https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:23
    at https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:374
    at Fg (https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:371)
    at https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:363
    at https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:411

Status: success
```
