import React, {useEffect} from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {deleteEmployee} from './../../services/company'
import { useState } from "react";
import FormControl from '@mui/material/FormControl';



const EmployeesTable = ({ user, company, employees, isLoading, getMyEmployees }) => {

  const [error, setError] = useState(null)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(null)
  const [employeesUpdated, setEmployeesUpdated] = useState(employees)


  // const handleDelete = (employeeId) => {
  //   console.log(company)
  //   deleteEmployee(company[0]._id, employeeId)
  //   .then((res) => {
  //     if (!res.status) {
  //       return setError(res.errorMessage)
  //     }
  //     setMessage("Employee deleted succesfully")
  //     console.log(res)
  //   });
  // }

  return (
    <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 900 }}>
      <Table sx={{ minWidth: 650, maxWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Photo</b>
            </TableCell>
            <TableCell align="center">
              <b>First Name</b>
            </TableCell>
            <TableCell align="center">
              <b>Last Name</b>
            </TableCell>
            <TableCell align="center">
              <b>Job Title</b>
            </TableCell>
            <TableCell align="center">
              <b>Hire Date</b>
            </TableCell>
            <TableCell align="center">
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((employee) => (
              <TableRow
                key={employee._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center"> <Avatar alt="employee avatar" src={employee.photo}/></TableCell>
                <TableCell align="center">{employee.name}</TableCell>
                <TableCell align="center">{employee.lastName}</TableCell>
                <TableCell align="center"> {employee.jobTitle}</TableCell>
                <TableCell align="center">
                  {new Date(employee.hiringDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="center"> <FormControl><Button variant="outlined" >Delete</Button></FormControl></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// onclick={handleDelete(employee._id)}
export default EmployeesTable;
