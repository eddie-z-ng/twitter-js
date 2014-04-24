var store = require('../store');

/* GET home page. */
exports.index = function(req, res){
  var tweets = store.list();
  var reversedtweets = tweets.slice().reverse();
  res.render('index', { title: 'Twitter.js', tweets: reversedtweets, show_form: true });
};

exports.submit = function(req, res){
  var name = req.body.name;
  var text = req.body.text;

  var tweet = store.push(name, text);
  //var tweet = store.find({name: name, text: text});
  //console.log(tweet);
  return tweet;
};