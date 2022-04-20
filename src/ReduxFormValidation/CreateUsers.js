const CreateUsers = (values) => {
    const errors = {};
    if (!values.name || values.name === "") {
        errors.name = "Please enter your name";
    }
    if (!values.email || values.email === "") {
        errors.email = "Please enter your email";
    } else if (!values.email || true !== /\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid Email , Please your input email valid"
    }
    if(!values.role || values.role === ""){
        errors.role = "Please your select role"
    }

    return errors
}

export default CreateUsers