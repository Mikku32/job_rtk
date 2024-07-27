import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"



export const companyApi = createApi({
    reducerPath: 'companyApi',
    tagTypes: ['Companies'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => 'companies',
            providesTags: ['Companies']
        }),

        createCompany: builder.mutation({
            query: (company) => ({
                url: 'companies',
                method: 'POST',
                body: company
            }),
            invalidatesTags: ['Companies']
        })
    })
})

export const { useGetCompaniesQuery , useCreateCompanyMutation} = companyApi


