import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { height } from '@mui/system'

const ToolbarView = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "5px",alignItems:"center" }}>
                <Box sx={{ width: '250px' }}>
                    <TextField fullWidth placeholder='Search users....'/>
                </Box>
                <Box  sx={{ width: '150px'}}>
                    <Button variant='contained' fullWidth sx={{height:"40px",background:"#FB6501"}}>
                        Add New +
                    </Button>

                </Box>
            </Box>
        </>
    )
}
export default ToolbarView