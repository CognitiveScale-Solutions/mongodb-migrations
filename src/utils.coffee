MongoClient = require('mongodb').MongoClient

exports.connect = (url, options, cb) ->
  MongoClient.connect url, options, cb
