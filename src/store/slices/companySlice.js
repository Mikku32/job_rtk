import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    companies: [],
    loading: false,
    isError: false,
    message: '',

    createLoading: false,
    createError: false,
    createMessage: '',
    
}

export const getCompanies = createAsyncThunk('company/getCompanies', async () => {
    const response = await fetch('http://localhost:3000/companies')
    const data = await response.json()
    return data
})

export const createCompany = createAsyncThunk('company/createCompany', async (company) => {
    const response = await fetch('http://localhost:3000/companies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(company)
    })
    const data = await response.json()
    return data
})




export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCompanies.pending, (state) => {
                state.loading = true
            })
            .addCase(getCompanies.fulfilled, (state, action) => {
                state.loading = false
                state.companies = action.payload
            })
            .addCase(getCompanies.rejected, (state, action) => {
                state.loading = false
                state.isError = true
                state.message = action.error
            })

            .addCase(createCompany.pending, (state) => {
                state.createLoading = true
            })
            .addCase(createCompany.fulfilled, (state, action) => {
                state.createLoading = false
                state.createMessage = action.payload
            })
            .addCase(createCompany.rejected, (state, action) => {
                state.createLoading = false
                state.createError = true
                state.createMessage = action.error
            })
    }
})


export default companySlice.reducer