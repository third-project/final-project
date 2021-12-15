import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const companyService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/company`,
  headers: { Authorization: USER_HELPERS.getUserToken() },
});

/**
 * @param {{name: name, foundationDate: foundationDate, fiscalCode: fiscalCode, email: email}} company
 * @returns {{status: boolean,data: Object,errorMessage:string}} response donde data es el objeto que acabamos de crear
 */

 export async function createCompany(company) {
  try {
    const response = await companyService.post("/create", company);
    return successStatus(response);
    
  } catch (err) {
    return internalServerError(err);
  }
}
