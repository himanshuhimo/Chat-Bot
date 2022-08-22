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
    });
  });
};

module.exports = { createUserEntry };
