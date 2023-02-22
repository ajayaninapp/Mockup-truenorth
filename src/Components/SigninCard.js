import { Card, Box, Typography, TextField, Button } from "@mui/material";
import { Container } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";

const SigninCard = () => {
  return (
    <Box sx={{ height: "65vh", width: "450px" }}>
      <Card
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box  sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingTop:"50px"}}>
          <Typography sx={{fontSize:"30px",fontWeight:"600"}}>Portal Login</Typography>
          <Box sx={{width:"75%",flexDirection:"column"}}>
          <TextField label="Email"type="email"placeholder="Email"  sx={{marginTop:"60px"}} fullWidth/>
          <TextField label="Password"type="password"placeholder="Password"  sx={{marginY:"20px"}} fullWidth/>
          <Button variant="contained"  sx={{height:"40px",background:"#FB6501"}} fullWidth>Sign in</Button>
          <Box sx={{display:"flex",flexDirection:"row-reverse" ,paddingTop:"10px"}}><a href="#">Forgot password?</a></Box>
         
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SigninCard;
