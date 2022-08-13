import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import ContactMessages from "./componenets/ContactMessages";
import Contacts from "./componenets/Contacts";
import Profileheader from "./componenets/Profileheader";
import Messageinput from "./Messageinput";
import Profileheaderforuser from "./Profileheaderforuser";

function App() {
  const [selectedUser, setselectedUser] = useState(null);
  // const [data, setData] = useState([
  //   {
  //     name: "Gulfam Ansari",
  //     userId: '1',
  //     lastmessage: "Hi",
  //     status: "",
  //     profilePic: "https://droidtechknow.com/about/admin.png",
  //     time: "11:00pm",
  //   },
  //   {
  //     name: "Kardam",
  //     userId: '2',
  //     lastmessage: "Heeloo",
  //     status: "",
  //     profilePic: "https://droidtechknow.com/about/admin.png",
  //     time: "1:00",
  //   },
  //   {
  //     name: "Rabina",
  //     userId: '3',
  //     lastmessage: "Love you baby",
  //     status: "",
  //     profilePic: "https://droidtechknow.com/about/admin.png",
  //     time: "11:00",
  //   },
  //   {
  //     name: "Sunny",
  //     userId: '4',
  //     lastmessage: "Kha h??",
  //     status: "",
  //     profilePic: "https://droidtechknow.com/about/admin.png",
  //     time: "8:00",
  //   },
  // ]);

  const [data, setData] = useState([]);
  useEffect(() => {
    const respose = fetch("http://localhost:8080/allchats", {
      method: "GET",
    }).then((d) => {
      return d.json();
    });
    respose.then((res) => {
      setData(res);
    });
  }, []);

  // const [selectedUserData, setselectedUserData] = useState([
  //   {
  //     messages: "hi",
  //     time: "8:00 pm",
  //     sender: true,
  //   },
  //   {
  //     messages: "hello",
  //     time: "8:00 pm",
  //     sender: false,
  //   },
  //   {
  //     messages: "kya hal",
  //     time: "8:00 pm",
  //     sender: true,
  //   },
  //   {
  //     messages: "badiya",
  //     time: "8:00 pm",
  //     sender: false,
  //   },
  //   {
  //     messages: "ok",
  //     time: "8:00 pm",
  //     sender: true,
  //   },
  //   {
  //     messages: "got it",
  //     time: "8:00 pm",
  //     sender: true,
  //   },
  // ]);

  const clickHanlder = (userId) => {
    const respose = fetch(
      `http://localhost:8080/getUserData?userid=${userId}`,
      {
        method: "GET",
      }
    ).then((d) => {
      return d.json();
    });
    respose.then((res) => {
      setselectedUser(res);
    });
    console.log(userId);
  };

  return (
    <div className="App">
      <Box className="mainContainer">
        <Box>
          <Box style={{ display: "flex" }}>
            <Box className="leftSideBar">
              <Profileheader />
              {data.length == 0 && (
                <Typography color={"white"}>Loading....</Typography>
              )}
              {data.map((d) => {
                return (
                  <Contacts
                    clickHanlder={clickHanlder}
                    key={d.name}
                    name={d.name}
                    lastmessage={d.lastmessage}
                    profilePic={d.profilePic}
                    time={d.time}
                    userId={d.userId}
                  />
                );
              })}
            </Box>
            <Box className="rightSideBar">
              <Profileheaderforuser
                clickHanlder={clickHanlder}
                username={selectedUser?.name}
                userprofilepic={selectedUser?.profilePic}
              />

              {selectedUser?.data.map((d) => {
                return (
                  <ContactMessages
                    message={d.messages}
                    sender={d.sender}
                    time={d.time}
                  />
                );
              })}

              <Messageinput />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
