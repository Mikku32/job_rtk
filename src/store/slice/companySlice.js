import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialstate={
    companies :[],
    isLoading:false,
    isError:false,
    message:''
}

export const getCompany = createAsyncThunk('company/getcompany',
    async()=>{
       const res= await fetch("http://localhost:3000/companies")
       const data = await res.json()

       return data
    }
)



export const companyslice = createSlice({
    name : "company",
    initialState : initialstate,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCompany.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getCompany.fulfilled,(state,action)=>{
            state.isLoading = false

            state.companies = action.payload
        })
        .addCase(getCompany.rejected,(state)=>{
            state.isLoading = false
            state.isError = true
        })
    }
})


export default companyslice.reducer