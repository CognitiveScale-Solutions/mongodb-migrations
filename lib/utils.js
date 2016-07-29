(function() {
  var MongoClient;

  MongoClient = require('mongodb').MongoClient;

  exports.connect = function(config, cb) {
    return MongoClient.connect(config.url, config.options, cb);
  };

}).call(this);
