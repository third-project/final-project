import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

// creates a basic url for every request in this file
const calendarRequestService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/calendar-request`,
});

export async function getMyRequests() {
  try {
    const responseAllMyRequests = await calendarRequestService.get("/allMine", {
      headers: { Authorization: USER_HELPERS.getUserToken() },
    });
    //    const responseAllMyRequests = await calendarRequestService.get(`/allMine`, headers);
    return successStatus(responseAllMyRequests);
  } catch (err) {
    return internalServerError(err);
  }
}


