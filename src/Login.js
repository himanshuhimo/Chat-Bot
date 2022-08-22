import { Box } from "@mui/system";
import React, { useEffect, useState, useNavigate } from "react";
import "./login.css";

function Login(closeDiv) {
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
    

  };

  return (
    <div>
      <form className="formdata">
        <button className="closebtn" onClick={closeDiv}>
          X
        </button>
        <Box className="formcontent">
          <label className="labels">Phone No.</label>
          <input
            type="text"
            id="phoneno"
            onChange="handleChange"
            className="inputs"
          />
          <label className="labels">Password</label>
          <input
            type="text"
            id="password"
            onChange="handleChange"
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
