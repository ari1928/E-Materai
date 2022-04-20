import axios from "./index";



const setAuthorizationHeaders = (token = null ) => {
  if (token) axios.defaults.headers.common['access_token'] =  token;
  else delete axios.defaults.headers.common['access_token'];
};
export default setAuthorizationHeaders
