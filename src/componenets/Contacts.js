import React from "react";
import { Box, Typography } from "@mui/material";
import "./contact.css";

function Contacts(props) {
  const { name, status, lastmessage, profilePic, time, userId, clickHanlder } = props;
  return (
    <>
      <Box className="contact1" onClick={() => clickHanlder(userId)}>
        <Box style={{ width: "100px" }}>
          <img src={profilePic} className="image" />
        </Box>
        <Box className="content" style={{ width: "80%" }}>
          <Typography color="white" variant="h6">{name}</Typography>
          <Typography color="white" variant="subtitle1">
            {status}
            {lastmessage}
          </Typography>
        </Box>
        <Box style={{ width: "100px" }} className="time">
          <Typography color="white" variant="subtitle2">{time}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Contacts;
