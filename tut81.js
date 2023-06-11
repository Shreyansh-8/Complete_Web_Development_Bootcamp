// Inserting data in Mongo Database
use Ekart
db.items.insertOne({ name: "Samsung M11", price: 11000, rating: 4.8, qty: 233, sold: 98 })
db.items.insertMany([{ name: "Apple M11", price: 110000, rating: 4.8, qty: 233, sold: 58 },{name: "Samsung M11", price: 10000, rating: 4.8, qty: 233, sold: 98},{name: "Realme M11", price: 11000, rating: 4.8, qty: 233, sold: 198}])
db.items.find()//to see all the documents