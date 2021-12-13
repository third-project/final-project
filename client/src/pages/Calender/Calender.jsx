import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarApp from "../../components/CalendarApp/CalendarApp";
import EventDetail from "../../components/EventDetail/EventDetail";
import { getMyRequests } from "../../services/calendarRequest";
import { approveTimeOff, deleteTimeOff, denyTimeOff } from "../../services/timeOff";
import "./Calender.css";

const Calender = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    getMyRequests().then((res) => {
      setEvents(res.data);
    });
  }, [selectedEvent]);

  function onEventClick(event) {
    setSelectedEvent(event.event);
  }
  async function deleteClick() {
    await deleteTimeOff(selectedEvent.extendedProps.id);

    setSelectedEvent(null);
  }
  async function approveClick() {
    await approveTimeOff(selectedEvent.extendedProps.id);

    setSelectedEvent(null);
  }

  async function denyClick() {
    await denyTimeOff(selectedEvent.extendedProps.id);

    setSelectedEvent(null);
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
            <EventDetail event={selectedEvent} denyClick={denyClick} approveClick={approveClick} deleteClick={deleteClick} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Calender;
