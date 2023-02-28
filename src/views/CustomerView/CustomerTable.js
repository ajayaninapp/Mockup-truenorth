import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CustomTableHeadCell } from '../../common/StyledComponents';
import { minWidth } from '@mui/system';



const columns = [
    { id: 'name', label: 'Name'},
    {
        id: 'address',
        label: 'Address',
       
    },
    { id: 'email', label: 'Email'},
    {
        id: 'phone',
        label: 'Phone',
    },
    
    {
        id: 'box_key',
        label: 'Map Box Key'
    },
];



function createData(
    name, address, email, phone,box_key 
) {

    return { name, address, email, phone,box_key };
}

const rows = [
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),
    createData('Ajayan', 'Keas 69 Str. 15234, Chalandri Athens, Greece', 1324171354, "+30-2106019311", "30-2106019311"),

];

export default function CustomerTable() {
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
