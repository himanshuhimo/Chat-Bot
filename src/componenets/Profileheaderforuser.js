import { Typography } from "@mui/material";
import React from "react";
import "./Profileheaderforuser.css";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profileheaderforuser(props) {
  const { userprofilepic, username, clickHanlder } = props;

  // {
  //   props.clickHanlder == null ? <h1>nothing</h1> : <h2>something</h2>;
  // }

  return (
    <div className="profileheaderofuser">
      <img src={userprofilepic} alt="userimage" className="profilepicofuser" />
      <Typography variant="h4">{username}</Typography>
      {/* <i cl}assName="fa-regular fa-magnifying-glass"></i>
      <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}
      <button className="menuright">
        <i className="fa-solid fa-ellipsis-vertical " />
      </button>
    </div>
  );
}

export default Profileheaderforuser;
