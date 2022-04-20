import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { BeatLoader, ClipLoader } from 'react-spinners';
import { Field, reduxForm, reset } from 'redux-form';
import { FieldFormInput, FieldFormInputSelect } from 'src/ReduxFrom/FIeldFromInput';
import CreateUsers from 'src/ReduxFormValidation/CreateUsers';
import JwtToken from 'src/hash/JwtToken';
import { DeleteReduxDataGetIdUsers } from 'src/api/Actions/Service-Users/ServiceUsers';

const mapStateToProps = (state) => {
    return {
        showModal: state.ReduxState.showModal,
        formUpdate: state.ReduxState.formUpdate,
        getAllUsers: state.ServiceUsers.getAllUsers,
        errorAllUsers: state.ServiceUsers.errorAllUsers,
        getIdUsers: state.ServiceUsers.getIdUsers,
        errorIdUsers: state.ServiceUsers.errorIdUsers,
        initialValues: {
            name: state.ServiceUsers.getIdUsers.username,
            email: state.ServiceUsers.getIdUsers.email,
            role: state.ServiceUsers.getIdUsers.role,
        }
    };
};
class UsersModal extends Component {
    decode = JwtToken(sessionStorage.getItem("access_token") || localStorage.getItem('access_token'))

    Cancel() {
        this.props.dispatch(reset('formUsersModal'))
        this.props.dispatch({ type: 'set', showModal: false, LoginShowPassword: false, RegisShowPassword: false, RegisShowPasswordConfirm: false })
        this.props.dispatch(DeleteReduxDataGetIdUsers())
    }

    render() {
        const { showModal, loading, formUpdate } = this.props
        const { handleSubmit } = this.props;
        return (
            <>
                <Modal isOpen={showModal}
                    onClose={this.Cancel.bind(this)}>
                    <form onSubmit={handleSubmit} >
                        <ModalHeader>
                            {formUpdate ?
                                "Edit Users" :
                                "Create Users"
                            }</ModalHeader>
                        <hr className="my-4 min-w-full" />
                        <ModalBody>
                            <div className="relative w-full mb-3">
                                <Field
                                    label="Name"
                                    name="name"
                                    placeholder="Name"
                                    autoComplete="off"
                                    component={FieldFormInput}
                                    maxLength="50"
                                    type="text"
                                />
                            </div>
                            <div className="relative w-full mb-3">
                                <Field
                                    label="Email"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    component={FieldFormInput}
                                    maxLength="50"
                                    type="email"
                                />
                            </div>
                            <div className="relative mb-3 ">
                                <Field
                                    name="role"
                                    label="Role"
                                    component={FieldFormInputSelect}
                                >
                                    <option value="">Select Role</option>
                                    {
                                        this.decode.role === 'owner' ? (
                                            <>
                                                <option value="user">Users</option>
                                                <option value="admin">Admin</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="user">Users</option>
                                            </>
                                        )
                                    }
                                </Field>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="w-full sm:w-auto" layout="outline" size="large" onClick={this.Cancel.bind(this)}>
                                Cancel
                            </Button>
                            {!loading && (
                                <button
                                    className="w-full sm:w-auto bg-blue-500 text-white text-sm font-bold hover:bg-blue-400 px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    {!formUpdate && (
                                        <>
                                            Save
                                        </>
                                    )}
                                    {formUpdate && (
                                        <>
                                            Update
                                        </>
                                    )}
                                </button>
                            )}
                            {loading && (
                                <button
                                    className="w-full sm:w-auto bg-gray-500 cursor-wait text-white text-sm font-bold  px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
UsersModal = reduxForm({
    form: "formUsersModal",
    validate: CreateUsers,
    enableReinitialize: true,
})(UsersModal);
export default connect(mapStateToProps, null)(UsersModal)