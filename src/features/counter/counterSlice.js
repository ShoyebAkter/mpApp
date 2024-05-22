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
  youtube_channel_id:"",
  youtube_video_list: [],
  youtube_subscriber:0,
  youtube_total_video:0,
  youtube_total_views:0
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
    setYoutubeVideoList : (state,action)=>{
      state.youtube_video_list =action.payload
    },
    setYoutubeTotalVideo : (state,action)=>{
      state.youtube_total_video =action.payload
    },
    setYoutubeTotalViews : (state,action)=>{
      state.youtube_total_views =action.payload
    },
    setYoutubeSubscriber : (state,action)=>{
      state.youtube_subscriber =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setfbAccessToken,setLinkedinAccessToken,setFbFollowers,
  setTotalFbPost,setFbPageImpression,setFbPageLikes,setFbPageComments,
  setLinkedinCode,setYoutubeToken,setLinkedinState,setChannelId,setYoutubeVideoList,
  setYoutubeTotalVideo,setYoutubeSubscriber,setYoutubeTotalViews,
} = counterSlice.actions

export default counterSlice.reducer