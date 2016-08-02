var express = require('express');

var app = express();
// app.use(require('body-parser')({ keepExtensions: true}));

app.get('/app',
  function(req, res) {
    res.json({
      text: 'Hello World'
    })
  }
);

var sub = require('./sub.js');
app.use('/sub', sub);

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
