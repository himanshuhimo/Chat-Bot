import React from "react";
import { Box, Typography } from "@mui/material";
import "./contact.css";
import Profileheader from "./Profileheader";
import { border, borderRadius } from "@mui/system";

function Contacts(props) {
  const { name, status, lastmessage, profilePic, time } = props;
  return (
    <>
      <Box className="contact1">
        <Box style={{ width: "100px" }}>
          <img src={profilePic} className="image" />
        </Box>
        <Box className="content" style={{ width: "80%" }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">
            {status}
            {lastmessage}
          </Typography>
        </Box>
        <Box style={{ width: "100px" }} className="time">
          <Typography variant="subtitle2">{time}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Contacts;
