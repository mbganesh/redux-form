import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { changeForm } from "../features/FormSelector";
import { useSelector, useDispatch } from "react-redux";
import {signinhit} from "../features/SigninReducer";

export default function SignInForm() {
  const [SignInData, setSignInData] = useState({
    emailid: "",
    password: "",
  });

  const dispatch = useDispatch();

  const myData = useSelector((state) => state.signin.data);

  var isSignUp = useSelector((state) => state.formselector.value.isSignUp);
  const HandleSwitch = () => {
    dispatch(changeForm({ isSignUp: !isSignUp }));
  };

  const handleEmail = (char) => {
    setSignInData({ ...SignInData, emailid: char });
    dispatch(signinhit(SignInData))
    console.log(SignInData);
  };

  const handlePassword = (char) => {
    setSignInData({ ...SignInData, password: char });
    dispatch(signinhit(SignInData))
  };

  const handleBtn = () => {
    if(SignInData.emailid === ''){
      alert('Enter Email ID')
    }else if(SignInData.password === ''){
      alert('Enter Password')
    }else{
      console.log(SignInData);

      dispatch(signinhit(SignInData))
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Sign In</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "30%",
          padding: "10px",
        }}
      >
        <TextField
          placeholder="EmailID"
          value={SignInData.emailid}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <br />
        <TextField
          placeholder="Password"
          value={SignInData.password}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={()=>handleBtn()}> SignIn </Button>
          <Button onClick={() => HandleSwitch()}> Create Account </Button>
        </div>
      </div>
    </div>
  );
}
