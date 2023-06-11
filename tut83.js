// Deleting data from database
de.items.find({price:{$gte:11000}})
de.items.deleteOne({price:{$gte:11000}})
de.items.deleteMany({price:{$gte:11000}})
