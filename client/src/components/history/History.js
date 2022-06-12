import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withTheme } from '@emotion/react';

const History = (props) =>{

    let name = props.name
    let phone = props.phone
    let timeStamp = props.timeStamp
    console.log(props) 
    let rows= []
    function createData(name, phone, timeStamp) {
        return { name, phone, timeStamp };
      }
      let vals= Object.values(props)
      console.log(vals)
      vals[0].forEach((row)=>{
        let res = createData(row.name, row.phone, row.timeStamp)
        rows.push(res)
      })
    if(vals[0].length !=0) 
    return(
    <TableContainer component={Paper} style={{width: '80%', margin : 'auto', marginTop: '4%'}} >
        <Table sx={{ minWidth: 500 }} size="small" aria-label="customized table">
            <TableHead style={{color:'white', backgroundColor:'black'}}>
            <TableRow>
                <TableCell  style={{color:'white'}} >Name</TableCell >
                <TableCell  style={{color:'white'}} align="right">Phone Number</TableCell >
                <TableCell  style={{color:'white'}} align="right">TimeStamp</TableCell >
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell  component="th" scope="row"> {row.name}</TableCell >
                <TableCell  align="right">{row.phone}</TableCell >
                <TableCell  align="right">{row.timeStamp}</TableCell >
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
    else return (<h1>Empty History!</h1>)
}

export default History;