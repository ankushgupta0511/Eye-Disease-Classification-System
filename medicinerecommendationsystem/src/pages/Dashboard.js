import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import ChangePassword from './auth/ChangePassword';
import { useNavigate } from 'react-router-dom';

import { getToken, removeToken } from '../services/LocalStorageService';

import { useDispatch } from 'react-redux';

import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { setUserInfo } from '../features/userSlice';
import { useEffect, useState } from 'react';
import { unSetUserToken } from '../features/authSlice'


const Dashboard = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // User data  assign  blank during logout
    dispatch(unSetUserToken({
      name: "",
      email: ""
    }))


    // access_token assign  null  during logout
    dispatch(unSetUserToken({ access_token: null }))


    console.log("Logout Clicked");
    // calling removeToken() 
    removeToken()


    console.log("Token Delete!!");

    navigate('/login')

  }



  const dispatch = useDispatch()


  const { access_token } = getToken()

  // ye token 'useGetLoggedUserQuery' page par jayenga aur get request denga.
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  console.log(data);
  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  //store user data in Local State 
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name
      })
    }

  }, [data, isSuccess])


  // now we will store this data into redux Store State for access data from any where.
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])



  return (
    <div >
      <Grid container  >
        <Grid item sm={5} sx={{ backgroundColor: 'ButtonFace', p: 3, color: 'purple' }}>
          <h1>Dashboard</h1>
          <Typography variant='h5'>Email: {userData.email}</Typography>
          <Typography variant='h6'>Name: {userData.name}</Typography>
          <Button variant='contained' color='secondary' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
        </Grid>
        <Grid item sm={6} >
          <ChangePassword />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
