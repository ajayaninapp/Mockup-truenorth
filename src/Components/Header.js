import { Toolbar, AppBar, IconButton, Typography } from "@mui/material";
import React from "react";
import {ShareLocation,AccountCircle, Height} from "@mui/icons-material";
const Header = () => {
  return (
    <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#333333",width: "100vw"}}>
      <Toolbar
        sx={{
          width: "100vw",
          background: "#333333",
          display: "flex",
          alignItems: "center",
          height:"10vh"
        }}
      >
        <IconButton size="large" edge="start">
          <ShareLocation sx={{ color: "#FF6600",fontSize:'30px',}} />
        </IconButton>
        <Typography sx={{ flexGrow: 1,fontSize:'30px',fontWeight:"200" }}>TrueNorth</Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
