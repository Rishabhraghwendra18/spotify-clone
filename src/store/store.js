import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        user:userReducer
        // BQDdgwl0rnyb9xkFBvf7Gp8jE7R5ya45JSoerscX_u7zwpbbPVD7PNdG5SrvzHnckD1hbVfkzJ86ep8O_m2E2Zd1iGSz6Tuu4babjpoHgUBscruD2YOsT0F-y0GMq0rx1Z3mW1T99Xv1FHQmcsa25mv8PMJgSRSV9FRFC3d0wVjTZ3NXjohgDddY_xjQ17EmWgsU3LvVUChcfN3oCOH2
    },
  })
export default store;