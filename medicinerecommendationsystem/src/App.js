import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import DiseasePrediction from './pages/HealthPrediction/DiseasePredictionBasedSymtoms';
import LoginReg from './pages/auth/LoginReg';
import SendPasswordResetEmail from './pages/auth/SendPasswordResetEmail'
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/auth/ResetPassword';


import { useSelector } from "react-redux";
import PredictionList from './pages/HealthPrediction/PredictionList';
import EyeDiseasePrediction from './pages/HealthPrediction/EyeDiseasePrediction';
import ModelViewer from './ModelViewer';
import HeartDiaseasePrediction from './pages/HealthPrediction/HeartDiaseasePrediction';
import DiabetesDiseasePrediction from './pages/HealthPrediction/DiabetesDiseasePrediction';

function App() {

  // import auth from User State
  const { access_token } = useSelector(state => state.auth)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path='/' index element={ <Navbar/> }/> */}
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='prediction-list' element={<PredictionList />} />
        <Route path='diesase-diagnosis' element={<DiseasePrediction />} />
        <Route path='eye-disease' element={<EyeDiseasePrediction />} />
        <Route path='heart-disease' element={<HeartDiaseasePrediction />} />
        <Route path='diabetes-disease' element={<DiabetesDiseasePrediction />} />
        {/* <Route path='/login' element={<LoginReg />} /> */}
        {/* agar user login hai or token hai to we again login page par naho ja sakta  */}
        <Route path='/login' element={!access_token ? <LoginReg /> : <Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sendpasswordresetemail' element={<SendPasswordResetEmail />} />
        <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
