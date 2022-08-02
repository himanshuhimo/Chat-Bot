import { Box, Container } from "@mui/material";
import "./App.css";
import ContactMessages from "./componenets/ContactMessages";
import Contacts from "./componenets/Contacts";

function App() {
  return (
    <div className="App">
      <Box className="mainContainer">
        <Box>
          <Box>Header</Box>
          <Box>
            <Box className="leftSideBar">
              <Contacts
                name="gulfam"
                lastmessage="chutiye"
                profilePic="abc.png"
                time="12:00"
              />
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
