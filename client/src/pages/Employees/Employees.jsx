import React from "react";
import './Employees.css'
import ModalCompany from './../../components/ModalCompany/ModalCompany'


const Employees = (props) => {
  return (
    <div>
      <h1>Employees</h1>
      <ModalCompany user={props.user}/>
    </div>
  );
};

export default Employees;