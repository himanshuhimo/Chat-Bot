var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://himanshuhimo:himanshu@cluster0.7ub6dfv.mongodb.net/?retryWrites=true&w=majority";

const Getuserentry = (data) => {
  return new Promise((resolve, rej) => {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log(err);
        rej(err);
      }
      var dbo = db.db("chatbot");
      dbo
        .collection("users")
        .find({ data })
        .toArray((err, res) => {
          if (err) {
            console.log(err);
            rej(err);
          }
          console.log(data, "found");
          db.close();
          resolve({ status: "yup " });
        });
    });
  });
};

module.exports = { Getuserentry };

// Find all documents in the customers collection:

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
