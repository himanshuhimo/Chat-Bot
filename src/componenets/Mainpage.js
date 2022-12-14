import React from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ContactMessages from "./ContactMessages";
import Contacts from "./Contacts";
import Profileheader from "./Profileheader";
import Messageinput from "./Messageinput";
import Profileheaderforuser from "./Profileheaderforuser";
import Inputbox from "./Inputbox";

function Mainpage() {
  const [selectedUser, setselectedUser] = useState(null);

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
    <div>
      <Box className="mainContainer">
        <Box>
          <Box style={{ display: "flex" }}>
            <Box className="leftSideBar">
              <Profileheader />
              <Inputbox />
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
              {clickHanlder ? (
                <Profileheaderforuser
                  clickHanlder={clickHanlder}
                  username={selectedUser?.name}
                  userprofilepic={selectedUser?.profilePic}
                />
              ) : (
                <Typography color={"white"}>nothing</Typography>
              )}

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

export default Mainpage;
