import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const companyApi = createApi({
    reducerPath:"companyApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),


    endpoints:(builder)=>({
        //endpoint for getting
        getCompany:builder.query({
            query:()=>"/companies"
        }),

        //endpoint for posting
        postCompany : builder.mutation({
            query:(company)=>({
                url:"/companies",
                method:"POST",
                body:company
            })
        })
    })

})


export const {useGetCompanyQuery, usePostCompanyMutation} = companyApi