import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const timeOffService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/time-off`,
  headers: { Authorization: USER_HELPERS.getUserToken() },
});

/**
 * Crea y envia la solicitud de ausencia/vacaciones al Back
 *
 * @param {{starDate: Date, endDate: Date, summary: string, type: string}} timeOff type from "Holidays", "Illness", "Maternity / Paternity","Other"
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de crear
 */
export async function createTimeOff(timeOff) {
  try {
    const response = await timeOffService.post("/create", timeOff,{
      headers: { Authorization: USER_HELPERS.getUserToken() },
    });
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}

/**
 * localiza la solicitud y pasa a true approved
 * @param {string} timeOffId
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de modificar
 */
export async function approveTimeOff(timeOffId) {
  try {
    const response = await timeOffService.post(`/approve/${timeOffId}`, {
      headers: { Authorization: USER_HELPERS.getUserToken() },
    });
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}

/**
 * localiza la solicitud y pasa a false approved
 * @param {string} timeOffId
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de modificar
 */
export async function denyTimeOff(timeOffId) {
  try {
    const response = await timeOffService.post(`/deny/${timeOffId}`,{
      headers: { Authorization: USER_HELPERS.getUserToken() },
    });
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}

/**
 * localiza la solicitud y la borra
 * @param {string} timeOffId
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de modificar
 */
export async function deleteTimeOff(timeOffId) {
  try {
    const response = await timeOffService.post(`/delete/${timeOffId}`,{
      headers: { Authorization: USER_HELPERS.getUserToken() },
    });
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}
