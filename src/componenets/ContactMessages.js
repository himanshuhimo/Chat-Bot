import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./contactmessages.css";

function ContactMessages({ message, time, sender }) {
  const colors = { color: "black" };
  const hello = { Text: "black" };

  return (
    <Box
      className="meassages"
      style={
        sender
          ? {
              backgroundColor: "rgb(50 51 50 / 73%)",
              width: "40%",
              marginLeft: "2%",
              marginTop: "15px",
            }
          : {
              alignItems: "end",
              backgroundColor: "#0b5e19",
              width: "40%",
              marginLeft: "57%",
            }
      }
    >
      <Typography color={"white"} variant="h6">
        <>{message}</>
        <span className="time">{time}</span>
      </Typography>
    </Box>
  );
}

export default ContactMessages;
