import React, { useState } from 'react';
import { useEyeModelPredictorMutation } from '../../services/userAuthApi'; // Import your mutation
import { Alert, Box, Typography, useMediaQuery } from '@mui/material';
import { Button } from 'reactstrap';

const EyeDiseasePrediction = () => {
    const [eyeModelPredictor, { isLoading }] = useEyeModelPredictorMutation();
    const [serverError, setServerError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // For preview
    const [predictionOutput, setPredictionOutput] = useState(''); // For output

    const isMobile = useMediaQuery('(max-width:600px)'); // Media query for responsiveness

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set image preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            const res = await eyeModelPredictor(formData);
            if (res.error) {
                setServerError(res.error);
            } else {
                setServerError(null);
                setPredictionOutput(res.data.Prediction); // Assuming the API response has a "Prediction" field
            }
        } catch (error) {
            setServerError('Error processing your request.');
        }
    };

    const clearImage = () => {
        setImagePreview(null);
        setPredictionOutput('');
    };

    const getDiseaseDescription = (disease) => {
        switch (disease) {
            case 'cataract':
                return {
                    title: "Cataract",
                    description: "A cataract is the clouding of the lens in the eye, leading to a decrease in vision. Common symptoms include blurry vision and glare.",
                    color: "text-orange-600"
                };
            case 'diabetic_retinopathy':
                return {
                    title: "Diabetic Retinopathy",
                    description: "This condition occurs due to damage to the blood vessels of the retina in people with diabetes. It can lead to blindness if untreated.",
                    color: "text-red-600"
                };
            case 'glaucoma':
                return {
                    title: "Glaucoma",
                    description: "Glaucoma is a group of eye conditions that damage the optic nerve, often due to high eye pressure. It can lead to irreversible vision loss.",
                    color: "text-purple-600"
                };
            case 'normal':
                return {
                    title: "Normal",
                    description: "The eye appears to be healthy with no signs of disease or abnormalities. Continue regular check-ups to maintain good eye health.",
                    color: "text-green-600"
                };
            default:
                return { title: "", description: "", color: "" };
        }
    };

    return (
        <div className='bg-[#e0e7ff] min-h-screen py-6'>
            <Box display="flex" justifyContent="center" flexDirection={isMobile ? 'column' : 'row'}>
                {/* Left - File Upload */}
                <Box
                    width={isMobile ? '90%' : '45%'}
                    border="1px dashed #4CAF50"
                    p={4}
                    borderRadius="8px"
                    textAlign="center"
                    mb={isMobile ? 4 : 0}
                    style={{
                        backgroundColor: '#fff',
                        transition: 'border-color 0.3s',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Drop Image Here or Click to Upload
                    </Typography>

                    <form onSubmit={handleSubmit} id="eye-model-prediction-form" encType="multipart/form-data">
                        <Box
                            mt={2}
                            p={2}
                            border="2px dashed #4CAF50"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            style={{ height: '300px', cursor: 'pointer', position: 'relative', borderRadius: '12px' }}
                            onClick={() => document.getElementById('eye_disease_image').click()}
                        >
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Eye Preview"
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                            ) : (
                                <Typography variant="body2" color="textSecondary">
                                    Click or drag an image here to upload
                                </Typography>
                            )}

                            {/* Hidden input for uploading image */}
                            <input
                                id="eye_disease_image"
                                name="eye_disease_image"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                        </Box>

                        <Box textAlign="center" mt={3}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={!imagePreview || isLoading}
                                style={{
                                    opacity: imagePreview ? 1 : 0.5,
                                    cursor: imagePreview ? 'pointer' : 'not-allowed',
                                }}
                            >
                                {isLoading ? 'Processing...' : 'Predict Model'}
                            </Button>
                            <Button
                                type="button"
                                variant="outlined"
                                color="secondary"
                                onClick={clearImage}
                                style={{ marginLeft: '10px' }}
                            >
                                Clear
                            </Button>

                            {predictionOutput ? (
                                <div className='mt-2'>
                                    <Alert severity='success'>{predictionOutput.msg}</Alert>
                                </div>
                            ) : (
                                ""
                            )}
                        </Box>
                    </form>
                </Box>

                {/* Right - Output */}
                <Box
                    width={isMobile ? '90%' : '45%'}
                    ml={isMobile ? 0 : 4}
                    border="1px solid #ccc"
                    p={4}
                    borderRadius="8px"
                    textAlign="center"
                    style={{ backgroundColor: '#fff' }}
                >
                    <Typography variant="h6" gutterBottom>
                        <div className='text-3xl font-sans font-bold'>Output</div>
                    </Typography>

                    <Box>
                        {predictionOutput ? (
                            <>
                                <Typography variant="h5" className={`${getDiseaseDescription(predictionOutput.disease).color} font-bold`}>
                                    {getDiseaseDescription(predictionOutput.disease).title}
                                </Typography>
                                <Typography variant="body1" mt={2}>
                                    {getDiseaseDescription(predictionOutput.disease).description}
                                </Typography>
                            </>
                        ) : (
                            <Typography variant="body2">Your processed output will appear here.</Typography>
                        )}
                    </Box>
                </Box>

                {serverError && (
                    <Box color="red" textAlign="center" mt={2}>
                        <Typography variant="body2">{serverError}</Typography>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default EyeDiseasePrediction;
