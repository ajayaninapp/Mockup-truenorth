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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AddUser = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
                User Details
              </Typography>
              <Divider />
              <Grid container spacing={3} sx={{ margin: "5px", width: "100%" }}>
                <Grid item lg={5} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="First Name" size="small" />
                </Grid>
                <Grid item lg={5} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Last Name" size="small" />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormTextField
                    fullWidth
                    label="Address Line 1"
                    size="small"
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormTextField
                    fullWidth
                    label="Address Line 2"
                    size="small"
                  />
                </Grid>
                <Grid item lg={4} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Zip-code" size="small" />
                </Grid>
                <Grid item lg={6} md={10} sm={10} xs={10}>
                <FormTextField fullWidth label="Phone Number" size="small" />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Email" size="small" />
                </Grid>
                
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Customer"
                      onChange={handleChange}
                    >
                      <MenuItem value="TrueNorth">TrueNorth</MenuItem>
                     
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  lg={12}
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

export default AddUser;
