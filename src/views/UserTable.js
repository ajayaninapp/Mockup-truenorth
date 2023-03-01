import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CustomTableHeadCell } from '../common/StyledComponents';
import { IconButton } from '@mui/material';
import {  Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const edit=(
    <div>
        <IconButton>
            <EditIcon/>
        </IconButton>
    </div>
)
const remove=(
    <div>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </div>
)
const columns = [
    { id: 'name', label: 'Name'},
    { id: 'email', label: 'Email'},
    {
        id: 'phone',
        label: 'Phone',
    },
    {
        id: 'client',
        label: 'Client'
    },
    {
        id: 'role',
        label: 'Role'
    },
    {
        id: 'edit',
        label: 'Edit'
    },
    
    {
        id: 'remove',
        label: 'Delete User'
    },
    
    

];



function createData(
    name, email, phone, client, role
) {

    return { name, email, phone, client, role ,edit,remove};
}

const rows = [
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user"),
    createData('Ajayan', 'ajayantv@test.com', 1324171354, "Truenorth", "Client user")
];

export default function UserTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'auto' }}>
            <TableContainer sx={{ maxHeight: 400 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <CustomTableHeadCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </CustomTableHeadCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
