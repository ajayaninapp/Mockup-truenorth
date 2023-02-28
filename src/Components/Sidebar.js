import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { CustomListItemTypography } from '../common/StyledComponents';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { fontSize } from '@mui/system';
import { GroupAdd, PersonAdd } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />


            <Drawer

                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    elevation: 8
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
            
        variant="permanent"
        sx={{
            display: { xs: 'none', md: 'none',lg:"block" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}my={3}>
          <List>
            <ListItem disableGutters sx={{paddingBottom:"20px"}}>
              <Link to="/customers">
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                     Customer Listing
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding sx={{paddingBottom:"20px"}}>
            <Link to="/customers/add-new">
            <ListItemButton>
                <ListItemIcon>
                  <PersonAdd sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Add Customer
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
              
            </ListItem>
            <ListItem disableGutters disablePadding sx={{paddingBottom:"20px"}}>
            <Link to="/users">
            <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                     User Listing
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
              
            </ListItem>
            <ListItem disableGutters disablePadding sx={{paddingBottom:"20px"}}>
            <Link to="/users/add-new">
            <ListItemButton>
                <ListItemIcon>
                  <GroupAdd sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                     Add Users
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
              
            </ListItem>
            
          </List>
        </Box>
      </Drawer>

        </Box>
    );
}

export default Sidebar