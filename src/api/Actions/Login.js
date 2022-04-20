
import router from '../UrlRouter'
export const POST_USERS_LOGIN = "POST_USERS_LOGIN"
export const UsersLogin = (data) => {
    return async (dispatch) => {
        return await router.Login(data)
            .then((response) => {

                dispatch({
                    type: POST_USERS_LOGIN,
                    payload: {
                        data: response,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    dispatch({
                        type: POST_USERS_LOGIN,
                        payload: {
                            data: false,
                            errorMessage: error.response.data.message,
                        },
                    });
                } else {
                    dispatch({
                        type: POST_USERS_LOGIN,
                        payload: {
                            data: false,
                            errorMessage: error.message,
                        },
                    });
                }
            });
    };
}