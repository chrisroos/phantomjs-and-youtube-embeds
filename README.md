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

I get a _slightly_ different error with PhantomJS 2.1.1:

```
$ phantomjs -v
2.1.1

$ phantomjs phantomjs-test.js 
pause@https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:6480:34
JV@https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:3410:51
uV@https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:3383:182
bra@https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:4146:126
r1@https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:4125:103
https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:7223:167
https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:373:293
[native code]
cb@https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:374:19
Fg@https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:371:147
ja@https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:363:160
https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:411:197

  https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:6480 in pause
  https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:3410 in JV
  https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:3383 in uV
  https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:4146 in bra
  https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:4125 in r1
  https://www.youtube.com/yts/jsbin/player-vflrwQIQw/en_GB/base.js:7223
  https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:373
  :0
  https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:374 in cb
  https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:371 in Fg
  https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:363 in ja
  https://www.youtube.com/yts/jsbin/www-embed-player-vfllwwkQI/www-embed-player.js:411
Status: success
```
