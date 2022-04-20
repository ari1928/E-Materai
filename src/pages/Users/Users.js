
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DeleteReduxDataServiceUsers, GetAllUsers, PutUpdateUsers, RegisterUsers } from 'src/api/Actions/Service-Users/ServiceUsers'
import Swal from 'sweetalert2'
import UsersModal from './UsersModal';
import UsersTable from './UsersTable'
import JwtToken from 'src/hash/JwtToken';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        showModal: state.ReduxState.showModal,
        formUpdate: state.ReduxState.formUpdate,
        getAllUsers: state.ServiceUsers.getAllUsers,
        errorAllUsers: state.ServiceUsers.errorAllUsers,
        postUsersRegister: state.ServiceUsers.postUsersRegister,
        errorUsersRegister: state.ServiceUsers.errorUsersRegister,
        putUsersResetPassword: state.ServiceUsers.putUsersResetPassword,
        errorUsersResetPassword: state.ServiceUsers.errorUsersResetPassword,
        getIdUsers: state.ServiceUsers.getIdUsers,
        errorIdUsers: state.ServiceUsers.errorIdUsers,
        putUpdateUsers: state.ServiceUsers.putUpdateUsers,
        errorUpdateUsers: state.ServiceUsers.errorUpdateUsers,
        deleteUsers: state.ServiceUsers.deleteUsers,
        errorDeleteUsers: state.ServiceUsers.errorDeleteUsers,
    };
};
const decode = JwtToken(sessionStorage.getItem("access_token") || localStorage.getItem('access_token'))
class Users extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'set', showModal: false })
        // 
    }
    componentWillUnmount() {
        this.props.dispatch({ type: 'set', showModal: false })
    }
    handleSubmit(data) {
        const dataReq = {
            username: data.name,
            email: data.email,
            role: data.role
        }
        if (this.props.formUpdate !== false) {
            this.props.dispatch(PutUpdateUsers(this.props.getIdUsers.id, dataReq))
        } else {
            this.props.dispatch(RegisterUsers(dataReq))
        }
        this.props.dispatch({ type: 'set', loading: true })
        data.name = ""
        data.email = ""
        data.role = ""
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.postUsersRegister !== false) {
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())
            this.props.dispatch({ type: 'set', showModal: false, loading: false })
            Swal.fire({
                title: 'Create New Users Success',
                text: 'Email : ' + this.props.postUsersRegister.email,
                icon: 'success',
            })
        }
        if (this.props.errorUsersRegister !== false) {
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())
            this.props.dispatch({ type: 'set', showModal: false, loading: false })
        }
        if (this.props.putUsersResetPassword !== false) {
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())
            Swal.fire({
                title: 'Reset Password Users Success',
                icon: 'success',
            })
        }
        if (this.props.errorUsersResetPassword !== false){
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())         
        }
        if (this.props.putUpdateUsers !== false) {
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())
            this.props.dispatch({ type: 'set', showModal: false, loading: false, formUpdate: false })
            Swal.fire({
                title: 'Update Users Success',
                text: 'Email : ' + this.props.putUpdateUsers.email,
                icon: 'success',
            })
        }
        if (this.props.errorUpdateUsers !== false) {
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())
            this.props.dispatch({ type: 'set', showModal: false, loading: false, formUpdate: false })
        }
        if (this.props.deleteUsers !== false) {
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())
            Swal.fire(
                'Deleted!',
                'Users has been deleted.',
                'success'
            )
        }
        if (this.props.errorDeleteUsers !== false) {
            this.props.dispatch(DeleteReduxDataServiceUsers())
            this.props.dispatch(GetAllUsers())

        }
    }
    render() {
        return (
            <>
                {decode.role !== 'user' ? (
                    <>
                        <UsersTable />
                        <UsersModal
                            onSubmit={(data) => this.handleSubmit(data)} />
                    </>
                ) : (
                    <>
                        <Redirect to="/" />
                    </>
                )
                }
            </>
        )
    }
}
export default connect(mapStateToProps, null)(Users)