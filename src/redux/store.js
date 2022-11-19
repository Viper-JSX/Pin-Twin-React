import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { login } from "./action_creators";
import { app, search, user, authorization, message, confirmation, update } from "./reducers";

const reducer = {
    app, 
    user,
    search,
    authorization,
    message,
    confirmation,
    update
}
const store = configureStore({reducer, middleware: getDefaultMiddleware({ serializableCheck: false }) });

export default store;