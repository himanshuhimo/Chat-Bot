import React from "react";
import "./Messageinput.css";
function Messageinput() {
  const sendMessageToServer = () => {};

  return (
    <div>
      <input className="inputfield"></input>
      {/* <span> */}
      <button
        type="submit"
        className="sendbutton"
        onClick={sendMessageToServer()}
      >
        {/* <FontAwesomeIcon icon="fa-solid fa-paper-plane-top" /> */}
        <i className="fa-solid fa-paper-plane-top" /> send
        <i className="fa-light fa-arrow-right-to-arc"></i>
      </button>
      {/* </span> */}
    </div>
  );
}

export default Messageinput;
