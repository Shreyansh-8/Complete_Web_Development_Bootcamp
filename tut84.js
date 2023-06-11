// Updating database
db.items.updateOne({name:"Samsung M11"},{$set:{price:2}})
db.items.updateMany({name:"Samsung M11"},{$set:{price:2, rating:1}})
