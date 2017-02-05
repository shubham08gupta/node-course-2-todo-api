// const MongoClient = require('mongodb').MongoClient; or
const {MongoClient, ObjectID} = require('mongodb'); // get value of MongoClient key from require('Mongodb') object

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find({
      name: 'Shubham'
    }).toArray().then((result)=>{
      console.log(`Result: ${JSON.stringify(result,undefined,2)}`);
    },(err)=>{
      console.log('Error', err);
    });
    //db.close();


});
