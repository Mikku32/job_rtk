import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"




export const jobApi = createApi({
    reducerPath:"jobApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),

    endpoints:(builder)=>({

        getJob:builder.query({
            query:()=>"/jobs"
        }),
    })
})



export const {useGetJobQuery} = jobApi