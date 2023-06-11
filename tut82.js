// Serching for data in Mongo db
use EKart

// This query will return all opbjects with rating:4.8
db.items.find({rating:4.8})
db.items.find({rating:{$gte:4.8})
db.items.find({rating:{$gt:4.8})
db.items.find({rating:{$gt:4.8},price:{$gt:4000})
db.items.find({$or:[{{rating:{$gt:4.8}},{price:{$gt:4000}}}])