import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 

const CalendarApp = (props) => {
  const [parsedEvents, setParsedEvents] = useState([]);

  useEffect(() => {
    const events = props.events.map((event) => {
      return {
        title: `${event.type}-${event.summary}`,
        start: event.startDate,
        end: event.endDate,
        color: event.approved ? "green" : "red",
        allDay:true
      };
    });
    setParsedEvents(events);
  },[props.events]);

 
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={parsedEvents}
      eventClick={props.onEventClick}
    />
  );
};

export default CalendarApp;
