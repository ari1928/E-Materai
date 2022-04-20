import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { BeatLoader, ClipLoader } from 'react-spinners';
import { Field, reduxForm, reset } from 'redux-form';
import { FieldFormInput } from 'src/ReduxFrom/FIeldFromInput';
import ChangePassword from 'src/ReduxFormValidation/ChangePassword';
import { ToastContainer } from 'react-toastify';

const mapStateToProps = (state) => {
    return {
        // passwordOld: state.ReduxState.LoginShowPassword,
        // passwordNew: state.ReduxState.RegisShowPassword,
        // confirmPasswordNew: state.ReduxState.RegisShowPasswordConfirm,
        // loading: state.ReduxState.loading,
        // changePassword: state.ReduxState.changePassword,
        // putUsersChangePassword: state.ServiceUsers.putUsersChangePassword,
        // errorUsersChangePassword: state.ServiceUsers.errorUsersChangePassword,
    };
};

class HeaderChangePassword extends Component {
    Cancel() {
        this.props.dispatch(reset('formHeaderChangePassword'))
        this.props.dispatch({ type: 'set', changePassword: false, LoginShowPassword: false, RegisShowPassword: false, RegisShowPasswordConfirm: false })
    }
    componentDidUpdate() {
        // if (this.props.putUsersChangePassword !== false) {
        //     localStorage.clear()
        //     sessionStorage.clear()
        // }
    }

    render() {
        const { changePassword, loading, passwordOld, passwordNew, confirmPasswordNew } = this.props
        const { handleSubmit } = this.props;
        return (
            <>
                <ToastContainer position="top-right" />
                <Modal isOpen={changePassword} onClose={this.Cancel.bind(this)}>
                    <form onSubmit={handleSubmit} >
                        <ModalHeader>Change Password</ModalHeader>
                        <hr className="my-4 min-w-full" />
                        <ModalBody>
                            <div className="relative w-full mb-3 ">
                                <div>
                                    <Field
                                        label="Current Password"
                                        name="oldPassword"
                                        autoComplete="off"
                                        placeholder="Current Password"
                                        component={FieldFormInput}
                                        maxLength="20"
                                        type={(passwordOld) ? "text" : "password"}
                                    />
                                    <div className="absolute cursor-pointer top-8 right-3"
                                        onClick={() => this.props.dispatch({ type: 'set', LoginShowPassword: !passwordOld })}
                                    >
                                        <i className={(passwordOld) ? "fa fa-eye-slash" : "fa fa-eye"} ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full mb-3 ">
                                <div>
                                    <Field
                                        label="New Password"
                                        name="newPassword"
                                        autoComplete="off"
                                        placeholder="New Password"
                                        component={FieldFormInput}
                                        maxLength="20"
                                        type={(passwordNew) ? "text" : "password"}
                                    />
                                    <div className="absolute cursor-pointer top-8 right-3"
                                        onClick={() => this.props.dispatch({ type: 'set', RegisShowPassword: !passwordNew })}
                                    >
                                        <i className={(passwordNew) ? "fa fa-eye-slash" : "fa fa-eye"} ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full mb-3 ">
                                <div>
                                    <Field
                                        label="Confirm New Password"
                                        name="confirmNewPassword"
                                        autoComplete="off"
                                        placeholder="Confirm New Password"
                                        component={FieldFormInput}
                                        maxLength="20"
                                        type={(confirmPasswordNew) ? "text" : "password"}
                                    />
                                    <div className="absolute cursor-pointer top-8 right-3"
                                        onClick={() => this.props.dispatch({ type: 'set', RegisShowPasswordConfirm: !confirmPasswordNew })}
                                    >
                                        <i className={(confirmPasswordNew) ? "fa fa-eye-slash" : "fa fa-eye"} ></i>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="w-full sm:w-auto" layout="outline" size="large" onClick={this.Cancel.bind(this)}>
                                Cancel
                            </Button>
                            {!loading && (
                                <button
                                    className="bg-blue-500 text-white text-sm font-bold hover:bg-blue-400 px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Update
                                </button>
                            )}
                            {loading && (
                                <button
                                    className="bg-gray-500 cursor-wait text-white text-sm font-bold  px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Loading
                                    <BeatLoader size={5} color={"#fff"} />
                                    <ClipLoader size={15} color={"#fff"} />
                                </button>
                            )}
                        </ModalFooter>
                    </form>
                </Modal>
            </>
        )
    }
}
HeaderChangePassword = reduxForm({
    form: "formHeaderChangePassword",
    validate: ChangePassword,
    enableReinitialize: true,
})(HeaderChangePassword);
export default connect(mapStateToProps, null)(HeaderChangePassword)