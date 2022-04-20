const initialState = {
    sidebarOpen: false,
    ProfileMenuOpen: false,
    DropdownMenuOpen: false,
    Mode: false,
    loading: false,
    LoginShowPassword: false,
    RegisShowPassword: false,
    RegisShowPasswordConfirm: false,
    disable: false,
    showModal: false,
    formUpdate: false,
    NumberVitual: false,
    NumberFrom: false,
    NumberTo: false,
    btnDropDown: 10,
    btnDropDownShow: false,
    changePassword: false,
    shidebarMinize: false,
    menuDesktop: true,
}

const ReduxState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        default:
            return state
    }
}
export default ReduxState;
