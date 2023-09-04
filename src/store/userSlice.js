import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        playlists:[],
        discoverWeekly:null,
        playing:false,
        item:null,
        token:null,
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
        },
        addToken:(state,action)=>{
            state.token=action.payload
        },
        addPlaylist:(state,action)=>{
            state.playlists=action.payload
        },
        addDiscoverWeekly:(state,action)=>{
            state.discoverWeekly=action.payload;
        }
    }
});

export const {addUser,addToken,addPlaylist,addDiscoverWeekly} = userSlice.actions;
export default userSlice.reducer;