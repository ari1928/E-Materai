const RegisterValidation = (values) => {
    const errors = {};
    if (!values.name || values.name === "") {
        errors.name = "Please enter your name";
    }
    if (!values.email || values.email === "") {
        errors.email = "Please enter your email";
    } else if (!values.email || true !== /\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid Email , Please your input email valid"
    }
    if (!values.password || values.password === "") {
        errors.password = "Please enter your password";
    } 
    if (!values.passwordConfirm || values.passwordConfirm === "") {
        errors.passwordConfirm = "Please enter your confirm password";
    }else if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = "The Confirm Password confirmation does not match";
    }

    return errors
}

export default RegisterValidation