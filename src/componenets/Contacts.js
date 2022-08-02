import React from "react";
import { Box, Typography } from "@mui/material";
import "./contact.css";

function Contacts(props) {
  const { name, lastmessage, profilePic, time } = props;
  return (
    <Box className="contact1">
      <Box>
        <img src={profilePic} width="100px" height="100px" />
      </Box>
      <Box>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{lastmessage}</Typography>
      </Box>
      <Typography variant="subtitle2">{time}</Typography>
      <Box></Box>
    </Box>
  );
}

export default Contacts;
