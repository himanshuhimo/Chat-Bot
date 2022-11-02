import React, { useState } from "react";
import "./Profileheader.css";
import Inputbox from "./Inputbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profileheader() {
  const [box, setBox] = useState("");

  const openDiv = () => {
    setBox("ON");
  };
  return (
    <div className="profileheader">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4kCQHfyy3BpUHyfBOIKQa1_nu6VtmblGMw&usqp=CAU"
        className="profileimage"
      />

      <div className="menu_btn">
        <i class="fa-solid fa-comment newchat"></i>
        <i className="fa-solid fa-ellipsis-vertical menu"></i>
        {/* <button onClick={openDiv} className="inputbutton">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button> */}

        {box === "ON" ? <Inputbox /> : null}
      </div>
    </div>
  );
}

export default Profileheader;
