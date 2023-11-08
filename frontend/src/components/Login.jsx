import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data == "Success") {
          navigate("/home");
        }
      })
      .catch((error) => console.log("Somthing Error On Login", error));
  };

  return (
    <>
      <div className="box">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="e">
              <strong>Email Id: </strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="e"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="password">
            <label htmlFor="p">
              <strong>Password: </strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              id="p"
              required
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <input className="btnLog" type="submit" value="Login" />
        </form>
        <Link to="/register"><p>Create a New Account..</p></Link>
      </div>
    </>
  );
};

export default login;
