// const MongoClient = require('mongodb').MongoClient; or
const {MongoClient, ObjectID} = require('mongodb'); // get value of MongoClient key from require('Mongodb') object

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany().then((result)=>{
    //   console.log(result);
    // },(err)=>{
    //   console.log('Error',err);
    // });

    //delete One - deletes the first matched document
    // db.collection('Todos').deleteOne({
    //   text: 'Drink tea'
    // }).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log('Error',err);
    // });

    //findOneAndDelete - find the first matched document and show the deleted document
    db.collection('Todos').findOneAndDelete({
      completed: true
    }).then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log('Error',err);
    });

    //db.close();


});
