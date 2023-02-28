import {
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { FormTextField, FormPhone } from "../../common/StyledComponents";
const CustomerForm = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "50vw" },
            minHeight: "80vh",
            marginTop: "40px",
          }}
        >
          <Card>
            <Box sx={{ marginY: "40px", marginX: "20px", width: "100%" }}>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "25px",
                  marginBottom: "10px",
                }}
              >
                Customer Details
              </Typography>
              <Divider />
              <Grid container spacing={3} sx={{ padding: "15px", width: "100%" }}>
                <Grid item lg={6} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="First Name" size="small" />
                </Grid>
                <Grid item lg={5} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Last Name" size="small" />
                </Grid>
                <Grid item lg={11} md={10} sm={10} xs={10}>
                  <FormTextField
                    fullWidth
                    label="Address Line 1"
                    size="small"
                  />
                </Grid>
                <Grid item lg={11} md={10} sm={10} xs={10}>
                  <FormTextField
                    fullWidth
                    label="Address Line 2"
                    size="small"
                  />
                </Grid>
                <Grid item lg={5} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Zip-code" size="small" />
                </Grid>
                <Grid item lg={6} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Phone Number" size="small" />
                </Grid>
                <Grid item lg={11} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Email" size="small" />
                </Grid>
                <Grid item lg={11} md={10} sm={10} xs={10}>
                  <FormTextField
                    fullWidth
                    label="Map-Box-License-Key"
                    size="small"
                  />
                </Grid>
                <Grid
                  item
                  lg={11}
                  md={10}
                  sm={10}
                  xs={10}
                  sx={{ marginTop: "20px" }}
                >
                  <Button
                    variant="contained"
                    sx={{ height: "40px", background: "#FB6501" }}
                  >
                    Create Customer
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default CustomerForm;
