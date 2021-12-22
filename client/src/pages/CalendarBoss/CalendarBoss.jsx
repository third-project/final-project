import { Alert, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarApp from "../../components/CalendarApp/CalendarApp";
import EventDetail from "../../components/EventDetail/EventDetail";
import { getAllRequests } from "../../services/calendarRequest";
import {
  approveTimeOff,
  deleteTimeOff,
  denyTimeOff,
} from "../../services/timeOff";
import "./CalendarBoss.css";

const CalendarBoss = (props) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [status, setStatus] = useState(null);

  
  useEffect(() => {

  
    function getCompany() {
      if(props.user.companies && props.user.companies.length > 0) {
        return props.user.companies[0]
      } else {
        return null;
      }
    }

    const company = getCompany();
    if (company) {
      getAllRequests(company).then((res) => {
        setEvents(res.data);
      });
    }
  }, [selectedEvent,props.user.companies]);



  function timer() {
    setTimeout(() => setStatus(null), 1500);
    setStatus(true)
  }

  function onEventClick(event) {
    setSelectedEvent(event.event);
  }
  async function deleteClick() {
    const response = await deleteTimeOff(selectedEvent.extendedProps.id);

    setSelectedEvent(null);
    setStatus(response.status);
    timer();
  }
  async function approveClick() {
    const response = await approveTimeOff(selectedEvent.extendedProps.id);

    setSelectedEvent(null);
    setStatus(response.status);
    timer();
  }

  async function denyClick() {
    const response = await denyTimeOff(selectedEvent.extendedProps.id);

    setSelectedEvent(null);
    setStatus(response.status);
    timer();
  }

  return (
    <div className="Calender">
      <h1>Calender </h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CalendarApp events={events} onEventClick={onEventClick} />
        </Grid>
        <Grid item xs={12} md={4}>
          {selectedEvent && (
            <EventDetail
              event={selectedEvent}
              denyClick={denyClick}
              approveClick={approveClick}
              deleteClick={deleteClick}
              isBoss={true}
            />
          )}
          {status  && (
            <Alert severity="success">
              Changed applied! 
            </Alert>
          )}

          {status === false && (
            <Alert severity="error">
              There was an error
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CalendarBoss;
