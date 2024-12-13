import React, { useState } from 'react';
import { useEyeModelPredictorMutation } from '../../services/userAuthApi';
import { Alert, Box, Typography, useMediaQuery, Card, CardContent, CardActions } from '@mui/material';
import { Button } from 'reactstrap';

const EyeDiseasePrediction = () => {
    const [eyeModelPredictor, { isLoading }] = useEyeModelPredictorMutation();
    const [serverError, setServerError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [predictionOutput, setPredictionOutput] = useState('');
    const [predictionHistory, setPredictionHistory] = useState([]);

    const isMobile = useMediaQuery('(max-width:600px)');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
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
                const prediction = res.data.Prediction;

                const diseaseDescription = getDiseaseDescription(prediction.disease);
                const newPrediction = {
                    image: imagePreview,
                    disease: prediction.disease,
                    title: diseaseDescription.title,
                    description: diseaseDescription.description
                };

                setPredictionHistory((prevHistory) => [...prevHistory, newPrediction]);
                setPredictionOutput(prediction);
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
        <div className="bg-[#f5f7fa] min-h-screen py-6 px-4 flex flex-col items-center">
            <Box
                display="flex"
                justifyContent="space-between"
                width={isMobile ? '100%' : '85%'}
                maxWidth="1400px"
                gap={4}
            >
                {/* Left - Upload and Prediction Output Section */}
                <Box display="flex" flexDirection="column" gap={4} width="65%">
                    {/* File Upload */}
                    <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
                                Upload Eye Image
                            </Typography>
                            <form onSubmit={handleSubmit} id="eye-model-prediction-form" encType="multipart/form-data">
                                <Box
                                    mt={2}
                                    p={2}
                                    border="2px dashed #4CAF50"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{ height: '250px', cursor: 'pointer', borderRadius: '12px' }} 
                                    onClick={() => document.getElementById('eye_disease_image').click()}
                                    sx={{
                                        transition: 'border-color 0.3s ease',
                                        '&:hover': { borderColor: '#388e3c' },
                                    }}
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
                                <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
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
                                </CardActions>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Prediction Output */}
                    <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
                                Prediction Output
                            </Typography>
                            <Box mt={2}>
                                {predictionOutput ? (
                                    <>
                                        <Typography variant="h6" className={`${getDiseaseDescription(predictionOutput.disease).color} font-bold`} align="center">
                                            {getDiseaseDescription(predictionOutput.disease).title}
                                        </Typography>
                                        <Typography variant="body1" mt={2} align="center">
                                            {getDiseaseDescription(predictionOutput.disease).description}
                                        </Typography>
                                    </>
                                ) : (
                                    <Typography variant="body2" align="center">Your processed output will appear here.</Typography>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                {/* Right - History Section */}
                <Card sx={{ width: isMobile ? '100%' : '35%', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
                            Prediction History
                        </Typography>
                        <Box mt={2} sx={{ maxHeight: '535px', overflowY: predictionHistory.length > 4 ? 'auto' : 'hidden' }}>  {/* Scrollbar only when history is filled */}
                            {predictionHistory.length > 0 ? (
                                predictionHistory.map((item, index) => (
                                    <Box key={index} display="flex" alignItems="center" mb={2} borderBottom="1px solid #ccc" paddingBottom={1}>
                                        <img
                                            src={item.image}
                                            alt={`Prediction ${index + 1}`}
                                            style={{ width: '80px', height: 'auto', marginRight: '10px', borderRadius: '8px' }}
                                        />
                                        <Box>
                                            <Typography variant="h6" className={`${getDiseaseDescription(item.disease).color} font-bold`}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2">{item.description}</Typography>
                                        </Box>
                                    </Box>
                                ))
                            ) : (
                                <Typography variant="body2" align="center">No prediction history available.</Typography>
                            )}
                        </Box>
                    </CardContent>
                </Card>

            </Box>

            {serverError && (
                <Box color="red" textAlign="center" mt={2}>
                    <Typography variant="body2">{serverError}</Typography>
                </Box>
            )}
        </div>
    );
};

export default EyeDiseasePrediction;
