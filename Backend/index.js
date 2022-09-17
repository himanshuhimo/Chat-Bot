var express = require("express");
var app = express();
var cors = require("cors");
const { request } = require("express");

var { createUserEntry, getDataFromDB } = require("./database");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const users = [
  {
    name: "Gulfam Ansari",
    userId: "1",
    lastmessage: "Hi",
    status: "",
    profilePic: "https://droidtechknow.com/about/admin.png",
    time: "11:00 PM",
  },
  {
    name: "Kardam",
    userId: "2",
    lastmessage: "Heeloo",
    status: "",
    profilePic:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    time: "1:00 AM",
  },
  {
    name: "Hutiya",
    userId: "3",
    lastmessage: "Love you baby",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgauKZyRrJ6L7sggCeylxXxB2EeaxODcEBg&usqp=CAU",
    status: "",
    time: "11:00 AM",
  },
  {
    name: "Sunny",
    userId: "4",
    lastmessage: "Kha h??",
    status: "",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU",
    time: "8:00 PM",
  },
];

const selectedUserData = [
  {
    userId: 1,
    profilePic: "https://droidtechknow.com/about/admin.png",

    data: [
      {
        messages: "hi gulz ",
        time: "8:00 pm",
        sender: true,
      },
      {
        messages:
          "hello    onknnklnlknlknknknknklnnksdhnoivshogiy guh ohigo oigj oigoijg itiojsiou oisgj otog otih ",
        time: "8:00 pm",
        sender: false,
      },
      {
        messages: "kya hal",
        time: "8:00 pm",
        sender: true,
      },
    ],
    name: "Gulfam gullu",
  },
  {
    userId: 2,
    profilePic:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",

    data: [
      {
        messages: "hi kardam",
        time: "8:00 pm",
        sender: true,
      },
      {
        messages: "hello",
        time: "8:00 pm",
        sender: false,
      },
      {
        messages: "kya hal",
        time: "8:00 pm",
        sender: true,
      },
    ],
    name: "Kardam",
  },
  {
    userId: 3,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgauKZyRrJ6L7sggCeylxXxB2EeaxODcEBg&usqp=CAU",

    data: [
      {
        messages: "hi nanu",
        time: "8:00 pm",
        sender: true,
      },
      {
        messages: "hello",
        time: "8:00 pm",
        sender: false,
      },
      {
        messages: "kya hal",
        time: "8:00 pm",
        sender: true,
      },
    ],
    name: "Hutiya",
  },
  {
    userId: 4,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU",

    data: [
      {
        messages: "hi sunny",
        time: "8:00 pm",
        sender: true,
      },
      {
        messages: "hello",
        time: "8:00 pm",
        sender: false,
      },
      {
        messages: "kya hal",
        time: "8:00 pm",
        sender: true,
      },
    ],
    name: "Sunny",
  },
];

app.get("/allchats", function (req, res) {
  res.send(JSON.stringify(users));
  res.end();
});

app.get("/getUserData", function (req, res) {
  var userid = req.query.userid;
  res.send(JSON.stringify(selectedUserData[userid - 1]));
  res.end();
});

app.post("/addusers", function (req, res) {
  createUserEntry(req.body).then((abc) => {
    res.send(JSON.stringify(abc));
  });
});

app.get("/fetchUser", function (req, res) {
  var userid = req.query.userId;
  getDataFromDB(userid).then(
    (abc) => {
      res.send(JSON.stringify(abc));
    },
    (err) => {
      res.send(
        JSON.stringify({ error: true, message: "Something went wrong" })
      );
    }
  );
});

app.get("/allRecentContactChats", function (req, res) {
  let data = [];
  for (let id of ids.req.ids) {
    getDataFromDB(userid).then((abc) => {
      data.push(abc);
    });
  }
  res.send(JSON.stringify(data));
});

// 1. Add search functionality to add the connections
// 2. Onclick of add new connection button, call an API to add the connection
// 3. Make add connection API
// 4. Create left sidebar data using the connection Ids. [9868471128, 87733001988, 7894028261]
// 5. Create an API that provide the left sidebar data using the connection ids

var server = app.listen(8080, function () {
  console.log(
    "Example app listening at http://localhost:8080",
    "http://localhost",
    8080
  );
});
