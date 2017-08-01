var page = require('webpage').create();

var url = 'https://chrisroos.github.io/phantomjs-and-youtube-embeds/youtube-embed';
page.open(url, function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('debug.png');
  }
  phantom.exit();
});
