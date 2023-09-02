import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        playlists:[],
        playing:false,
        item:null
    },
    reducers:{
        addUser:(state,action)=>{
            state=action.payload
        }
    }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;