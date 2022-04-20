const ChangePassword = (values) => {
    const lenghtolPassword = values.oldPassword && values.oldPassword.length >= 6
    const lenghtNewPassword = values.newPassword && values.newPassword.length >= 6
    const lenghtconfirmNewPassword = values.confirmNewPassword && values.confirmNewPassword.length >= 6
    const errors = {};
    if (!values.oldPassword || values.oldPassword === "") {
        errors.oldPassword = "Please enter your current password";
    } else if (true !== lenghtolPassword) {
        errors.oldPassword = "The current password must be at least 6 characters long"
    }
    if (!values.newPassword || values.newPassword === "") {
        errors.newPassword = "Please enter your new password";
    }else if (true !== lenghtNewPassword) {
        errors.newPassword = "The new password must be at least 6 characters long";
    }
    if (!values.confirmNewPassword || values.confirmNewPassword === "") {
        errors.confirmNewPassword = "Please enter your confirm new password";
    } else if (values.confirmNewPassword !== values.newPassword) {
        errors.confirmNewPassword = "The Confirm new Password confirmation does not match";
    }else if (true !== lenghtconfirmNewPassword) {
        errors.confirmNewPassword = "The confirm new password must be at least 6 characters long";
    }

    return errors
}

export default ChangePassword