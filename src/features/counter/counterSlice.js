import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fbAccessToken: "",
  instaAccessToken:"",
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
  youtube_total_views:0,
  youtube_comment:0,
  youtube_likes:0,
  instaFollowers:0,
  instaTotalPost:0,
  instaImpression:0,
  instaMediaLikes:0,
  instaMediaComments:0,
  template:null,
  showBuilder:false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setfbAccessToken :(state,action)=>{
        state.fbAccessToken=action.payload
    },
    setInstaAccessToken :(state,action)=>{
        state.instaAccessToken=action.payload
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
    setYoutubeComment : (state,action)=>{
      state.youtube_comment =action.payload
    },
    setYoutubeLikes : (state,action)=>{
      state.youtube_likes =action.payload
    },
    setInstaFollowers : (state,action)=>{
      state.instaFollowers =action.payload
    },
    setInstaTotalPost : (state,action)=>{
      state.instaTotalPost =action.payload
    },
    setInstaImpression : (state,action)=>{
      state.instaImpression =action.payload
    },
    setInstaMediaLikes : (state,action)=>{
      state.instaMediaLikes =action.payload
    },
    setInstaMediaComment : (state,action)=>{
      state.instaMediaComments =action.payload
    },
    setTemplate : (state,action)=>{
      state.template =action.payload
    },
    setShowBuilder : (state,action)=>{
      state.showBuilder =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setfbAccessToken,setInstaAccessToken,setLinkedinAccessToken,setFbFollowers,
  setTotalFbPost,setFbPageImpression,setFbPageLikes,setFbPageComments,setShowBuilder,
  setLinkedinCode,setYoutubeToken,setLinkedinState,setChannelId,setYoutubeVideoList,
  setYoutubeTotalVideo,setYoutubeSubscriber,setYoutubeTotalViews,setYoutubeComment,setYoutubeLikes,
  setInstaFollowers,setInstaTotalPost,setInstaImpression,setInstaMediaLikes,setInstaMediaComment,setTemplate
} = counterSlice.actions

export default counterSlice.reducer