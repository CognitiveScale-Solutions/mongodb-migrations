MongoClient = require('mongodb').MongoClient

exports.connect = (config, cb) ->
  MongoClient.connect config.url, config.options, cb
