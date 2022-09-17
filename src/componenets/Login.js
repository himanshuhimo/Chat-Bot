import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Login(props) {
  const url2 = "http://localhost:8080/fetchUser";


  let navigate = useNavigate();
  const [item, setItem] = useState({
    phoneno: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setItem({ ...item, [id]: value });
  };


  const submitForm = () => {
    Axios.get(url2 + "?userId=" + item.phoneno).then((res) => {
      if (res.data.length === 0) {
        alert("User does not exist");
        return;
      } 
      const { userId = "", password = "" } = res?.data[0];
      if (password !== item.password) {
        alert("Username or password is incorrect");
      } else {
        navigate("home");
      }
    }, (err) => {
    })
  };

  return (
    <div>
      <form className="formdata">
        <button className="closebtn" onClick={props.closeDiv}>
          X
        </button>
        <Box className="formcontent">
          <label className="labels">Phone No.</label>
          <input
            type="text"
            id="phoneno"
            value={item.phoneno}
            onChange={handleChange}
            className="inputs"
          />
          <label className="labels">Password</label>
          <input
            type="text"
            id="password"
            value={item.password}
            onChange={handleChange}
            className="inputs"
          />
          <button type="button" onClick={submitForm} className="submitlogin">
            Submit
          </button>
        </Box>
      </form>
    </div>
  );
}

export default Login;
