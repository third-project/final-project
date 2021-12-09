import React, { useEffect } from "react";
import CalendarApp from "../../components/CalendarApp/CalendarApp";
import { getMyRequests } from "../../services/calendarRequest";
import './Calender.css'

const Calender = () => {
  useEffect( () => {
    getMyRequests().then((res)=>{
      console.log(res);
    })
  }, []);
  return (
    <div className="Calender">
      <h1>Calender </h1>
      <CalendarApp/>
    </div>
  );
};

export default Calender;