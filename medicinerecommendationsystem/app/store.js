import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'


import authReducer from '../features/authSlice'    // import authSlice  and we can change name from 'authSlice' to authReducer
import userReducer from '../features/userSlice'    // import userSlice  and we can change name from 'userSlice' to userReducer


export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth : authReducer,
    user : userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(store.dispatch)