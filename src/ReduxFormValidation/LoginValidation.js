

const LoginValidation = (values) => {
    const lenghtPassword = values.password && values.password.length >= 6
    const errors = {};
    if (!values.email || values.email === "") {
        errors.email = "Please enter your email";
    } else if (!values.email || true !== /\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid Email , Please your input email valid"
    }
    if (!values.password || values.password === "") {
        errors.password = "Please enter your password";
    } else if (true !== lenghtPassword) {
        errors.password = "The password must be at least 6 characters long";
    }
    return errors
}
export default LoginValidation