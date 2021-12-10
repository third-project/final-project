import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const timeOffService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/time-off`,
});

/**
 * Crea y envia la solicitud de ausencia/vacaciones al Back
 *
 * @param {starDate: Date, endDate: Date, summary: string, type: string} timeOff type from "Holidays", "Illness", "Maternity / Paternity","Other"
 */

export async function createTimeOff(timeOff) {
  try {
    const response = await timeOffService.post("/create", timeOff, {
      headers: { Authorization: USER_HELPERS.getUserToken() },
    });
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}
