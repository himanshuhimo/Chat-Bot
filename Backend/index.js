var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())

const users = [
    {
        name: "Gulfam Ansari",
        userId: '1',
        lastmessage: "Hi",
        status: "",
        profilePic: "https://droidtechknow.com/about/admin.png",
        time: "11:00pm",
    },
    {
        name: "Kardam",
        userId: '2',
        lastmessage: "Heeloo",
        status: "",
        profilePic: "https://droidtechknow.com/about/admin.png",
        time: "1:00",
    },
    {
        name: "Rabina",
        userId: '3',
        lastmessage: "Love you baby",
        status: "",
        profilePic: "https://droidtechknow.com/about/admin.png",
        time: "11:00",
    },
    {
        name: "Sunny",
        userId: '4',
        lastmessage: "Kha h??",
        status: "",
        profilePic: "https://droidtechknow.com/about/admin.png",
        time: "8:00",
    },
];

const selectedUserData = {
    "1": [
        {
            messages: "hi",
            time: "8:00 pm",
            sender: true
        },
        {
            messages: "hello",
            time: "8:00 pm",
            sender: false
        },
        {
            messages: "kya hal",
            time: "8:00 pm",
            sender: true
        }
    ],
    "2": [
        {
            messages: "hi user 2",
            time: "8:00 pm",
            sender: true
        },
        {
            messages: "hello yser2",
            time: "8:00 pm",
            sender: false
        },
        {
            messages: "kya hal yes user 2",
            time: "8:00 pm",
            sender: true
        }
    ]
}


app.get('/allchats', function (req, res) {
    res.send(JSON.stringify(users));
    res.end();
});

app.get('/getUserData', function (req, res) {
    res.send(JSON.stringify(users));
    res.end();
});


var server = app.listen(8080, function () {
    console.log("Example app listening at http://localhost:8080", "http://localhost", 8080)
})