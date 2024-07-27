import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./slices/companySlice";


const store = configureStore({
    reducer: {
        company: companySlice
    },
    devTools: true
});

export default store
