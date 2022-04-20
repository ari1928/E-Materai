

const NumberMaskingValidation = (values) => {
    const lenghtNumberFrom = values.NumberFrom && values.NumberFrom.length >= 10
    const lenghtNumberTo = values.NumberTo && values.NumberTo.length >= 10
    // const NumberFromNoValid = 
    // const NumberFromNoValid = values.NumberFrom && values.NumberFrom.substring(0, 2)
    const errors = {};

    // console.log(NumberFromNoValid)
    if (!values.NumberFrom || values.NumberFrom === "") {
        errors.NumberFrom = "Please enter your Number A";
    } else if (values.NumberFrom && values.NumberFrom.substring(0, 2) === '62') {
        errors.NumberFrom = "Invalid Phone Number"
    } else if (true !== lenghtNumberFrom) {
        errors.NumberFrom = "From number must be at least 10 characters";
    } else if (values.NumberFrom === values.NumberTo) {
        errors.NumberFrom = "Number A cannot be the same as Number B";
    }

    if (!values.NumberTo || values.NumberTo === "") {
        errors.NumberTo = "Please enter your Number B";
    } else if (values.NumberTo && values.NumberTo.substring(0, 2) === '62') {
        errors.NumberTo = "Invalid Phone Number"
    } else if (true !== lenghtNumberTo) {
        errors.NumberTo = "To number must be at least 10 characters";
    } else if (values.NumberTo === values.NumberFrom) {
        errors.NumberTo = "Number B cannot be the same as Number A";
    }

    if (!values.NumberMaskingFrom || values.NumberMaskingFrom === "") {
        errors.NumberMaskingFrom = "Please your select Number Masking A";
    } else if (values.NumberMaskingFrom === values.NumberMaskingTo) {
        errors.NumberMaskingFrom = "Number Masking A cannot be the same as Number Masking B";
    }

    if (!values.NumberMaskingTo || values.NumberMaskingTo === "") {
        errors.NumberMaskingTo = "Please your select Number Masking B";
    } else if (values.NumberMaskingTo === values.NumberMaskingFrom) {
        errors.NumberMaskingTo = "Number Masking B cannot be the same as Number Masking A";
    }
    return errors
}

export default NumberMaskingValidation