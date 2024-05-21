import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fbAccessToken: "",
  linkedinToken:"",
  fbFollowers: 0,
  totalFbPost: 0,
  fbPageImpression: 0,
  fbPageLikes:0,
  fbPageComment:0,
  linkedin_authorization_code:"",
  youtube_token:"",
  linkedin_state:"",
  youtube_channel_id:""
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
    setLinkedinCode : (state,action)=>{
      state.linkedin_authorization_code =action.payload
    },
    setYoutubeToken : (state,action)=>{
      state.youtube_token=action.payload
    },
    setLinkedinState : (state,action)=>{
      state.linkedin_state =action.payload
    },
    setChannelId : (state,action)=>{
      state.youtube_channel_id =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setfbAccessToken,setLinkedinAccessToken,setFbFollowers,
  setTotalFbPost,setFbPageImpression,setFbPageLikes,setFbPageComments,
  setLinkedinCode,setYoutubeToken,setLinkedinState,setChannelId } = counterSlice.actions

export default counterSlice.reducer