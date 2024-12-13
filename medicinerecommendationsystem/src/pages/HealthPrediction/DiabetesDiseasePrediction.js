import React, { useState } from 'react'
import { useDiabetesDiseaseModelPredictorMutation } from '../../services/userAuthApi';
import { Alert } from 'reactstrap';




const DiabetesDiseasePrediction = () => {

  const [server_msg, setServerMsg] = useState({})


  const [diabetesDiseaseModelPredictor, { isLoading }] = useDiabetesDiseaseModelPredictorMutation();




  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      Pregnancies: data.get('Pregnancies'),
      Glucose: data.get('Glucose'),
      BloodPressure: data.get('BloodPressure'),
      SkinThickness: data.get('SkinThickness'),
      Insulin: data.get('Insulin'),
      BMI: data.get('BMI'),
      DiabetesPedigreeFunction: data.get('DiabetesPedigreeFunction'),
      Age: data.get('Age'),
    }


    console.log("actualData is :-  ", actualData);


    const res = await diabetesDiseaseModelPredictor(actualData)
    if (res.error) {
      setServerMsg({})
      console.log(res.error.data.errors)
    }
    if (res.data) {
      setServerMsg(res.data.Prediction)
      console.log(res.data)

    }

  }




  return (
    <div>
      
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label for="Pregnancies" className="block mb-2 text-sm font-medium text-gray-900 ">Pregnancies :- </label>
          <input type="number" id="Pregnancies" name='Pregnancies' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
          <label for="Glucose" className="block mb-2 text-sm font-medium text-gray-900 ">Glucose :- </label>
          <input type="number" id="Glucose" name='Glucose' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>







        <div className="mb-5">
          <label for="BloodPressure" className="block mb-2 text-sm font-medium text-gray-900 ">BloodPressure :- </label>
          <input type="number" id="BloodPressure" name='BloodPressure' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="SkinThickness" className="block mb-2 text-sm font-medium text-gray-900 ">SkinThickness :- </label>
          <input type="number" id="SkinThickness" name='SkinThickness' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>







        <div className="mb-5">
          <label for="Insulin" className="block mb-2 text-sm font-medium text-gray-900 ">Insulin :- </label>
          <input type="number" id="Insulin" name='Insulin' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="BMI" className="block mb-2 text-sm font-medium text-gray-900 ">BMI :- </label>
          <input type="number" id="BMI" name='BMI' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>








        <div className="mb-5">
          <label for="DiabetesPedigreeFunction" className="block mb-2 text-sm font-medium text-gray-900 ">DiabetesPedigreeFunction :- </label>
          <input type="number" id="DiabetesPedigreeFunction" name='DiabetesPedigreeFunction' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="Age" className="block mb-2 text-sm font-medium text-gray-900 ">Age :- </label>
          <input type="number" id="Age" name='Age' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>




        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

      <div>


        {!server_msg.msg ? "" :

          <>
            <Alert security='success'>{server_msg.msg}</Alert>
            <div>
              Disease is {server_msg.disease}
            </div>
          </>

        }
      </div>



    </div >
  )
}

export default DiabetesDiseasePrediction
