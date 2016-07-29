(function() {
  var MongoClient;

  MongoClient = require('mongodb').MongoClient;

  exports.connect = function(url, options, cb) {
    return MongoClient.connect(url, options, cb);
  };

}).call(this);
