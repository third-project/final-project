import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const companyService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/company`
});

export function createCompany(company) {
  return companyService
    .post("/create", company, {
      headers: {
        Authorization: USER_HELPERS.getUserToken()
      }
   })
    .then(successStatus)
    .catch(internalServerError);
}

export function addEmployee(company, companyId) {
  return companyService
    .post(`/add-employee/${companyId}`, company, {
      headers: {
        Authorization: USER_HELPERS.getUserToken()
      }
   })
    .then(successStatus)
    .catch(internalServerError);
}


export async function getMyCompany() {
  try {
    const responseMyCompany = await companyService.get("/my-company", {
      headers: {
        Authorization: USER_HELPERS.getUserToken()
      }
    });
    return successStatus(responseMyCompany);
  } catch (err) {
    return internalServerError(err);
  }
}

// export async function getEmployees() {
//   try {
//     const allEmployees = await companyService.get(`/employees/`, {
//       headers: {
//         Authorization: USER_HELPERS.getUserToken()
//       }
//     });
//     return successStatus(allEmployees);
//   } catch (err) {
//     return internalServerError(err);
//   }
// }

// With params 

export async function getEmployees(companyId) {
  try {
    const allEmployees = await companyService.get(`/employees/${companyId}`, {
      headers: {
        Authorization: USER_HELPERS.getUserToken()
      }
    });
    return successStatus(allEmployees);
  } catch (err) {
    return internalServerError(err);
  }
}