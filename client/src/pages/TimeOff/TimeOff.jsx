import React from "react";
import "./TimeOff.css";
import TimeOffForm from "../../components/TimeOffForm/TimeOffForm";
import TimeOffTable from "../../components/TimeOffTable/TimeOffTable";

//TODO FEEDBACK CUANDO SE HACE UNA PETICION HAY QUE MOSTRAR ALGO PARA QUE SE SEPA

const TimeOff = () => {


  return (
    <div className="TimeOff">
      <h1>Time Off</h1>
      <h3>Make your Request</h3>
      <TimeOffForm />
      <h3>Time Off Records</h3>
      <TimeOffTable />
     
    </div>
  );
};

export default TimeOff;
