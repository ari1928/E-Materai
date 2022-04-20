import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import RegisterValidation from 'src/ReduxFormValidation/RegisterValidation';
import { FieldFormInput } from 'src/ReduxFrom/FIeldFromInput';
import {ClipLoader, BeatLoader} from "react-spinners";



const mapStateToProps = (state) => {
    return {
        loading: state.ReduxState.loading,
        showPassword: state.ReduxState.RegisShowPassword,
        showPasswordConfirm: state.ReduxState.RegisShowPasswordConfirm,
    };
};
class RegisterForm extends Component {

    ToggleShowPassword() {
        if (this.props.showPassword === false) {
            this.props.dispatch({ type: 'set', RegisShowPassword: true })
        } else {
            this.props.dispatch({ type: 'set', RegisShowPassword: false })
        }
    }
    ToggleShowPasswordConfim() {
        if (this.props.showPasswordConfirm === false) {
            this.props.dispatch({ type: 'set', RegisShowPasswordConfirm: true })
        } else {
            this.props.dispatch({ type: 'set', RegisShowPasswordConfirm: false })
        }
    }
    render() {
        const { showPassword, showPasswordConfirm, loading } = this.props
        const { handleSubmit } = this.props;
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                        <Field
                            label="Name"
                            name="name"
                            placeholder="Name"
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
                            component={FieldFormInput}
                            maxLength="50"
                            type="email"
                        />
                    </div>

                    <div className="relative w-full mb-3">
                        <Field
                            label="Password"
                            name="password"
                            autoComplete="off"
                            placeholder="Password"
                            component={FieldFormInput}
                            maxLength="20"
                            type={(showPassword) ? "text" : "password"}
                        />
                        <div className="absolute cursor-pointer top-7 right-3"
                            onClick={this.ToggleShowPassword.bind(this)}
                        >
                            <i className={(showPassword) ? "fa fa-eye-slash" : "fa fa-eye"} ></i>
                        </div>
                    </div>
                    <div className="relative w-full mb-3">
                        <Field
                            label="Confirm Password"
                            name="passwordConfirm"
                            autoComplete="off"
                            placeholder="Confirm Password"
                            component={FieldFormInput}
                            maxLength="20"
                            type={(showPasswordConfirm) ? "text" : "password"}
                        />
                        <div className="absolute cursor-pointer top-7 right-3"
                            onClick={this.ToggleShowPasswordConfim.bind(this)}
                        >
                            <i className={(showPasswordConfirm) ? "fa fa-eye-slash" : "fa fa-eye"} ></i>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        {!loading && (
                            <button
                                className="bg-gray-700  text-white text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Create Account
                            </button>
                        )}
                        {loading && (
                            <button
                                className="bg-gray-500 cursor-wait text-white text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Loading
                                <BeatLoader size={5} color={"#fff"} />
                                <ClipLoader size={15} color={"#fff"} />
                            </button>
                        )}
                    </div>
                </form>
            </>
        )
    }
}
RegisterForm = reduxForm({
    form: "formRegisterForm",
    validate: RegisterValidation,
    enableReinitialize: true,
})(RegisterForm);
export default connect(mapStateToProps, null)(RegisterForm)