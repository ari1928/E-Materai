
import axios from "axios";
import errorHandler from "./errorHandler";
import setAuthorizationHeaders from './setAuthorizationHeaders'

const tokenlocal = sessionStorage.getItem("accessToken") || localStorage.getItem("access_token");
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_GATEWAY}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-Type": 'application/json',
  },
});

if (setAuthorizationHeaders.length === 0) {
  instance.defaults.headers.common['Authorization'] = "Bearer "+ tokenlocal;
} else {
  delete instance.defaults.headers.common['access_token'];
}
instance.interceptors.response.use((response) => response.data, errorHandler);
export { setAuthorizationHeaders };
export default instance;