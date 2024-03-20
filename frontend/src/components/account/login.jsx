import { Box, TextField, Button, styled, Typography } from "@mui/material";
import logoPic from "../../images/logo.png";
import { useState } from "react";
import {API} from '../../service/api';
import { set } from "mongoose";
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

const Error = styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:0;
  margin-top:10px;
  font-weight:600;

`

const Text = styled(Typography)`
  color: #878787;
  font-size: 17px;
`;
const signupInitialValues = {
  name: '',
  username: '',
  password: ''
}
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
  const [signup,setSignup] = useState(signupInitialValues);
  const [error,setError]=useState('');
  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };
  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name]:e.target.value});
  }
  const signupUser = async () =>{
    let response = await API.userSignup(signup);
    if(response.isSuccess){
      setError('');
      setSignup(signupInitialValues);
      toggleAccount('login'); 
    }
    else{
      setError('Something went wrong');
    }
  }
  return (
    <Component>
      <Image src={logoPic} alt="Logo" />
      {account === "login" ? (
        <Buttons>
          <TextField variant="filled" label="Enter Username" />
          <TextField variant="filled" label="Enter Password" />
          {error && <Error>{error}</Error>}
          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <SignupButton variant="outlined" onClick={() => toggleSignup()}>
            Create a new account
          </SignupButton>
        </Buttons>
      ) : (
        <Buttons>
          <TextField variant="filled" onChange={(e)=> onInputChange(e)} name="name" label="Enter Name" />
          <TextField variant="filled" onChange={(e)=> onInputChange(e)} name="username" label="Enter Username" />
          <TextField variant="filled" onChange={(e)=> onInputChange(e)} name="password" label="Enter Password" />
          {error && <Error>{error}</Error>}
          <SignupButton onClick = {()=>signupUser()}variant="outlined">Signup</SignupButton>
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
