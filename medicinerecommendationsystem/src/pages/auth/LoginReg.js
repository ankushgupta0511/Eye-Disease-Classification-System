import React, { useState } from 'react'
import { Grid, Card, Tabs, Tab, Box } from '@mui/material'
import Ragistration from './Ragistration';
import UserLogin from './UserLogin';
// import LoginRagistrationImage from '../../assets/LoginRagister.webp';
import LoginRagistrationImage from '../../assets/heart.webp';
import BgImage from '../../assets/Pharmacy.svg';


import Footer from '../../components/Footer';

// Sample image URL (replace with actual image path)
// const loginImageURL = 'https://via.placeholder.com/600x800?text=Login+Image';
const loginImageURL = LoginRagistrationImage;

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index} >
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const LoginReg = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            {/* <div className='mb-4' ></div> */}
            <Grid container sx={{ minHeight: '670px' }}> {/* Set a minHeight for the container */}
                {/* Left side for image */}
                <Grid item lg={6} md={6} sm={false} xs={false}>
                    <Box
                        sx={{
                            opacity: 0.9,
                            height: '100%', // Full height to match right side
                            backgroundImage: `url(${loginImageURL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: { xs: 'none', md: 'block' }, // Hide on extra small screens
                            borderRadius: '5px 0 0 5px'
                        }}
                    ></Box>
                </Grid>

                {/* Right side for login and registration */}
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card sx={{ margin: 'auto', minHeight: '600px', borderRadius: { xs: '5px', md: '0 5px 5px 0' } }}> {/* Ensure minimum height matches the left side */}

                        <Box sx={{ height: '100%' }}>

                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <div className='mt-4'>
                                    <Tabs value={value} onChange={handleChange} variant="fullWidth">
                                        <Tab label='Ragistration' sx={{ textTransform: 'none', fontWeight: 'bold' }} />
                                        <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }} />
                                    </Tabs>
                                </div>
                            </Box>



                            {/* Tab content */}

                            <TabPanel value={value} index={1}>
                                <UserLogin />
                            </TabPanel>
                            <TabPanel value={value} index={0}>
                                <Ragistration />
                            </TabPanel>



                        </Box>
                        {/* 
                        <div className="flex gap-3 w-full justify-center md:justify-start items-center mb-8 md:mb-0 ">
                            <img src={BgImage} height={60} width={60} alt="GitHub"  className="cursor-pointer flex justify-end" />
                        </div> */}
                    </Card>
                </Grid>
            </Grid>



            < Footer />
        </>
    )
}

export default LoginReg;
