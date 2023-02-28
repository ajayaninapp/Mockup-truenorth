import React from 'react'
import ToolbarView from '../components/ToolbarView'
import { Box } from '@mui/material'
import CustomerTable from './CustomerTable'

const CustomerView = () => {
  return (
    <Box sx={{padding:"20px",background:"#ffffff",borderRadius:"5px",margin:"5px",width:"100%"}}>
          <ToolbarView path="/customers"/>
        <Box sx={{marginTop:'20px',overflow:"auto"}}>
         <CustomerTable/>
        </Box>
    </Box>
  )
}

export default CustomerView
