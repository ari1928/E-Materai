import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { FieldFormInputAnim, } from 'src/ReduxFrom/FIeldFromInput';
import { ClipLoader, BeatLoader } from "react-spinners";
import { connect } from 'react-redux';
import LoginValidation from 'src/ReduxFormValidation/LoginValidation';

const mapStateToProps = (state) => {
    return {
        loading: state.ReduxState.loading,
        showPassword: state.ReduxState.LoginShowPassword,
    };
};
class loginForm extends Component {

    Member(e) {
        localStorage.setItem('remember', e.target.checked)
    }
    ToggleShowPassword() {
        if (this.props.showPassword === false) {
            this.props.dispatch({ type: 'set', LoginShowPassword: true })
        } else {
            this.props.dispatch({ type: 'set', LoginShowPassword: false })
        }
    }
    render() {
        const { showPassword, loading } = this.props
        const { handleSubmit } = this.props;
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                        <Field
                            label="Email *"
                            name="email"
                            placeholder=" "
                            component={FieldFormInputAnim}
                            maxLength="50"
                            type="email"
                        />
                    </div>
                    <div className="relative w-full mb-3 pt-5">
                        <div>
                            <Field
                                label="Password *"
                                name="password"
                                autoComplete="off"
                                placeholder=" "
                                component={FieldFormInputAnim}
                                maxLength="20"
                                type={(showPassword) ? "text" : "password"}
                            />
                            <div className="absolute cursor-pointer top-9 right-3"
                                onClick={this.ToggleShowPassword.bind(this)}
                            >
                                <i className={(showPassword) ? "fa fa-eye-slash" : "fa fa-eye"} ></i>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <input name="member" type="checkbox" className="focus:outline-none focus:ring-0"
                            onChange={this.Member.bind(this)}
                        />
                        <span className="ml-2">Remember me</span>
                    </div>
                    <div className="text-center mt-6">
                        <button
                            disabled={loading ? true : false}
                            className={(loading ? "bg-gray-300 cursor-wait " : "bg-blue-400 shadow hover:shadow-lg ") + "  text-white text-sm font-bold uppercase px-6 py-3 rounded  outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
                            type="submit"
                        >
                            {loading ?
                                <>
                                    Loading
                                    < BeatLoader size={5} color={"#fff"} />
                                    <ClipLoader size={15} color={"#fff"} />
                                </>
                                : " Sign in"}
                        </button>
                    </div>
                </form >

            </>
        )
    }
}
loginForm = reduxForm({
    form: "formLoginForm",
    validate: LoginValidation,
    enableReinitialize: true,
})(loginForm);
export default connect(mapStateToProps, null)(loginForm)