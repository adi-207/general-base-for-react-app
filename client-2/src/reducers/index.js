import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

const { combineReducers } = require("redux");

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer 
})

