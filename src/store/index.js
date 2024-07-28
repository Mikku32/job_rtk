import { configureStore } from "@reduxjs/toolkit";
import { companyslice } from "./slice/companySlice";


const store = configureStore({
    reducer: {
        company : companyslice.reducer
    },
    devTools: true
});

export default store
