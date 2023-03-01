import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { height } from "@mui/system";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ToolbarView = (props) => {
    const navigate = useNavigate();
    const path = props.path+"/add-new"
   const  handleClick=()=>{
        console.log(path)
        navigate(path)
    }
  return (
   
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "250px" }}>
          <TextField fullWidth placeholder="Search users...." />
        </Box>
        <Box sx={{ width: "150px" }}>      
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "40px", background: "#FB6501" }}
              onClick={()=>handleClick()}
            >
              Add New
            </Button>
        </Box>
      </Box>
    </>
  );
};
export default ToolbarView;
