import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";


const EmployeesTable = ({ user, company, employees, isLoading }) => {
  return isLoading ? (
    <CircularProgress />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((employee) => (
              <TableRow
                key={employee._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{employee.photo}</TableCell>
                <TableCell align="center">{employee.name}</TableCell>
                <TableCell align="center">{employee.lastName}</TableCell>
                <TableCell align="center"> {employee.jobTitle}</TableCell>
                <TableCell align="center">
                  {new Date(employee.hiringDate).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
