const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/Ekart');
    // await myKitty.save();
    myKitty.speak
    console.log(await Kitten.find({ name: 'myKitty'}));
  
    console.log("We are connected bro")
}
const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting ="My name is " + this.name
    console.log(greeting);
  };
const Kitten = mongoose.model('mykitten', kittySchema);

const myKitty = new Kitten({ name: 'myKitty' });
console.log(myKitty.name);
myKitty.speak();

