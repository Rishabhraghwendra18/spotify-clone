import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        playlists:[],
        playing:false,
        item:null,
        token:null
    },
    reducers:{
        addUser:(state,action)=>{
            state=action.payload
        },
        addToken:(state,action)=>{
            state.token=action.payload
        },
        addPlaylist:(state,action)=>{
            state.playlists=action.payload
        },
    }
});

export const {addUser,addToken,addPlaylist} = userSlice.actions;
export default userSlice.reducer;