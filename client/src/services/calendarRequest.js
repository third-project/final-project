import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

// creates a service for every request in this file
const calendarRequestService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/calendar-requests`,
  headers: { Authorization: USER_HELPERS.getUserToken() },
});

/**
 *  Devuelve todas las peticiones de ausencias hechas por el usuario
 * @returns {{status: boolean,data: Array,errorMessage:string}} response donde data es un Array de peticiones del usuario
 */

export async function getMyRequests() {
  try {
    const responseAllMyRequests = await calendarRequestService.get("/all-mine" , {
      headers: { Authorization: USER_HELPERS.getUserToken() },
    });
    return successStatus(responseAllMyRequests);
  } catch (err) {
    return internalServerError(err);
  }
}
/**
 * 
 *  Devuelve todas las peticiones de ausencias hechas por todos los usuarios de la compañia
 * @param {string} companyId 
 * @returns {{status: boolean,data: Array,errorMessage:string}} response donde data es un Array de peticiones del usuario
 */
export async function getAllRequests(companyId) {
  try {
    const responseAllRequests = await calendarRequestService.get(
      `/all/${companyId}`, {
        headers: { Authorization: USER_HELPERS.getUserToken() },
      }
    );
    return successStatus(responseAllRequests);
  } catch (err) {
    return internalServerError(err);
  }
}
