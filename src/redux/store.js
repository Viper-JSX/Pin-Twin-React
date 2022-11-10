import { configureStore } from "@reduxjs/toolkit";
import { login } from "./action_creators";
import { search, user, authorization } from "./reducers";

const reducer = {
    user,
    search,
    authorization
}
const store = configureStore({reducer });

export default store;