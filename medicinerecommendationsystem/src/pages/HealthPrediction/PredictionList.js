import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import diseaseImageURL from '../../assets/Symtoms_Diagnosis.png';
import eyeDiseaseImageURL from '../../assets/Eye_image2.png';
import DiabetiesImageURL from '../../assets/diabeties.webp';
import HeartImageURL from '../../assets/images2.webp';



import Footer from '../../components/Footer';

const PredictionList = () => {
  return (
    <>
      {/* <div className='py-5 bg-[#e0e7ff]'> */}
      <div className='bg-[#f5f7fa]'>

        <div className='py-3  container'>

          <h1 className="text-2xl ">Select Your Health Module </h1>
          <hr className='mb-6'/>

          {/* Module 1: Eye Disease Prediction */}
          <Box className='mb-12 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto p-4'>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src={eyeDiseaseImageURL}
                  alt="Eye Disease Prediction"
                  className="w-full rounded-lg shadow-lg"
                  style={{ maxHeight: '380px', objectFit: 'cover' }} // Adjust image height as needed
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom className='text-blue-600 mb-4'>
                  Eye Disease Prediction
                </Typography>
                <Typography variant="body1" paragraph className='px-4'>
                  Use this module to diagnose common eye conditions such as cataracts, glaucoma, and diabetic retinopathy. By uploading eye-related data or inputting your symptoms, you can assess your risk for these diseases and get recommendations for next steps.
                </Typography>
                <Typography variant="body1" paragraph className='px-4'>
                  Diseases covered in this module include:
                </Typography>
                <ul className='list-disc list-inside px-4'>
                  <li>Cataract</li>
                  <li>Diabetic Retinopathy</li>
                  <li>Glaucoma</li>
                  <li>Normal (No disease detected)</li>
                </ul>
                <Button
                  color="primary"
                  className='mt-4 hover:bg-blue-700 transition duration-300'
                  style={{ backgroundColor: '#007bff', padding: '10px 20px', float: 'right' }} // Align button to the right
                >
                  <Link to="/eye-disease" className='text-white' style={{ textDecoration: 'none' }}>
                    Start with Eye Disease Prediction
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>



          {/* Module 2: Disease Prediction Based on Symptoms */}
          <Box className='mb-12 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto p-4'>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src={diseaseImageURL}
                  alt="Disease Prediction"
                  className="w-full rounded-lg shadow-lg"
                  style={{ maxHeight: '350px', objectFit: 'cover' }} // Adjust image height as needed
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom className='text-blue-600'>
                  Disease Prediction Based on Symptoms
                </Typography>
                <Typography variant="body1" paragraph className='px-4'>
                  This module helps you predict potential diseases based on symptoms:
                </Typography>
                <ul className='list-disc list-inside px-4'>
                  <li>General symptoms: headaches, nausea, skin rashes, joint pain</li>
                  <li>Advanced algorithms mapping symptoms to over 40 diseases</li>
                  <li>Guidance on managing conditions: dietary, workouts, medications</li>
                  <li>Empowering users with timely insights and health management</li> {/* Added 10 words */}
                </ul>
                <Button
                  color="primary"
                  className='mt-4 hover:bg-blue-700 transition duration-300'
                  style={{ backgroundColor: '#007bff', padding: '10px 20px', float: 'right' }} // Align button to the right
                >
                  <Link to="/diesase-diagnosis" className='text-white' style={{ textDecoration: 'none' }}>
                    Start with Symptom-based Disease Prediction
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>



          {/* Module 3: Heart Disease Prediction */}
          <Box className='mb-12 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto p-4'>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src={HeartImageURL}
                  alt="Heart Disease Prediction"
                  className="w-full rounded-lg shadow-lg"
                  style={{ maxHeight: '380px', objectFit: 'cover' }} // Adjust image height as needed
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom className='text-blue-600 mb-4'>
                  Heart Disease Prediction
                </Typography>
                <Typography variant="body1" paragraph className='px-4'>
                  Use this module to diagnose heart conditions based on your health metrics and symptoms. By providing relevant data, you can evaluate your risk for heart diseases and receive recommendations.
                </Typography>
                <Typography variant="body1" paragraph className='px-4'>
                  Diseases covered in this module include:
                </Typography>
                <ul className='list-disc list-inside px-4'>
                  <li>Coronary Artery Disease</li>
                  <li>Heart Failure</li>
                  <li>Arrhythmia</li>
                  <li>Normal (No disease detected)</li>
                </ul>
                <Button
                  color="primary"
                  className='mt-4 hover:bg-blue-700 transition duration-300'
                  style={{ backgroundColor: '#007bff', padding: '10px 20px', float: 'right' }} // Align button to the right
                >
                  <Link to="/heart-disease" className='text-white' style={{ textDecoration: 'none' }}>
                    Start with Heart Disease Prediction
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Module 4: Diabetes Disease Prediction */}
          <Box className='mb-12 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto p-4'>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src={DiabetiesImageURL}
                  alt="Diabetes Disease Prediction"
                  className="w-full rounded-lg shadow-lg"
                  style={{ maxHeight: '350px', objectFit: 'cover' }} // Adjust image height as needed
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom className='text-blue-600 mb-4'>
                  Diabetes Disease Prediction
                </Typography>
                <Typography variant="body1" paragraph className='px-4'>
                  This module helps you predict diabetes risk based on your symptoms and health data. You can evaluate your risk and get personalized advice.
                </Typography>
                <Typography variant="body1" paragraph className='px-4'>
                  Diseases covered in this module include:
                </Typography>
                <ul className='list-disc list-inside px-4'>
                  <li>Type 1 Diabetes</li>
                  <li>Type 2 Diabetes</li>
                  <li>Normal (No disease detected)</li>
                </ul>
                <Button
                  color="primary"
                  className='mt-4 hover:bg-blue-700 transition duration-300'
                  style={{ backgroundColor: '#007bff', padding: '10px 20px', float: 'right' }} // Align button to the right
                >
                  <Link to="/diabetes-disease" className='text-white' style={{ textDecoration: 'none' }}>
                    Start with Diabetes Disease Prediction
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PredictionList;
