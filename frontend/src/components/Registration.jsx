import React, { useState } from "react";
import "../stylesheet/style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Registration = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {console.log(result)
      navigate('/login')
      })
      .catch((error) => console.log("Somthing Error On Submit", error));
  };

  return (
    <>
      <div className="box">
        <h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="n">
              <strong>Name: </strong>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name Here"
              id="n"
              required
              onChange={(e) => setname(e.target.value)}
            />
          </div>

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
          <input className="btn" type="submit" value="Submit" />
        </form>
        <p>Have allready an account</p>
        <Link to="/login">
          <input className="btnLog" type="submit" value="Login" />
        </Link>
      </div>
    </>
  );
};

export default Registration;
