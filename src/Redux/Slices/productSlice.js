import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const response=await axios.get("https://dummyjson.com/products")
  sessionStorage.setItem("allProducts",JSON.stringify(response.data.products))
    return response.data.products
})

const productSlice= createSlice(
    {
        name:'products',
        initialState:{
            allProducts:[],
            allproductDummy:[],
            loading:false,
            error:"",
            productsPerPage:10,
            currentpage:1
        },
        reducers:{
    searchByproduct:(state,action)=>{
    state.allProducts= state.allproductDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
            },
    navigateToNextPage:(state)=>{
    state.currentpage++
    },
    navigateToPrevPage:(state)=>{
    state.currentpage--
    }
        
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchProducts.pending,(state)=>{
                state.loading=true
            })
            builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                state.loading=false
                state.allProducts=action.payload
                state.allproductDummy=action.payload
            })
            builder.addCase(fetchProducts.rejected,(state)=>{
                state.loading=false
                state.allProducts=[]
                state.error="API call failed....please try after some time "
            })
        }
    }
)
export const {searchByproduct,navigateToNextPage,navigateToPrevPage}=productSlice.actions
export default productSlice.reducer