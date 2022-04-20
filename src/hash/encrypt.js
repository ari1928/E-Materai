
const CryptoJS = require("crypto-js");

function encrypt(data) {
    let encrypted = CryptoJS.AES.encrypt(data, `${process.env.REACT_APP_SECRET_KEY}`).toString();
    let b64 = CryptoJS.enc.Base64.parse(encrypted);
    encrypted = b64.toString(CryptoJS.enc.Hex);
    return encrypted;
}
export default encrypt