import React from "react";
import "./profileHeader.css";

function profileHeader() {
  return (
    <div className="profileheader">
      abc
      <button>
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/136324428_1317838712031674_1410165795589124220_n.jpg?ccb=11-4&oh=01_AVwQKJubGVcF9bYFuKzRhf2AEhGdozluSXnb4GUn8wMrhg&oe=62F785E9"
          className="profileimage"
        />
      </button>
      <button className="newchat">
        <i class="fa-solid fa-comment-lines"></i>
      </button>
      <button className="menu">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </div>
  );
}

export default profileHeader;
