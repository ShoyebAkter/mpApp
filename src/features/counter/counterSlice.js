import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fbAccessToken: "",
  fbFollowers: 0,
  totalFbPost: 0,
  fbPageImpression: 0
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setfbAccessToken,setFbFollowers,setTotalFbPost,setFbPageImpression } = counterSlice.actions

export default counterSlice.reducer