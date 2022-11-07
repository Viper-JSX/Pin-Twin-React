import { configureStore } from "@reduxjs/toolkit";
import { login } from "./action_creators";
import { user } from "./reducers";

const reducer = {
    user
}
const store = configureStore({reducer });

export default store;