import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
// import axios, { Axios } from "axios";
import Axios from "axios";
import "./createaccount.css";

function Createaccount(props) {
  const url = "http://localhost:8080/addusers";
  const [data, setData] = useState({
    name: "",
    phoneno: "",
    profilepic: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    // const { id, value } = e.target;
    // setData({ ...data, [id]: value });

    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  function submitForm(e) {
    e.preventDefault();
    if (data.password === data.confirmpassword) {
      sendDetailsToDb();
      alert("user added");
      // props.closeDiv("");
    } else {
      alert("Password not matched");
    }
  }

  const sendDetailsToDb = () => {
    Axios.post(url, {
      name: data.name,
      phoneno: data.phoneno,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className="formbox1">
        <button className="closebtn1" onClick={props.closeDiv}>
          X
        </button>
        <form className="formdata1">
          <label className="labels1">Name</label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            className="inputs1"
          />
          <label className="labels1">Phone No.</label>
          <input
            id="phoneno"
            value={data.phoneno}
            type="text"
            className="inputs1"
            onChange={handleChange}
          />
          <label className="labels1">Profile Pic</label>
          {/* <input
            type="button"
            id="profilepic"
            value={data.profilepic}
            className="inputs"
          >
            Upload
          </input> */}
          <button className="profilepicbutton">Upload</button>
          <label className="labels1">Password</label>
          <input
            type="text"
            id="password"
            value={data.password}
            onChange={handleChange}
            className="inputs1"
          />
          <label className="labels1">Repeat Password</label>
          <input
            type="text"
            id="confirmpassword"
            value={data.confirmpassword}
            onChange={handleChange}
            className="inputs1"
          />
          <button
            type="submit"
            onClick={(e) => submitForm(e)}
            className="submitlogin1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Createaccount;
