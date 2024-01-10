import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice.tsx";

/*
    Store recieves the requests, and checks request belongs to which slice
    and call function
 */

/* reducer parameter:
one slice -> works as root reducer
multiple slices -> combineReducer */

const store = configureStore({
    reducer:{
        users: userSlice
    }
});

export default store;

/*  to connect the application to redux */
// import { Provider } from 'react-redux';
// import store and than wrap App componebt inside the provider