import React from "react";
import "./Messageinput.css";
function Messageinput() {
  return (
    <div>
      <input className="inputfield"></input>
      <span>
        <button type="submit" className="sendbutton">
          {/* <i class="fa-solid fa-paper-plane-top"></i> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-paper-plane-top" /> */}
          send
        </button>
      </span>
    </div>
  );
}

export default Messageinput;
