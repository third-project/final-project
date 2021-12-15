import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const checkInService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/check-in`,
  headers: { Authorization: USER_HELPERS.getUserToken() },
});

/**
 * Crea y envia el fichaje a Back esto tengo quye repensarlo pq creo que mi idea y el modelo nmo encajan
 * 
 * @param {{currentDate: Date,startHour: Date,endHour:Date,summary: string,  }} checkIn 
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de crear
 */
export async function registerHour(checkIn) {
    try {
        const response = await checkInService.post("/register",checkIn);
        return successStatus(response);
    } catch (err) {
        return internalServerError(err);
    }
}