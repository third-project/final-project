import axios from 'axios'
import * as USER_HELPERS from "../utils/userToken";


const uploadService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api/upload`, 
        headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
})

export function uploadImage(imageForm) {
    return uploadService.post('/image', imageForm)
}