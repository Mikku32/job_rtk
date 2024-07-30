import { configureStore } from "@reduxjs/toolkit";
import { companyslice } from "./slice/companySlice";
import { companyApi } from "./slice/companyApi";
import { jobApi } from "./slice/jobsApi";


const store = configureStore({
    reducer: {
        company : companyslice.reducer,
        [companyApi.reducerPath]:companyApi.reducer,  //rtk query
        [jobApi.reducerPath]:jobApi.reducer
        
    },
    devTools: true,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(companyApi.middleware,jobApi.middleware), //caching
    

});

export default store
