import React, { useContext, useEffect, useRef } from "react";
import { createPopper } from "@popperjs/core";
import { Avatar, WindmillContext } from "@windmill/react-ui";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { useHistory, withRouter } from "react-router-dom";
import HeaderChangePassword from "./HeaderChangePassword";
import JwtToken from 'src/hash/JwtToken';
// import { ChangePasswordUsers, DeleteReduxDataServiceUsers } from "src/api/Actions/Service-Users/ServiceUsers";
// import encrypt from "src/hash/encrypt";
import HeaderMode from "./HeaderMode";
// import HeaderMode from "./HeaderMode";



const HeaderDropdownUser = () => {
    const {  toggleMode } = useContext(WindmillContext)
    // const decode = JwtToken(sessionStorage.getItem("accessToken") || localStorage.getItem('accessToken'))
    const dispatch = useDispatch()
    const dropdownPopoverShow = useSelector((state) => state.ReduxState.ProfileMenuOpen)
    // const putUsersChangePassword = useSelector((state) => state.ServiceUsers.putUsersChangePassword)
    // const errorUsersChangePassword = useSelector((state) => state.ServiceUsers.errorUsersChangePassword)
    const history = useHistory()
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        dispatch({ type: 'set', ProfileMenuOpen: true, sidebarOpen: false })
    };
    const closeDropdownPopover = () => {
        dispatch({ type: 'set', ProfileMenuOpen: false, sidebarOpen: false })
    };
    const Logout = () => {
        dispatch({ type: 'set', ProfileMenuOpen: false, sidebarOpen: false })
        Swal.fire({
            title: '',
            text: "Are you sure you want to sign out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Sign out',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                sessionStorage.clear()
                history.push("/login");
            }
        })
    }
    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!dropdownRef.current.contains(event.target)) {
                dispatch({ type: 'set', ProfileMenuOpen: false })
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })
    // useEffect(() => {
    //     if (errorUsersChangePassword !== false) {
            dispatch({ type: 'set', loading: false, changePassword: false, LoginShowPassword: false, RegisShowPassword: false, RegisShowPasswordConfirm: false })
    //     } 
    //     if (putUsersChangePassword !== false) {
            dispatch({ type: 'set', loading: false, changePassword: false, LoginShowPassword: false, RegisShowPassword: false, RegisShowPasswordConfirm: false })
    //         Swal.fire({
    //             text: "Change Password Success",
    //             icon: 'success',
    //             confirmButtonColor: '#3085d6',
    //             allowOutsideClick: false,
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 localStorage.clear()
    //                 sessionStorage.clear()
    //             }
    //         })
    //     }
    //     return () => {
            // dispatch(DeleteReduxDataServiceUsers())
    //     }
    // })

    const handleSubmit = (data) => {
        const encode = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword
        }
        const dataReq = {
            // encrypted: encrypt(JSON.stringify(encode))
        }
        // dispatch({ type: 'set', loading: true })
        // dispatch(ChangePasswordUsers(decode.id, dataReq))
        data.oldPassword = ""
        data.newPassword = ""
        data.confirmNewPassword = ""
    }
    return (
        <>
            <HeaderChangePassword
                onSubmit={(data) => handleSubmit(data)}
            />
            <div className="flex flex-wrap text-black ">
                <div className="w-full sm:w-6/12 md:w-4/12 ">
                    <div
                        ref={dropdownRef}
                        className="relative inline-flex align-middle w-full"
                    >
                        <button
                            className={
                                "rounded-full focus:shadow-outline-purple focus:outline-none"
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                            <Avatar
                                className="align-middle"
                                size="large"
                                src={require("src/assets/image/users.png").default}
                                alt=""
                                aria-hidden="true"
                            />
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "fixed text-base z-50 float-right rounded-lg py-2 px-4  list-none text-left shadow-lg bg-white dark:bg-gray-500"
                            }
                        >
                            <div
                                className="text-sm py-2 p-4 font-normal block w-52 rounded-xl whitespace-nowrap hover:bg-cool-gray-100 cursor-pointer dark:bg-gray-500 dark:text-white dark:hover:bg-gray-400"
                                onClick={toggleMode}
                          
                          >
                                <HeaderMode />

                            </div>
                            {/* <div
                                className="text-sm py-2 p-4 font-normal block w-52 rounded-xl whitespace-nowrap hover:bg-cool-gray-100 cursor-pointer dark:bg-gray-500 dark:text-white dark:hover:bg-gray-400"
                                // onClick={() => dispatch({ type: 'set', ProfileMenuOpen: false, changePassword: true })}
                            >
                                <i className=" fas fa-lock mr-3" />
                                Change Password

                            </div> */}
                            <div
                                className="text-sm py-2 p-4 font-normal block w-52 rounded-xl whitespace-nowrap hover:bg-cool-gray-100 cursor-pointer dark:bg-gray-500 dark:text-white dark:hover:bg-gray-400"
                                onClick={Logout}
                            >
                                <i className="w-4 h-4 mr-3 fas fa-sign-out-alt" aria-hidden="true" />
                                Log out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withRouter(HeaderDropdownUser)