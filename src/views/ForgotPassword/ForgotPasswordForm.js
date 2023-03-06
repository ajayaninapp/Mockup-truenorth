import React from "react";
import { Card, Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const ForgotPasswordForm = () => {
  const [verificationCode, setVerificationCode] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const navigate = useNavigate();

  const continueHandler=() => {
    if(!verificationCode || !newPassword || !confirmPassword ){
      toast.warn("Please enter the details")
    }
    else{
      toast.success("Password successfully reset")
      setTimeout(()=>{
        navigate("/Mockup-truenorth/")
      }, 800)
    }
  }
  return (
    <Box
      sx={{
        height: { sm: "90vh", xs: "90vh", md: "90vh", lg: "70vh" },
        width: { xs: "100vw", sm: "100vw", md: "60vw", lg: "30vw", xl: "30vw" },
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
            paddingTop: "50px",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            Reset Password
          </Typography>
          <Box sx={{ width: "75%", flexDirection: "column" }}>
            <TextField
              label="Verification Code"
              type="string"
              placeholder="Verification Code"
              sx={{ marginTop: "50px" }}
              fullWidth
              onChange={(event)=>setVerificationCode(event.target.value)}
            />
            <TextField
              label="New Password"
              type="password"
              placeholder="New Password"
              sx={{ marginTop: "20px" }}
              fullWidth
              onChange={(event)=>setNewPassword(event.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              sx={{ marginY: "20px" }}
              fullWidth
              onChange={(event)=>setConfirmPassword(event.target.value)}
            />
            <Button
              variant="contained"
              sx={{ height: "40px", background: "#FB6501", marginTop: "20px" }}
              fullWidth
              onClick={()=>continueHandler()}
            >
              Continue
            </Button>
            <ToastContainer />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ForgotPasswordForm;
