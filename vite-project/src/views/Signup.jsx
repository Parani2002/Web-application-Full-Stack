import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const onSubmit = (ev) => ev.preventDefault();
  return (
    <div className="login-signup-form animated fadeInDown">sss
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Signup fo free</h1>
          <input type="text" placeholder="Fullname" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
