import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>
        {
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){
const remainingProduct =state.filter(item=>item.id!=existingProduct.id)
existingProduct.quantity++
existingProduct.totalPrice=existingProduct.quantity*existingProduct.price 
state=({...remainingProduct,existingProduct})
            }
            else{
state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
            return  state.filter(item=>item.id!=action.payload)
          },
        emptyCart:(state)=>{
            return state=[]
          },
        incQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price 
            const remainingProduct =state.filter(item=>item.id!=existingProduct.id)
            state=({...remainingProduct,existingProduct})
          },
          decQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price 
            const remainingProduct =state.filter(item=>item.id!=existingProduct.id)
            state=({...remainingProduct,existingProduct})
          }
    }
})
export const {addToCart,removeCartItem,emptyCart,incQuantity,decQuantity}=cartSlice.actions
export default cartSlice.reducer