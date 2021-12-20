import React, { useEffect, useState, useCallback } from "react";
import './Employees.css'
import ModalCompany from './../../components/ModalCompany/ModalCompany'
import { getMyCompany } from "../../services/company"


const Employees = (props) => {
  
    const [company, setCompany] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    const fetchCompany = useCallback(() => {
      getMyCompany()
        .then((response) => {
          setCompany(response.data);
          setIsLoading(false);
        })
  
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
      fetchCompany();
    }, [fetchCompany]);

    return(
    <div>
      <h1>Employees</h1>
      <ModalCompany user={props.user}/> 
      {/* {company && company.map((company) =>(
        <h1>{company.name}</h1>
      ))} */}
    </div>
  )
}

export default Employees;