// const MongoClient = require('mongodb').MongoClient; or
const {MongoClient, ObjectID} = require('mongodb'); // get value of MongoClient key from require('Mongodb') object

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('589715aa27d7acc1ee8fe2ee')
    },{
      $set:{
        completed:true
      }
    },{
      returnOriginal:false
    }).then((result) =>{
      console.log(result); 
    });
    //db.close();

});
