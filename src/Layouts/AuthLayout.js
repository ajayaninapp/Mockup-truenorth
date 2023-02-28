import React from "react";
import { Box, Card } from "@mui/material";
import Header from "../Components/Header";
import SigninCard from "../Components/SigninCard";
import EmailBox from "../views/ForgotPassword/EmailBox";
import ForgotPasswordForm from "../views/ForgotPassword/ForgotPasswordForm";
import ResetPassword from "../views/ResetPassword/ResetPassword";

const AuthLayout = (props) => {
  const show=false;
  return (
 <>
        <Header show={show}/>
        <Box
          sx={{
            marginTop:"10vh",
            minHeight: "90vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            
          }}
          className="background"
        >
          
          {props.children}
        </Box>
    </>
  );
};

export default AuthLayout;
