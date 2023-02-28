import React from "react";
import { Card, Box, Typography, TextField, Button } from "@mui/material";
const ForgotPasswordForm = () => {
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
            />
            <TextField
              label="New Password"
              type="password"
              placeholder="New Password"
              sx={{ marginTop: "20px" }}
              fullWidth
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              sx={{ marginY: "20px" }}
              fullWidth
            />
            <Button
              variant="contained"
              sx={{ height: "40px", background: "#FB6501", marginTop: "20px" }}
              fullWidth
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ForgotPasswordForm;
