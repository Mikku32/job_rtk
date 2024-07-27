import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./slices/companySlice";
import { companyApi } from "./slices/companyApi";


const store = configureStore({
    reducer: {
        company: companySlice,
        [companyApi.reducerPath]: companyApi.reducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(companyApi.middleware)
});

export default store
