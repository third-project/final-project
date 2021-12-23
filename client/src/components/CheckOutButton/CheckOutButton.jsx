import { Button } from "@mui/material";
import { registerEndHour } from "../../services/checkInOut";

const CheckOutButton = (props) => {

    async function finishHour () {
      const checkOut = {
        endDate: new Date()
      };
      await registerEndHour(props.clockId,checkOut);
      props.setRefresh(false);
    }
    return (
      <>
        <Button variant="outlined" color="secondary" onClick={() => finishHour()}>Check Out</Button>
      </>
    )
  
  }

  export default CheckOutButton;