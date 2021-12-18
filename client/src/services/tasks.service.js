import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import { internalServerError, successStatus } from "./auth";

const tasksService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/tasks`,
  headers: { Authorization: USER_HELPERS.getUserToken() },
});


export async function createTask(task) {
  try {
    const response = await tasksService.post("/create", task);
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}


export async function deleteTask(taskId) {
  try {
    const response = await tasksService.post(`/delete/${taskId}`);
    return successStatus(response);
  } catch (err) {
    return internalServerError(err);
  }
}