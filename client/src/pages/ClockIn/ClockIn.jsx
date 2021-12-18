import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { CheckInButton } from "../../components/CheckInButton/CheckInButton";
import CheckOutButton from "../../components/CheckOutButton/CheckOutButton";
import { getMyCheckIn } from "../../services/checkInOut";
import "./ClockIn.css";

const ClockIn = () => {
  const [currentClock, setCurrentClock] = useState(null);
  const [status, setStatus] = useState(null);
  const [refresh, setRefresh] = useState(null);

  function timer() {
    setTimeout(() => setStatus(null), 2000);
  }

  useEffect(() => {
    getMyCheckIn().then((res) => {
      setCurrentClock(res.data);
      setStatus(res.status);
      setRefresh(null);
      timer();
    });
  }, [refresh]);

  return (
    <div>
      <h1>Clock in</h1>
      {currentClock && (
        <>
          <CheckOutButton clockId={currentClock._id} setRefresh={setRefresh} />
          <>{new Date(currentClock.startDate).toLocaleString()}</>
        </>
      )}
      {!currentClock && <CheckInButton setRefresh={setRefresh} />}

      {status === false && <Alert severity="error">There was an error</Alert>}
    </div>
  );
};

export default ClockIn;
