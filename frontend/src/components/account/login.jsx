import { Box, TextField, Button, styled, Typography } from "@mui/material";
import logoPic from "../../images/logo.png";
import { useState } from "react";

const Component = styled(Box)`
  width: 500px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
`;

const Image = styled("img")({
  width: 150,
  margin: "auto",
  display: "flex",
  padding: "20px 0",
});

const Buttons = styled(Box)`
  padding: 20px 25px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 17px;
`;

const LoginButton = styled(Button)`
  height: 45px;
  background: #fb641b;
  color: #fff;
  border-radius: 15px;
`;

const SignupButton = styled(Button)`
  height: 45px;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`;

const Login = () => {
  const [account, toggleAccount] = useState("login");

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  return (
    <Component>
      <Image src={logoPic} alt="Logo" />
      {account === "login" ? (
        <Buttons>
          <TextField variant="filled" label="Enter Username" />
          <TextField variant="filled" label="Enter Password" />
          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <SignupButton variant="outlined" onClick={() => toggleSignup()}>
            Create a new account
          </SignupButton>
        </Buttons>
      ) : (
        <Buttons>
          <TextField variant="filled" label="Enter Name" />
          <TextField variant="filled" label="Enter Username" />
          <TextField variant="filled" label="Enter Password" />
          <SignupButton variant="outlined">Signup</SignupButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <LoginButton variant="contained" onClick={() => toggleSignup()}>
            Already have an account
          </LoginButton>
        </Buttons>
      )}
    </Component>
  );
};

export default Login;
