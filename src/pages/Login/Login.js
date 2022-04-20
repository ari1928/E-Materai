import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { toast, ToastContainer } from "react-toastify";
// import { DeleteReduxDataServiceUsers, LoginUsers } from 'src/api/Actions/Service-Users/ServiceUsers';
import { setAuthorizationHeaders } from 'src/api/Config';
import encrypt from 'src/hash/encrypt';
import { UsersLogin } from 'src/api/Actions';


const mapStateToProps = (state) => {
    return {
        postUsersLogin: state.ApiRes.postUsersLogin,
        errorUsersLogin: state.ApiRes.errorUsersLogin,
    };
};
class Login extends Component {
    handleSubmit(data) {
        const dataReq = {
            user: data.email,
            password: data.password
        }
        this.props.dispatch(UsersLogin(dataReq))
        this.props.dispatch({ type: 'set', loading: true })
    }
    componentDidMount() {
        document.title = `Login For ${document.title}`
        localStorage.setItem('remember', false)
        this.props.dispatch({ type: 'set', loading: false })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.postUsersLogin !== false) {
            if (this.props.postUsersLogin.message === "success") {
                if (localStorage.getItem('remember') === 'true') {
                    localStorage.setItem('accessToken', this.props.postUsersLogin.token)
                } else {
                    sessionStorage.setItem('accessToken', this.props.postUsersLogin.token)
                }
                setAuthorizationHeaders(this.props.postUsersLogin.token);
                this.props.history.push("/");
            } else {
                toast.error(this.props.postUsersLogin.result);
            }
            this.props.dispatch({ type: 'set', loading: false })
        }
        if (this.props.errorUsersLogin !== false) {
            this.props.dispatch({ type: 'set', loading: false })
        }
    }
    componentWillUnmount() {
        this.props.dispatch({ type: 'set', LoginShowPassword: false, loading: false })
    }
    render() {
        return (
            <>
                <ToastContainer position="top-right" />
                <div className="flex items-center min-h-screen  bg-gray-50">
                    <div className=" flex-1 h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl -mt-40">
                        <div className="rounded-lg ">
                            <div className="bg-gray-300 rounded-t-lg ">
                                <img
                                    alt="img-login"
                                    className="bg-blueGray-800 h-20 rounded-lg border-0 mx-auto"
                                    src={require("src/assets/image/E-meterai.png").default}
                                />
                            </div>
                            <div className="text-2xl text-center mt-6 ">
                                <h1 className="font-bold ">Sign in</h1>
                            </div>
                        </div>
                        <div className="flex flex-col  md:flex-row">
                            <main className="flex items-center justify-center p-6 sm:p-6 md:w-full">
                                <div className="w-full ">
                                    <LoginForm
                                        onSubmit={(data) => this.handleSubmit(data)}
                                    />
                                    <div className="text-right pt-4 text-blue-500">
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps, null)(withRouter(Login))