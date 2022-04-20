import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ApiRes from "./ApiRes";
import ReduxState from './ReduxState'

export default combineReducers({
    ApiRes,
    ReduxState,
    form: formReducer,
});