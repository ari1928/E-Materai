const NumberVirtualValidation = (values) => {
    const errors = {};
    if (!values.numberVirtual || values.numberVirtual === "") {
        errors.numberVirtual = "Please enter your number virtual";
    }

    return errors
}

export default NumberVirtualValidation