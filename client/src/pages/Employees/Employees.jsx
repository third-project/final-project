import React, { useEffect, useState, useCallback } from "react";
import './Employees.css'
import ModalCompany from './../../components/ModalCompany/ModalCompany'
import { getMyCompany, getEmployees } from "../../services/company"
import NewEmployee from './../../components/NewEmployee/NewEmployee'
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable";

const Employees = (props) => {
  
    const [company, setCompany] = useState(props.user.companies)
    const [isLoading, setIsLoading] = useState(true)
    const [employees, setEmployees] = useState([])
  
    const fetchCompany = useCallback(() => {
      getMyCompany()
        .then((response) => {
          setCompany(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);

    const fetchEmployees = useCallback(() => {
      getEmployees(props.user.companies[0]) // TODO: cambiar a useEffect
        .then((response) => {
          setEmployees(response.data)
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, [company]);

    useEffect(() => {
      fetchCompany();
    }, [fetchCompany]);

    useEffect(() => {
      fetchEmployees();
    }, [fetchEmployees]);

    useEffect(() => {
      fetchEmployees();
    },[])


    return(
    <div>
      <h1>Employees</h1>
      {!props.user.companies ? <ModalCompany user={props.user} onSubmitSuccess={()=>fetchCompany()}/> : null}
      {company && company.map((company) =>(
        <div>
          <h1>{company.name}</h1>
          <h1>{company._id}</h1>
          <NewEmployee user={props.user} company={company} onSubmitSuccess={()=>fetchEmployees()} />
        </div>
      ))}
      <EmployeesTable user={props.user} company={company} employees={employees}/>
    </div>
  )
}

export default Employees;