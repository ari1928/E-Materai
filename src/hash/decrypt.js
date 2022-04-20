const CryptoJS = require("crypto-js");
// import { useHistory } from "react-router-dom";


function Decrypt(data) {
    // const history = useHistory();
    try {
        const b64 = CryptoJS.enc.Hex.parse(data);
        const bytes = b64.toString(CryptoJS.enc.Base64);
        const decode = CryptoJS.AES.decrypt(bytes, `${process.env.REACT_APP_SECRET_KEY}`);
        const decrypted = decode.toString(CryptoJS.enc.Utf8);
        return decrypted;
    } catch (error) {
        return (
            window.location.href = '/#/404'
            // history.push('/404')
        )
    }
}
export default (Decrypt)