import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { login } from "./action_creators";
import { search, user, authorization, message, update } from "./reducers";

const reducer = {
    user,
    search,
    authorization,
    message,
    update
}
const store = configureStore({reducer, middleware: getDefaultMiddleware({ serializableCheck: false }) });

export default store;