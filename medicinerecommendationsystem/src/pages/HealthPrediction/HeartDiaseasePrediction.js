import React, { useState } from 'react'
import { useHeartDiseaseModelPredictorMutation } from '../../services/userAuthApi';
import { Alert } from 'reactstrap';



const HeartDiaseasePrediction = () => {

  const [server_msg, setServerMsg] = useState({})


  const [heartDiseaseModelPredictor, { isLoading }] = useHeartDiseaseModelPredictorMutation();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      age: data.get('age'),
      sex: data.get('gender'),
      cp: data.get('cp_model'),
      trestbps: data.get('trestbps_model'),
      chol: data.get('chol_model'),
      fbs: data.get('fbs_model'),
      restecg: data.get('restecg_model'),
      thalach: data.get('thalach_model'),
      exang: data.get('exang_model'),
      oldpeak: data.get('oldpeak_model'),
      slope: data.get('slope_model'),
      ca: data.get('ca_model'),
      thal: data.get('thal_model'),
    }

    console.log("actualData is :-  ", actualData);

    const res = await heartDiseaseModelPredictor(actualData)
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

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit} >
        <div className="mb-5">
          <label for="age" className="block mb-2 text-sm font-medium text-gray-900 ">age :- </label>
          <input type="number" id="age" name='age' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
          <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 ">sex :- </label>
          <input type="text" id="gender" name='gender' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>







        <div className="mb-5">
          <label for="cp_model" className="block mb-2 text-sm font-medium text-gray-900 ">cp :- </label>
          <input type="number" id="cp_model" name='cp_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="trestbps_model" className="block mb-2 text-sm font-medium text-gray-900 ">trestbps :- </label>
          <input type="number" id="trestbps_model" name='trestbps_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>







        <div className="mb-5">
          <label for="chol_model" className="block mb-2 text-sm font-medium text-gray-900 ">chol_model :- </label>
          <input type="number" id="chol_model" name='chol_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="fbs_model" className="block mb-2 text-sm font-medium text-gray-900 ">fbs :- </label>
          <input type="number" id="fbs_model" name='fbs_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>








        <div className="mb-5">
          <label for="restecg_model" className="block mb-2 text-sm font-medium text-gray-900 ">restecg :- </label>
          <input type="number" id="restecg_model" name='restecg_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="thalach_model" className="block mb-2 text-sm font-medium text-gray-900 ">thalach :- </label>
          <input type="number" id="thalach_model" name='thalach_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="exang_model" className="block mb-2 text-sm font-medium text-gray-900 ">thalach :- </label>
          <input type="number" id="exang_model" name='exang_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>







        <div className="mb-5">
          <label for="oldpeak_model" className="block mb-2 text-sm font-medium text-gray-900 ">oldpeak :- </label>
          <input type="number" id="oldpeak_model" name='oldpeak_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="slope_model" className="block mb-2 text-sm font-medium text-gray-900 ">slope :- </label>
          <input type="number" id="slope_model" name='slope_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>






        <div className="mb-5">
          <label for="ca_model" className="block mb-2 text-sm font-medium text-gray-900 ">ca :- </label>
          <input type="number" id="ca_model" name='ca_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-5">
          <label for="thal_model" className="block mb-2 text-sm font-medium text-gray-900 ">thal :- </label>
          <input type="number" id="thal_model" name='thal_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>


        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

      {!server_msg.msg ? "" :

        <>
          <Alert security='success'>{server_msg.msg}</Alert>
          <div>
            Disease is {server_msg.disease}
          </div>
        </>

      }




    </div>
  )
}

export default HeartDiaseasePrediction
