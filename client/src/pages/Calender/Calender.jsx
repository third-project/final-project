import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarApp from "../../components/CalendarApp/CalendarApp";
import EventDetail from "../../components/EventDetail/EventDetail";
import { getMyRequests } from "../../services/calendarRequest";
import "./Calender.css";

const Calender = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    getMyRequests().then((res) => {
      setEvents(res.data);
    });
  }, []);

  function onEventClick(event) {
    console.log(event.event);
    setSelectedEvent(event.event);
  }

  return (
    <div className="Calender">
      <h1>Calender </h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CalendarApp events={events} onEventClick={onEventClick} />
        </Grid>
        <Grid item xs={12} md={4}>
          {selectedEvent && <EventDetail event={selectedEvent} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Calender;
