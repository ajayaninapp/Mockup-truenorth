import React from 'react'
import { Box, Typography } from '@mui/material'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import TableView from '../views/TableView'
import AddUser from '../views/adduser/AddUser'

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box  p={3} sx={{ flexGrow: "1", background: "#F0F0F0", marginTop: "10vh",minHeight:"90vh",   width:" calc(100% - 240px)"}} >
          <Typography variant='h1' sx={{fontSize:'20px',fontWeight:"500"}}>Add New User</Typography>
          <TableView/>
        </Box>

      </Box>
    </Box>
  )
}

export default MainLayout