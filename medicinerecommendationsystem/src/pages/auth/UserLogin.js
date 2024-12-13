import React from 'react'
import { TextField, Button, Box, Alert, Typography, CircularProgress, } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../services/userAuthApi'
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useEffect, useState } from 'react';

// use dispatch for data modification
import { useDispatch } from 'react-redux';


import { setUserToken } from '../../features/authSlice';


const UserLogin = () => {

    const dispatch = useDispatch()



    const navigate = useNavigate();
    const [server_error, setServerError] = useState({})  // {} make it objects




    //   when data in process condition at that during isLoading have true value
    const [loginUser, { isLoading }] = useLoginUserMutation()

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log(actualData);

        const res = await loginUser(actualData)
        if (res.error) {
            // console.log(res.error.data.errors)
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            // console.log(typeof(res.data))
            // console.log(res.data)


            // calling f() which will store token and this f() written in '../../services/LocalStorageService'
            // console.log(res.data.token)
            storeToken(res.data.token)     //  token store temperary in localStorage

            let { access_token } = getToken()
            dispatch(setUserToken({ access_token: access_token }))  // access_token will be store in User state permanent and it can be access from any where

            navigate('/dashboard')

        }

    }


    // page refresh karne ke baad bhi token hamesha save   rahenga.
    let { access_token } = getToken()
    useEffect(() => {
        dispatch(setUserToken({ access_token: access_token }))  // access_token will be store in User state permanent and it can be access from any where


    }, [access_token, dispatch])




    return (

        <form className="max-w-lg mx-auto mt-4  " id='login-form' onSubmit={handleSubmit}>

            {/* <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}> */}
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10, }} > {server_error.email[0]} </Typography> : ""}


            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
            {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10, }} > {server_error.password[0]} </Typography> : ""}


            <Box textAlign='center'>
                {/* <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button> */}
                { isLoading ? < CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}


            </Box>

            <div className='mb-3'>

                <NavLink to='/sendpasswordresetemail' className='mb-2' >Forgot Password ?</NavLink>
                <div className='mt-2'> 
                {server_error.non_field_errors ? <Alert severity='error' >{server_error.non_field_errors[0]}</Alert> : ""}

                </div>

            </div>
            {/* </Box> */}
        </form>

    )
}

export default UserLogin
