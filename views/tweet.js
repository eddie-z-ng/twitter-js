var tpl = function (_swig,_ctx,_filters,_utils,_fn
/**/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "\n  <div class=\"tweetbox\">\n      <img>\n      <div class=\"content\">\n      <strong class=\"by\"><a href=\"/users/";
_output += _filters["e"](((typeof _ctx.tweet !== "undefined" && _ctx.tweet.name !== undefined) ? ((typeof _ctx.tweet !== "undefined" && _ctx.tweet.name !== undefined) ? _ctx.tweet.name : "") : ((typeof tweet !== "undefined" && tweet.name !== undefined) ? tweet.name : "")));
_output += "\">";
_output += _filters["e"](((typeof _ctx.tweet !== "undefined" && _ctx.tweet.name !== undefined) ? ((typeof _ctx.tweet !== "undefined" && _ctx.tweet.name !== undefined) ? _ctx.tweet.name : "") : ((typeof tweet !== "undefined" && tweet.name !== undefined) ? tweet.name : "")));
_output += "</a></strong><br>";
_output += _filters["e"](((typeof _ctx.tweet !== "undefined" && _ctx.tweet.text !== undefined) ? ((typeof _ctx.tweet !== "undefined" && _ctx.tweet.text !== undefined) ? _ctx.tweet.text : "") : ((typeof tweet !== "undefined" && tweet.text !== undefined) ? tweet.text : "")));
_output += "<br>\n      <a href=\"#\">Re-tweet</a>\n      </div>\n  </div>\n";

  return _output;

};
