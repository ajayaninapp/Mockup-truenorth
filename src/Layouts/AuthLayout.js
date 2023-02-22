import React from "react";
import { Box, Card } from "@mui/material";
import Header from "../Components/Header";
import SigninCard from "../Components/SigninCard";

const AuthLayout = () => {
  return (
 <>
        <Header />
        <Box
          sx={{
            
            height: "90vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          
          <SigninCard />
        </Box>
    </>
  );
};

export default AuthLayout;
