import React, { useState } from "react";
import "./signUp.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { SpinnerCircular } from "spinners-react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [email,setEmail] = useState ()
  const [password,setPassword] = useState ()
  const [loading, setLoading] = useState(false);
  const nav = useNavigate()

  const dataBase= [
    {
        email:"Chidera@gmail.com",
        password: "user1",
        isAdmin: true,
        isTutor: false,
    },
    {
        email:"Favor@gmail.com",
        password: "user2",
        isAdmin: false,
        isTutor: false,
    },
    {
        email:"Mercy@gmail.com",
        password: "user3",
        isAdmin: false,
        isTutor: true,
    },
    {
        email:"Francis@gmail.com",
        password: "user4",
        isAdmin: true,
        isTutor: false,
    },
    {
        email:"Henry@gmail.com",
        password: "user5",
        isAdmin: false,
        isTutor: false,
    },
    {
        email:"Maro@gmail.com",
        password: "user6",
        isAdmin: false,
        isTutor: true,
    },
  ];



function handleForm(a){
    a.preventDefault()
    nav('/home')
}

  return (
    <div className="signUp-body">
      <div className="field signUp-holder">
        <div className="field nameHolder"></div>
        <div className="field emailHolder">
          <div className="labelHolder">
            <label>Email Address</label>
          </div>
          <input type="email" placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        </div>
        <div className="field passwordHolder">
          <div className="labelHolder">
            <label>Password</label>
          </div>
          <div className="passwordWrapper">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Input Password"
              onChange={(e)=> setPassword(e.target.value)} 
              value={password}
            />
            <div className="eye">
              {showPass ? (
                <IoMdEye
                  className="eyeIcon"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <IoMdEyeOff
                  className="eyeIcon"
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="field createAcc" onClick={handleForm}>Create Account</div>
      </div>
    </div>
  );
};

export default SignIn;
