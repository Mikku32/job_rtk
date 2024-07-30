// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"


// const initialstate={
//     companies :[],
//     isLoading:false,
//     isError:false,
//     message:'',

//     addPostloading : false,
//     addPostisError : false,
//     addPostmessage : '',

// }

// export const getCompany = createAsyncThunk('company/getcompany',
//     async()=>{
//        const res= await axios.get("http://localhost:3000/companies")
      

//        return res.data
//     }
// )

// export const postCompany = createAsyncThunk('company/postcompany',
//     async(company)=>{
//         const res = await axios.post("http://localhost:3000/companies",company)

//         return res.data
//     }
// )



// export const companyslice = createSlice({
//     name : "company",
//     initialState : initialstate,
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder
//         .addCase(getCompany.pending,(state)=>{
//             state.isLoading = true
//         })
//         .addCase(getCompany.fulfilled,(state,action)=>{
//             state.isLoading = false

//             state.companies = action.payload
//         })
//         .addCase(getCompany.rejected,(state)=>{
//             state.isLoading = false
//             state.isError = true
//         })
//         .addCase(postCompany.pending,(state)=>{
//             state.addPostloading = true
//         })
//         .addCase(postCompany.fulfilled,(state)=>{
//             state.addPostloading = false
//         })
//         .addCase(postCompany.rejected,(state)=>{
//             state.addPostloading = false
//             state.addPostisError = true
//         })
//     }
// })


// export default companyslice.reducer