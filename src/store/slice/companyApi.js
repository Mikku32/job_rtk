import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const companyApi = createApi({

        tagTypes:["company"], //for reloading 

    reducerPath:"companyApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),


    endpoints:(builder)=>({
        //endpoint for getting
        getCompany:builder.query({
            query:()=>({
                url:"/companies",
                method:"GET"
            }),
            providesTags:["company"]  //for reloading
        }),

        //endpoint for posting
        postCompany : builder.mutation({
            query:(company)=>({
                url:"/companies",
                method:"POST",
                body:company
            }),
            invalidatesTags:["company"] //for reloading
        })
    })

})


export const {useGetCompanyQuery, usePostCompanyMutation} = companyApi