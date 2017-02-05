// const MongoClient = require('mongodb').MongoClient; or
const {MongoClient, ObjectID} = require('mongodb'); // get value of MongoClient key from require('Mongodb') object

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');


    // db.collection('Todos').insertMany([
    //   {
    //     name:'Shubham',
    //     age: 22,
    //     completed: false
    //   },
    //   {
    //     name:'Shubham',
    //     age: 21,
    //     completed: true
    //   },
    //   {
    //     name:'Shruti',
    //     age: 25,
    //     completed: false
    //   }
    //
    // ], (err,result)=>{
    //     if (err) {
    //       return console.log('Error inserting document',err);
    //     }
    //     console.log(`Inserted successfully ${result.ops.length} records`);
    // });
    // db.collection('Todos').find({}).toArray().then((docs) =>{
    //   // console.log(`count: ${coun`);
    //   console.log(JSON.stringify(docs,undefined,2));
    // }, (err) =>{
    //   console.log('Unable to fetch todos',err);
    // });

    db.collection('Todos').find({
      name: 'Shruti'
    }).toArray().then((result)=>{
      console.log(`Result: ${JSON.stringify(result,undefined,2)}`);
    },(err)=>{
      console.log('Error', err);
    });
    //db.close();


});
