var express = require('express')
  , proxy = require('http-proxy-middleware');

var urlFilter = new RegExp('^/sub/api');
function filter(pathname, req) {
  var match = urlFilter.test(req.url);
  console.log('filter:', match);
  return match;
}

var apiProxy = proxy(filter, {
  target: 'http://jsonplaceholder.typicode.com',
  changeOrigin: true,
  logLevel: 'debug'
});

var sub = new express.Router();
sub.use(apiProxy);

// Cannot reach this route
sub.get('/hello',
  function(req, res) {
    res.json({
      text: 'Hello sub application'
    })
  }
);

module.exports = sub;
