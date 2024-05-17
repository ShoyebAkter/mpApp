import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fbAccessToken: "",
  linkedinToken:"",
  fbFollowers: 0,
  totalFbPost: 0,
  fbPageImpression: 0,
  fbPageLikes:0,
  fbPageComment:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setfbAccessToken :(state,action)=>{
        state.fbAccessToken=action.payload
    },
    setLinkedinAccessToken :(state,action)=>{
        state.linkedinToken=action.payload
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
    },
    setFbPageComments : (state,action)=>{
        state.fbPageComment =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setfbAccessToken,setLinkedinAccessToken,setFbFollowers,
  setTotalFbPost,setFbPageImpression,setFbPageLikes,setFbPageComments } = counterSlice.actions

export default counterSlice.reducer