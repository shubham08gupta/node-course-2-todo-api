// const MongoClient = require('mongodb').MongoClient; or
const {MongoClient, ObjectID} = require('mongodb'); // get value of MongoClient key from require('Mongodb') object

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false
    }, (error,result) =>{
      if (error) {
        return console.log('Unable to insert todo', error);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    });


    // db.collection('Users').insertOne({
    //   name: 'Shubham Gupta',
    //   age: 22,
    //   location: 'Azadpur'
    // }, (error,result) =>{
    //   if (error) {
    //     return console.log('Unable to insert todo', error);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.close();
});
