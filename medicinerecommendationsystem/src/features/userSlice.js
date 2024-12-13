import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  name: ""
}

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      // email and name mai data save ho jayenga 
      state.email = action.payload.email
      state.name = action.payload.name


    },
    unSetUserInfo: (state, action) => {
      // email and name mai data save ho jayenga 
      // email and name mai data ke place par null value set ho jayenga.

      state.email = action.payload.email
      state.name = action.payload.name
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo, unSetUserInfo } = userSlice.actions

export default userSlice.reducer