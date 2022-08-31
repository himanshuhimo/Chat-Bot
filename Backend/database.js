var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://himanshuhimo:himanshu@cluster0.7ub6dfv.mongodb.net/?retryWrites=true&w=majority";

const createUserEntry = (data) => {
  return new Promise((resolve, rej) => {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log(err);
        rej(err);
      }
      var dbo = db.db("chatbot");
      dbo.collection("users").insertOne(data, (err, res) => {
        if (err) {
          console.log(err);
          rej(err);
        }
        console.log(data, "added");
        db.close();
        resolve({ status: "success " });
      });
      dbo
        .collection("users")
        .find({ data })
        .toArray((err, res) => {
          if (err) {
            console.log(err);
            rej(err);
          }
          console.log(res, "found");
          db.close();
          resolve({ status: "yup " });
        });
    });
  });
};

const getDataFromDB = (userId) => {
  return new Promise((resolve, rej) => {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log(err);
        rej(err);
      }
      var dbo = db.db("chatbot");
      var query = { userId };
      dbo.collection("users").find(query).toArray((err, result) => {
        if (err) rej(err);
        db.close();
        resolve(result);
      });
    });
  });
};

module.exports = { createUserEntry, getDataFromDB };
