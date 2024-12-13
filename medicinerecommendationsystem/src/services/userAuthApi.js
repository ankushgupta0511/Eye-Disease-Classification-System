import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
    endpoints: (builder) => ({

        // below mutation use for data modify (like update delete etc.)
        modelPredictor: builder.mutation({
            query: (actualData) => {

                return {
                    url: `predict/symtoms_diagnosis/`,
                    method: 'POST',
                    body: actualData,
                    headers: {
                        'Content-type': 'application/json',
                    }

                }
            }
        }),

        // below mutation use for data modify (like update delete etc.)
        eyeModelPredictor: builder.mutation({
            query: (actualData) => {
                console.log("actualData post :- ",actualData)
                return {
                    url: `predict/eye-disease-prediction/`,
                    method: 'POST',
                    body: actualData,
                }
            }
        }),

        
        // below mutation use for data modify (like update delete etc.)
        heartDiseaseModelPredictor: builder.mutation({
            query: (actualData) => {
                return {
                    url: `predict/heart_diagnosis/`,
                    method: 'POST',
                    body: actualData,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),

        
        // below mutation use for data modify (like update delete etc.)
        diabetesDiseaseModelPredictor: builder.mutation({
            query: (actualData) => {
                return {
                    url: `predict/diabetes_diagnosis/`,
                    method: 'POST',
                    body: actualData,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),

        // below mutation use for data modify (like update delete etc.)
        registerUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'register/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),



        // below mutation use for data modify (like update delete etc.)
        loginUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'login/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),


        // below query use for data only getting data
        getLoggedUser: builder.query({
            query: (access_token) => {
                return {
                    url: 'profile/',
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${access_token}`,
                    }
                }
            }
        }),




        // below mutation use for data modify (like update delete etc.)
        changeUserPassword: builder.mutation({
            query: ({ actualData, access_token }) => {
                // console.log('inside ',actualData);

                return {
                    url: 'changepassword/',
                    method: 'POST',
                    body: actualData,
                    headers: {
                        'authorization': `Bearer ${access_token}`,
                    }
                }
            }
        }),



        // below mutation use for data modify (like update delete etc.)
        sendPasswordResetEmail: builder.mutation({
            query: (user) => {
                console.log('inside ', user);

                return {
                    url: 'send-reset-password-email/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),




        // below mutation use for data modify (like update delete etc.)
        resetPassword: builder.mutation({
            query: ({ actualData, id, token }) => {
                return {
                    url: `/reset-password/${id}/${token}/`,
                    method: 'POST',
                    body: actualData,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),

    }),
})

export const { useModelPredictorMutation, useRegisterUserMutation, useLoginUserMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation,useSendPasswordResetEmailMutation,useResetPasswordMutation,useEyeModelPredictorMutation,useDiabetesDiseaseModelPredictorMutation,useHeartDiseaseModelPredictorMutation } = userAuthApi