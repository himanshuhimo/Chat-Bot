import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./contactmessages.css";

function ContactMessages({ message, time, sender }) {
  return (
    <Box className="meassages" style={sender ? { backgroundColor: 'rgb(50 51 50 / 73%)' }: { alignItems: 'end', backgroundColor: '#0b5e19' }}>
      <Typography color={"white"} variant="h6">{message}{time}</Typography>
    </Box>
  )
}

export default ContactMessages;
