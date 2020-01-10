import { combineReducers } from "redux";
import cartListReducer from "./cartListReducer";
import totalReducer from "./totalReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    cartList: cartListReducer,
    total: totalReducer,
    user: userReducer
});

export default reducers;