import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const companyService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/company`,
  headers: { Authorization: USER_HELPERS.getUserToken() },
});


export function createCompany(company) {
  return companyService
    .post("/create", company)
    .then(successStatus)
    .catch(internalServerError);
}
