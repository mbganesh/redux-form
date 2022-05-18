import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { changeForm } from "../features/FormSelector";
import { useSelector, useDispatch } from "react-redux";
import { signuphit } from "../features/SignupReducer";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const myData = useSelector((state) => state.signup.data);

  var isSignUp = useSelector((state) => state.formselector.value.isSignUp);

  const HandleSwitch = () => {
    dispatch(changeForm({ isSignUp: !isSignUp }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Sign Up</h1>
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
          placeholder="Name"
          value={myData.name}
          onChange={(e) => dispatch(signuphit({...myData , name:e.target.value}))}
        />
        <br />
        <TextField placeholder="Phone No"
        value={myData.phoneno}
        onChange={(e) => dispatch(signuphit({...myData , phoneno:e.target.value}))} />
        <br />
        <TextField placeholder="Email ID"
          value={myData.emailid}
          onChange={(e) => dispatch(signuphit({...myData , emailid:e.target.value}))} />
        <br />
        <TextField placeholder="Password"
          value={myData.password}
          onChange={(e) => dispatch(signuphit({...myData , password:e.target.value}))} />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained"> SignUp </Button>
          <Button onClick={() => HandleSwitch()}>
            {" "}
            Already Have an Account?{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
