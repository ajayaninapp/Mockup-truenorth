import { Card, Box, Typography, TextField, Button } from "@mui/material";
import { Container } from "@mui/material";
import { padding } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SigninCard = () => {
  const navigate = useNavigate();
  const signinHandler = () =>{
      if(!email || !password){
        toast.warn("Please enter the details")
      }
      else{
        navigate("/")
      }
  }
  const handleClick =()=>{
    navigate("/forgot-password")
  }
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Box
      sx={{
        height: { sm: "90vh", xs: "90vh", md: "90vh", lg: "70vh" },
        width: { sm: "100vw", xs: "100vw", md: "100vw", lg: "35vw" },
      }}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "85%",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            Portal Login
          </Typography>
          <Box sx={{ width: "75%", flexDirection: "column" }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email"
              sx={{ marginTop: "40px", marginBottom: "10px" }}
              fullWidth
              onChange={(event)=>{setEmail(event.target.value)}}
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              sx={{ marginY: "10px" }}
              fullWidth
              onChange={(event)=>{setPassword(event.target.value)}}
            />
     
              <Button
                variant="contained"
                sx={{ height: "40px", background: "#FB6501", marginY: "10px" }}
                fullWidth
                onClick={()=>signinHandler()}
              >
                Sign in
              </Button>
              <ToastContainer />
              
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                paddingTop: "10px",
              }}
              onClick={()=>handleClick()}
            >
              <Link onClick={()=>handleClick()}>Forgot password?</Link>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SigninCard;
