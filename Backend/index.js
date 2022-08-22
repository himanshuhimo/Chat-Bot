var express = require("express");
var app = express();
var cors = require("cors");
const { request } = require("express");

var { createUserEntry } = require("./database");

// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());

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

// app.post("/addusers", function (req, res) {
//   console.log(req.body);
//   res.send(req.body);
// });

var server = app.listen(8080, function () {
  console.log(
    "Example app listening at http://localhost:8080",
    "http://localhost",
    8080
  );
});
