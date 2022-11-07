import { configureStore } from "@reduxjs/toolkit";

const reducer = {
    user: null
}
const store = configureStore({reducer });

export default store;