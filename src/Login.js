import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login(props) {
  let navigate = useNavigate();
  const [item, setItem] = useState({
    phoneno: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setItem({ ...item, [id]: value });
  };

  useEffect(() => {
    console.log(item);
  });

  const submitForm = () => {
    navigate("home");
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
          <button type="submit" onClick={submitForm} className="submitlogin">
            Submit
          </button>
        </Box>
      </form>
    </div>
  );
}

export default Login;
