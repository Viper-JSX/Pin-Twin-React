import { configureStore } from "@reduxjs/toolkit";
import { login } from "./action_creators";
import { search, user } from "./reducers";

const reducer = {
    user,
    search
}
const store = configureStore({reducer });

export default store;