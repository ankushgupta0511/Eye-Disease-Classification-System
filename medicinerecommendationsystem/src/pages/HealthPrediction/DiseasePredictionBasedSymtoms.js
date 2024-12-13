import React, { useState } from 'react';
import { useModelPredictorMutation } from '../../services/userAuthApi';
import { Grid, Alert, Typography, TextField, Box, Button } from "@mui/material";
import { Modal, ModalHeader } from "reactstrap";

// symtoms list of dict.
// const symptoms_dict = { 'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2, 'continuous_sneezing': 3, 'shivering': 4, 'chills': 5, 'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8, 'ulcers_on_tongue': 9, 'muscle_wasting': 10, 'vomiting': 11, 'burning_micturition': 12, 'spotting_ urination': 13, 'fatigue': 14, 'weight_gain': 15, 'anxiety': 16, 'cold_hands_and_feets': 17, 'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20, 'lethargy': 21, 'patches_in_throat': 22, 'irregular_sugar_level': 23, 'cough': 24, 'high_fever': 25, 'sunken_eyes': 26, 'breathlessness': 27, 'sweating': 28, 'dehydration': 29, 'indigestion': 30, 'headache': 31, 'yellowish_skin': 32, 'dark_urine': 33, 'nausea': 34, 'loss_of_appetite': 35, 'pain_behind_the_eyes': 36, 'back_pain': 37, 'constipation': 38, 'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41, 'yellow_urine': 42, 'yellowing_of_eyes': 43, 'acute_liver_failure': 44, 'fluid_overload': 45, 'swelling_of_stomach': 46, 'swelled_lymph_nodes': 47, 'malaise': 48, 'blurred_and_distorted_vision': 49, 'phlegm': 50, 'throat_irritation': 51, 'redness_of_eyes': 52, 'sinus_pressure': 53, 'runny_nose': 54, 'congestion': 55, 'chest_pain': 56, 'weakness_in_limbs': 57, 'fast_heart_rate': 58, 'pain_during_bowel_movements': 59, 'pain_in_anal_region': 60, 'bloody_stool': 61, 'irritation_in_anus': 62, 'neck_pain': 63, 'dizziness': 64, 'cramps': 65, 'bruising': 66, 'obesity': 67, 'swollen_legs': 68, 'swollen_blood_vessels': 69, 'puffy_face_and_eyes': 70, 'enlarged_thyroid': 71, 'brittle_nails': 72, 'swollen_extremeties': 73, 'excessive_hunger': 74, 'extra_marital_contacts': 75, 'drying_and_tingling_lips': 76, 'slurred_speech': 77, 'knee_pain': 78, 'hip_joint_pain': 79, 'muscle_weakness': 80, 'stiff_neck': 81, 'swelling_joints': 82, 'movement_stiffness': 83, 'spinning_movements': 84, 'loss_of_balance': 85, 'unsteadiness': 86, 'weakness_of_one_body_side': 87, 'loss_of_smell': 88, 'bladder_discomfort': 89, 'foul_smell_of urine': 90, 'continuous_feel_of_urine': 91, 'passage_of_gases': 92, 'internal_itching': 93, 'toxic_look_(typhos)': 94, 'depression': 95, 'irritability': 96, 'muscle_pain': 97, 'altered_sensorium': 98, 'red_spots_over_body': 99, 'belly_pain': 100, 'abnormal_menstruation': 101, 'dischromic _patches': 102, 'increased_appetite': 104, 'polyuria': 105, 'family_history': 106, 'mucoid_sputum': 107, 'rusty_sputum': 108, 'visual_disturbances': 110, 'receiving_blood_transfusion': 111, 'receiving_unsterile_injections': 112, 'coma': 113, 'stomach_bleeding': 114, 'distention_of_abdomen': 115, 'history_of_alcohol_consumption': 116, 'fluid_overload.1': 117, 'blood_in_sputum': 118, 'prominent_veins_on_calf': 119, 'palpitations': 120, 'painful_walking': 121, 'pus_filled_pimples': 122, 'blackheads': 123, 'scurring': 124, 'skin_peeling': 125, 'silver_like_dusting': 126, 'small_dents_in_nails': 127, 'inflammatory_nails': 128, 'blister': 129, 'red_sore_around_nose': 130, 'yellow_crust_ooze': 131 }
const symptoms_dict = { 'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2, 'continuous_sneezing': 3, 'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8, 'ulcers_on_tongue': 9, 'muscle_wasting': 10, 'vomiting': 11, 'burning_micturition': 12, 'spotting_ urination': 13, 'fatigue': 14, 'weight_gain': 15, 'anxiety': 16, 'cold_hands_and_feets': 17, 'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20, 'lethargy': 21, 'patches_in_throat': 22, 'irregular_sugar_level': 23, 'cough': 24, 'high_fever': 25, 'sunken_eyes': 26, 'breathlessness': 27, 'sweating': 28, 'dehydration': 29, 'indigestion': 30, 'headache': 31, 'yellowish_skin': 32, 'dark_urine': 33, 'nausea': 34, 'loss_of_appetite': 35, 'pain_behind_the_eyes': 36, 'back_pain': 37, 'constipation': 38, 'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41, 'yellow_urine': 42, 'yellowing_of_eyes': 43, 'acute_liver_failure': 44, 'fluid_overload': 45, 'swelling_of_stomach': 46, 'swelled_lymph_nodes': 47, 'malaise': 48, 'blurred_and_distorted_vision': 49, 'phlegm': 50, 'throat_irritation': 51, 'redness_of_eyes': 52, 'sinus_pressure': 53, 'runny_nose': 54, 'congestion': 55, 'chest_pain': 56, 'weakness_in_limbs': 57, 'fast_heart_rate': 58, 'pain_during_bowel_movements': 59, 'pain_in_anal_region': 60, 'bloody_stool': 61, 'irritation_in_anus': 62, 'neck_pain': 63, 'dizziness': 64, 'cramps': 65, 'bruising': 66, 'obesity': 67, 'swollen_legs': 68, 'swollen_blood_vessels': 69, 'puffy_face_and_eyes': 70, 'enlarged_thyroid': 71, 'brittle_nails': 72, 'swollen_extremeties': 73, 'excessive_hunger': 74, 'extra_marital_contacts': 75, 'drying_and_tingling_lips': 76, 'slurred_speech': 77, 'knee_pain': 78, 'hip_joint_pain': 79, 'muscle_weakness': 80, 'stiff_neck': 81, 'swelling_joints': 82, 'movement_stiffness': 83, 'spinning_movements': 84, 'loss_of_balance': 85, 'unsteadiness': 86, 'weakness_of_one_body_side': 87, 'loss_of_smell': 88, 'bladder_discomfort': 89, 'foul_smell_of urine': 90, 'continuous_feel_of_urine': 91, 'passage_of_gases': 92, 'internal_itching': 93, 'toxic_look_(typhos)': 94, 'depression': 95, 'irritability': 96, 'muscle_pain': 97, 'altered_sensorium': 98, 'red_spots_over_body': 99, 'belly_pain': 100, 'abnormal_menstruation': 101, 'dischromic _patches': 102, 'increased_appetite': 104, 'polyuria': 105, 'family_history': 106, 'mucoid_sputum': 107, 'rusty_sputum': 108, 'visual_disturbances': 110, 'receiving_blood_transfusion': 111, 'receiving_unsterile_injections': 112, 'coma': 113, 'stomach_bleeding': 114, 'distention_of_abdomen': 115, 'history_of_alcohol_consumption': 116, 'fluid_overload.1': 117, 'blood_in_sputum': 118, 'prominent_veins_on_calf': 119, 'palpitations': 120, 'painful_walking': 121, 'pus_filled_pimples': 122, 'blackheads': 123, 'scurring': 124, 'skin_peeling': 125, 'silver_like_dusting': 126, 'small_dents_in_nails': 127, 'inflammatory_nails': 128, 'blister': 129, 'red_sore_around_nose': 130, 'yellow_crust_ooze': 131 }

const DiseasePrediction = () => {
    const [modelPredictor, { isLoading }] = useModelPredictorMutation();
    const [server_error, setServerError] = useState({});
    const [server_msg, setServerMsg] = useState({});
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [poppopWindow, setPoppopWindow] = useState(false);
    const [poppopData, setPoppopData] = useState({ "predicted_model": "", "Category_msg": "" });

    const symptoms = Object.keys(symptoms_dict);

    const handleSelect = (event) => {
        const symptom = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedSymptoms([...selectedSymptoms, symptom]);
        } else {
            setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
        }
    };

    const predicted_msg = (e) => {
        setPoppopData(e);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            symtoms_name: data.get('selecet_symtoms'),
        };
        const res = await modelPredictor(actualData);
        if (res.error) {
            setServerMsg({});
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            setServerError({});
            setServerMsg(res.data.Predictions);
            document.getElementById("model-prediction-form").reset();
        }
    };

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const symptomsChunks = chunkArray(symptoms, 4);

    return (
        <>
            <div className='container'>
                
            <h1 className="text-2xl py-2 mt-2">Disease Predictions Based On Symtoms</h1>
            <hr />

                <Modal
                    fullWidth
                    isOpen={poppopWindow}
                    toggle={() => setPoppopWindow(!poppopWindow)}
                >
                    <ModalHeader
                        isOpen={poppopWindow}
                        toggle={() => setPoppopWindow(!poppopWindow)}
                    >
                        <div className="bg-white shadow-lg p-2 max-w-sm rounded-lg w-full mx-auto">
                            <div className='w-full mt-2 px-3 text-lg text-blue-800'>{poppopData.Category_msg}</div>
                            <hr />
                            <ul className='w-full list-disc'>
                                {poppopData.predicted_model.split(',').map((value, index) => (
                                    <li key={index} className='text-sm text-purple-950'>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </ModalHeader>
                </Modal>

                <Grid container spacing={2} className='min-h-screen'>
                    
                    <Grid item xs={12} md={6} className="pt-8 px-8 mt-4"> {/* Adjusted top padding, left padding, and margin-top */}
                        <h3 className="text-lg mb-2">Selected Symptoms:</h3>
                        <form onSubmit={handleSubmit} id='model-prediction-form'>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='selecet_symtoms'
                                value={selectedSymptoms.map(symptom => symptom).join(', ')}
                                label='Selected Symptoms'
                                readOnly
                            />
                            {server_msg.msg && <Alert severity='success'>{server_msg.msg}</Alert>}
                            {!server_error && <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>Something went wrong!</Typography>}

                            <Box textAlign='center'>
                                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Predict Model</Button>
                            </Box>

                            {server_msg.msg &&
                                <div>

                                    <Box className='flex justify-center'>
                                        <Button color="primary" onClick={() => { setPoppopWindow(true); predicted_msg({ "predicted_model": server_msg.predicted_disease, "Category_msg": "Disease" }); }} sx={{ mt: 3, mb: 2, px: 5 }}>Disease</Button>
                                        <Button color="primary" onClick={() => { setPoppopWindow(true); predicted_msg({ "predicted_model": server_msg.predicted_precations, "Category_msg": "Precautions" }); }} sx={{ mt: 3, mb: 2, px: 5 }}>Precautions</Button>
                                        <Button color="primary" onClick={() => { setPoppopWindow(true); predicted_msg({ "predicted_model": server_msg.predicted_descriptions, "Category_msg": "About Disease" }); }} sx={{ mt: 3, mb: 2, px: 5 }}>Description</Button>
                                    </Box>
                                    <Box className='flex justify-center -mt-6'>
                                        <Button color="primary" onClick={() => { setPoppopWindow(true); predicted_msg({ "predicted_model": server_msg.predicted_workout, "Category_msg": "Workout" }); }} sx={{ mt: 3, mb: 2, px: 5 }}>Workout</Button>
                                        <Button color="primary" onClick={() => { setPoppopWindow(true); predicted_msg({ "predicted_model": server_msg.predicted_diets, "Category_msg": "Diets" }); }} sx={{ mt: 3, mb: 2, px: 5 }}>Suggested Diets</Button>
                                    </Box>
                                </div>
                            }
                        </form>
                    </Grid>

                    <Grid item xs={12} md={6} className="p-4 border-l border-gray-300">
                        <h3 className="text-lg mb-2">Select Symptoms:</h3>
                        <div className='h-[80vh] overflow-auto'>
                            {symptomsChunks.map((chunk, chunkIndex) => (
                                <div key={chunkIndex} className='flex flex-wrap'>
                                    {chunk.map((symptom, index) => (
                                        <div className='w-1/2 p-1' key={index}>
                                            <label className='flex items-center p-2 border border-gray-300 rounded-lg text-sm font-medium bg-white'>
                                                <input
                                                    type="checkbox"
                                                    value={symptom}
                                                    checked={selectedSymptoms.includes(symptom)}
                                                    onChange={handleSelect}
                                                    className='mr-2 w-4 h-4'
                                                />
                                                {symptom.replace(/_/g, ' ')}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    );
};

export default DiseasePrediction;
