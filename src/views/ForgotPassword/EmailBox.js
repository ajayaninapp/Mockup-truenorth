import { Box, Card, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FormTextField, ThemedButton } from "../../common/StyledComponents";


const EmailBox = () => {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ paddingBottom: "30px" }}>
            Forgot Password?
          </Typography>
          <Divider />

          <Box
            sx={{
              width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "70vw" },
              height: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
            elevation={3}
              sx={{
               
                width: "80%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection:"column",
                
              }}
            >
              <Typography variant="h6" sx={{ paddingBottom: "30px",color:"grey"}}> 
                Enter your registered email address
              </Typography>
             <Box width="80%">
             <FormTextField fullWidth />
             <Link to="/forgot-password/reset"><ThemedButton variant="contained" sx={{width:"50%"}}>Continue</ThemedButton></Link>
             </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EmailBox;
