import {
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { FormTextField, FormPhone } from "../../common/StyledComponents";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const AddUser = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [firstAddress, setFirstAddress] = React.useState('');
  const [secondAddress, setSecondAddress] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [customer, setCustomer] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  const createUserHandler = () =>{
    if(!firstName || !lastName || !firstAddress || !secondAddress || !zipCode || !phoneNumber || !email || !customer ){
      toast.warn("Please enter the details")
    }
    else{
      toast.success("Customer added successfully")
      setTimeout(()=>{
        navigate("/")
      }, 800)
    }
  }
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
                  <FormTextField fullWidth label="First Name" size="small" onChange={(event)=>setFirstName(event.target.value)}/>
                </Grid>
                <Grid item lg={5} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Last Name" size="small" onChange={(event)=>setLastName(event.target.value)}/>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormTextField
                    fullWidth
                    label="Address Line 1"
                    size="small"
                    onChange={(event)=>setFirstAddress(event.target.value)}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormTextField
                    fullWidth
                    label="Address Line 2"
                    size="small"
                    onChange={(event)=>setSecondAddress(event.target.value)}
                  />
                </Grid>
                <Grid item lg={4} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Zip-code" size="small" onChange={(event)=>setZipCode(event.target.value)}/>
                </Grid>
                <Grid item lg={6} md={10} sm={10} xs={10}>
                <FormTextField fullWidth label="Phone Number" size="small" onChange={(event)=>setPhoneNumber(event.target.value)}/>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormTextField fullWidth label="Email" size="small" onChange={(event)=>setEmail(event.target.value)}/>
                </Grid>
                
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={customer}
                      label="Customer"
                      onChange={handleChange}createCustomerHandler
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
                    onClick={()=>createUserHandler()}
                  >
                    Create User
                  </Button>
                </Grid>
                <ToastContainer />
              </Grid>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default AddUser;
