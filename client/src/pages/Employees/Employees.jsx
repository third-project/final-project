import React, { useEffect, useState, useCallback } from "react";
import './Employees.css'
import ModalCompany from './../../components/ModalCompany/ModalCompany'
import { getMyCompany } from "../../services/company"
import NewEmployee from './../../components/NewEmployee/NewEmployee'

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
      {!props.user.companies ? <ModalCompany user={props.user} onSubmitSuccess={()=>fetchCompany()}/> : null}
      {company && company.map((company) =>(
        <div>
          <h1>{company.name}</h1>
          <NewEmployee user={props.user} company={company}/>
        </div>
      ))}
    </div>
  )
}

export default Employees;