import React from "react";
import "./Inputbox.css";

function Inputbox() {
  return (
    <div>
      <input className="inputbtn" placeholder="Search or start bew chat" />
      <button className="inputbutton">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default Inputbox;
