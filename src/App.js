import { Box, Container } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ContactMessages from "./componenets/ContactMessages";
import Contacts from "./componenets/Contacts";

function App() {
  const [data, setData] = useState([
    {
      name: "Gulfam",
      lastmessage: "Hi",
      status: "",
      profilePic: "https://droidtechknow.com/about/admin.png",
      time: "11:00pm",
    },
    {
      name: "Kardam",
      lastmessage: "Heeloo",
      status: "",
      profilePic: "https://droidtechknow.com/about/admin.png",
      time: "1:00",
    },
    {
      name: "Rabina",
      lastmessage: "Love you baby",
      status: "",
      profilePic: "https://droidtechknow.com/about/admin.png",
      time: "11:00",
    },
    {
      name: "Sunny",
      lastmessage: "Kha h??",
      status: "",
      profilePic: "https://droidtechknow.com/about/admin.png",
      time: "8:00",
    },
  ]);
  return (
    <div className="App">
      <Box className="mainContainer">
        <Box>
          <Box>Header</Box>
          <Box>
            <Box className="leftSideBar">
              <Contacts />
              {data.map((d) => {
                console.log(d);
                return (
                  <Contacts
                    key={d.name}
                    name={d.name}
                    lastmessage={d.lastmessage}
                    profilePic={d.profilePic}
                    time={d.time}
                  />
                );
              })}
            </Box>
            <Box className="rightSideBar">
              <ContactMessages />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
