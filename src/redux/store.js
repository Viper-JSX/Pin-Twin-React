import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { login } from "./action_creators";
import { search, user, authorization, message } from "./reducers";

const reducer = {
    user,
    search,
    authorization,
    message
}
const store = configureStore({reducer, middleware: getDefaultMiddleware({ serializableCheck: false }) });

export default store;