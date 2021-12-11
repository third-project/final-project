import React, { useEffect, useState } from "react";
import CalendarApp from "../../components/CalendarApp/CalendarApp";
import { getMyRequests } from "../../services/calendarRequest";
import "./Calender.css";

const Calender = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getMyRequests().then((res) => {
      console.log(res);
      setEvents(res.data);
    });
  }, []);
  
  function onEventClick(event) {
    console.log(event);
  }


  return (
    <div className="Calender">
      <h1>Calender </h1>
      <CalendarApp events={events} event={onEventClick} />
    </div>
  );
};

export default Calender;
