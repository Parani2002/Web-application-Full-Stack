import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfimationRef = useRef();

  const {setUser,setToken} = useStateContext()

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payLoad = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation: passwordConfimationRef.current.value
    }
    axiosClient.post('/signup', payLoad)
    .then(({data}) => {
        setUser(data.user)
        setToken(data.token)
    })
    .catch(err => {
      const response = err.response;
      if(response && response.status === 422){
        console.log(response.data.errors)...
      }
    })
  }


  return (
    <div className="login-signup-form animated fadeInDown">
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
