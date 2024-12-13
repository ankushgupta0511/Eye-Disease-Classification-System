import { Alert, Box, Button, Checkbox, CircularProgress, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useRegisterUserMutation } from '../../services/userAuthApi'
import { useNavigate } from 'react-router-dom';
import { storeToken } from '../../services/LocalStorageService';



const Ragistration = () => {

    const navigate = useNavigate();


    const [server_error, setServerError] = useState({})  // {} make it objects


    const [registerUser, { isLoading }] = useRegisterUserMutation()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password2: data.get('password2'),
            tc: data.get('tc'),
        }


        const res = await registerUser(actualData)
        if (res.error) {
            // console.log(res.error.data.errors)
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            // console.log(typeof(res.data))
            // console.log(res.data)

            // calling f() which will store token and this f() written in '../../services/LocalStorageService'
            // console.log(res.data.token);


            storeToken(res.data.token)
            navigate('/dashboard')

        }
    }

    return (
        // <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
        <form className="max-w-lg mx-auto mt-4 " id='registration-form' onSubmit={handleSubmit}>
            <TextField margin='normal' fullWidth id='name' name='name' label='Name' />
            {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10, }} > {server_error.name[0]} </Typography> : ""}

            <TextField margin='normal' fullWidth id='email' name='email' label='Email Address' />
            {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10, }} > {server_error.email[0]} </Typography> : ""}

            <TextField margin='normal' fullWidth id='password' name='password' label='Password' type='password' />
            {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10, }} > {server_error.password[0]} </Typography> : ""}

            <TextField margin='normal' fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
            {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10, }} > {server_error.password2[0]} </Typography> : ""}

            <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
            {server_error.tc ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10, }} > {server_error.tc[0]} </Typography> : ""}

            <Box textAlign='center' className='mb-2'>

                { isLoading ? < CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Registration</Button>}
                {server_error.non_field_errors ? <Alert severity='error' >{server_error.non_field_errors[0]}</Alert> : ""}
            </Box>


        </form>

        // </Box>
    )
}

export default Ragistration
