import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function getProfesionalesObtener(especialidad) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api profesionales");
  return axiosRequest(`http://localhost:3001/api/profesionales/${especialidad}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}