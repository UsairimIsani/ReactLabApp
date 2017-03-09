import { combineReducers }from "redux";
import userReducer from "./userReducer";
import donorReducer from "./donorsReducer";
let reducer = combineReducers({
    user : userReducer,
    donors: donorReducer
})
export default reducer;
