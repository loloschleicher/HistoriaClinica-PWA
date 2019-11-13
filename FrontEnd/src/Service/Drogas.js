import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function mostrarDrogas(dni) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`http://localhost:3001/api/drogas/${dni}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}

