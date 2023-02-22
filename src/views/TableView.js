import React from 'react'
import { Box} from '@mui/material'
import ToolbarView from './components/ToolbarView'
import UserTable from './UserTable'
import AddUser from './adduser/AddUser'
const TableView = () => {
  return (
    <Box sx={{padding:"20px",background:"#ffffff",borderRadius:"5px",margin:"5px"}}>
          <ToolbarView/>
        <Box sx={{marginTop:'20px',overflow:"auto"}}>
        <UserTable/>
        </Box>
    </Box>
  )
}

export default TableView