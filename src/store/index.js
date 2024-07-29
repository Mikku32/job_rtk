import { configureStore } from "@reduxjs/toolkit";
import { companyslice } from "./slice/companySlice";
import { companyApi } from "./slice/companyApi";


const store = configureStore({
    reducer: {
        company : companyslice.reducer,
        [companyApi.reducerPath]:companyApi.reducer  //rtk query
        
    },
    devTools: true,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(companyApi.middleware), //caching

});

export default store
