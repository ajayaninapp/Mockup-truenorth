import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Tooltip,
  Box
} from "@mui/material";
import React from "react";
import { ShareLocation, AccountCircle, Height } from "@mui/icons-material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate=useNavigate();
  const { show, handleDrawerToggle } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const home=()=>{
     if(show){
      navigate("/")
     }
     else{
      navigate("/sign-in")
     }
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: "#333333",
        width: "100vw",
      }}
    >
      <Toolbar
        sx={{
          width: "100vw",
          background: "#333333",
          display: "flex",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <IconButton
          size="large"
          onClick={() => handleDrawerToggle()}
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <MenuIcon
            sx={{ color: "#FF6600", fontSize: "30px", marginRight: "30px" }}
          />
        </IconButton>
        <Box sx={{flexGrow: 1,}}>
        <IconButton size="large" edge="start" onClick={()=>home()}>
          <ShareLocation sx={{ color: "#FF6600", fontSize: "30px" }} />
          <Typography sx={{  fontSize: "30px", fontWeight: "200" ,color:'white'}}>
            TrueNorth
          </Typography>
        </IconButton>
        </Box>
        

         

        {show ? (
          <Tooltip title="Account Settings">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
        ) : null}
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <Link to="/reset-password">
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Change Password
            </MenuItem>
          </Link>
          <Link to="/Mockup-truenorth/" sx={{ color: "black" }}>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
