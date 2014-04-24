var store = require('../store');

exports.show = function(req, res){
  var name = req.params.name;
  var tweets = store.find({name: name});
  res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, show_form: true, show_name: true });
};

exports.showTweet = function(req, res) {
  var name = req.params.name;
  var id = req.params.id;
  var tweet = store.find({name: name, id: parseInt(id)});
  res.render('index', { title: 'Tweet#  ' + id + ' by ' + name, tweets: tweet, show_form: true, show_name: true });
};
