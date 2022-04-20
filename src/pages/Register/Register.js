import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import { ToastContainer } from "react-toastify";
import { DeleteReduxDataServiceUsers, RegisterUsers } from 'src/api/Actions/Service-Users/ServiceUsers';
import Swal from 'sweetalert2'

const mapStateToProps = (state) => {
    return {
        postUsersRegister: state.ServiceUsers.postUsersRegister,
        errorUsersRegister: state.ServiceUsers.errorUsersRegister,
    };
};
class Register extends Component {
    handleSubmit(data) {
        // console.log(data)
        const dataRegis = {
            username: data.name,
            email: data.email,
            password: data.password
        }
        console.log(dataRegis)
        this.props.dispatch({ type: 'set', loading: true })
        this.props.dispatch(RegisterUsers(dataRegis))
    }
    componentDidMount() {
        this.props.dispatch({ type: 'set', loading: false })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.postUsersRegister !== false) {
            this.props.dispatch({ type: 'set', loading: false })
            Swal.fire({
                title: 'Register Success',
                text: 'Email : ' + this.props.postUsersRegister.email,
                icon: 'success',
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Back To Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.props.history.push("/login");
                }
            })
        }
        if (this.props.errorUsersRegister !== false) {
            this.props.dispatch({ type: 'set', loading: false })
            this.props.dispatch(DeleteReduxDataServiceUsers())
        }
    }
    componentWillUnmount() {
        this.props.dispatch({ type: 'set', RegisShowPassword: false, RegisShowPasswordConfirm: false, loading: false })
    }
    render() {
        return (
            <>
                <ToastContainer position="top-right" />
                <div className="container mx-auto px-4 h-full pt-20 ">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-white border-0">
                                <div className="rounded-lg ">
                                    <div className="bg-gray-700  rounded-t-lg ">
                                        <img
                                            alt="img-login"
                                            className=" h-20 rounded-lg border-0 mx-auto"
                                            src={require("src/assets/image/tsel.png").default}
                                        />
                                    </div>
                                    <div className="text-xl text-center mb-3 font-bold mt-4">
                                        <h1>Or sign up with credentials</h1>
                                    </div>
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <RegisterForm
                                        onSubmit={(data) => this.handleSubmit(data)}
                                    />
                                    <div className="pt-6">
                                        <Link to="/login">Back To Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps, null)(Register)