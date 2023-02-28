import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import TableView from "../views/TableView";
import AddUser from "../views/adduser/AddUser";
import CustomerView from "../views/CustomerView/CustomerView";
import CustomerForm from "../views/CustomerForm/CustomerForm";

const MainLayout = (props) => {
  const show=true;
  return (
    <Box>
      <Header  show={show}/>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          p={3}
          sx={{
            flexGrow: "1",
            background: "#F0F0F0",
            marginTop: "10vh",
            minHeight: "90vh",
            width: " calc(100% - 240px)",
            flexDirection: "column",
            display:"flex"
          }}
        >
          
          <Box
            sx={{
              width: "100%",
              minHeight: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
