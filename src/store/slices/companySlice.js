import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    companies: [],
    loading: false,
    isError: false,
    message: '',
    
}

export const getCompanies = createAsyncThunk('company/getCompanies', async () => {
    const response = await fetch('http://localhost:3000/companies')
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
    }
})


export default companySlice.reducer