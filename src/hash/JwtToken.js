import jwt_decode from "jwt-decode";
// import { useHistory } from "react-router-dom";
// import decrypt from "./decrypt";

function JwtToken(data) {
    console.log(data)
    // const history = useHistory();
    try {
        var decode = jwt_decode(data);
        return decode
    } catch (error) {
        console.log(error ,"jwt_decode")
        // sessionStorage.clear()
        // // history.push('/login')
        // window.location.href = '/#/login'
    }
}

export default (JwtToken)