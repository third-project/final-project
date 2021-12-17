import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const checkInService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/check-in`,
  headers: { Authorization: USER_HELPERS.getUserToken() },
});

/**
 * Crea y envia el fichaje a Back
 *
 * @param {{startDate: Date}} clockIn
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de crear
 */
export async function registerStartHour(clockIn) {
  try {
    const response = await checkInService.post("/start", clockIn);
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}

/**
 * 
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es un Object con el fichaje abierto
 */

export async function getMyCheckIn() {
  try {
    const responseMyCheckIn = await checkInService.get("/get-current-clock-in");
    return successStatus(responseMyCheckIn);
  } catch (err) {
    return internalServerError(err);
  }
}

/**
 * Actualiza el fichaje abierto en Back
 * @param {string} id
 * @param {{endDate:Date}} clockOut
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de actualizar
 */
export async function registerEndHour(id, clockOut) {
  try {
    const response = await checkInService.patch(`/end/${id}`, clockOut);
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}