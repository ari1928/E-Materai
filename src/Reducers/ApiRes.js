
import {
    POST_USERS_LOGIN
} from "src/api/Actions"
let initialState = {
    postUsersLogin: false,
    errorUsersLogin: false,
}
const ApiRes = (state = initialState, action) => {
    switch (action.type) {
        case POST_USERS_LOGIN:
            return {
                ...state,
                postUsersLogin: action.payload.data,
                errorUsersLogin: action.payload.errorMessage,
            };
        default:
            return state;
    }
}
export default ApiRes