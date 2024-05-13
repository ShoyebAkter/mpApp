import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fbAccessToken: "",
  fbFollowers: 0,
  totalFbPost: 0,
  fbPageImpression: 0,
  fbPageLikes:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setfbAccessToken :(state,action)=>{
        state.fbAccessToken=action.payload
    },
    setFbFollowers : (state,action)=>{
        state.fbFollowers =action.payload
    },
    setTotalFbPost : (state,action)=>{
        state.totalFbPost =action.payload
    },
    setFbPageImpression : (state,action)=>{
        state.fbPageImpression =action.payload
    },
    setFbPageLikes : (state,action)=>{
        state.fbPageLikes =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setfbAccessToken,setFbFollowers,setTotalFbPost,setFbPageImpression,setFbPageLikes } = counterSlice.actions

export default counterSlice.reducer