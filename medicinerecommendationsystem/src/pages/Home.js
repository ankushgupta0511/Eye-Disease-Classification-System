import React, { useState, useEffect } from 'react';
// import Footer from '../components/Footer';
import ModelViewer from '../ModelViewer';
import bg1 from '../assets/bg1.webp';
import Footer from '../components/Footer';
import Homeabout from './Homeabout';

const contentVariations = [
  {
    title: "Your Health is Our Mission",
    description: "At HealthMate, we believe in the power of preventive care. Our platform empowers you to make informed decisions about your health through personalized insights, enabling early detection and intervention for a healthier future.",
    buttonText: "Learn More About Preventive Care"
  },
  {
    title: "Empowering Your Health Journey",
    description: "HealthMate is designed to support your wellness journey. With real-time tracking of your vital signs and lifestyle habits, we provide you with actionable insights that adapt to your needs, helping you achieve optimal health and well-being.",
    buttonText: "Start Your Wellness Journey"
  },
  {
    title: "Together Towards Better Health",
    description: "Join a community that cares about your health. HealthMate offers not only personalized health recommendations but also a supportive network that motivates you to stay on track. Together, we can achieve greater wellness.",
    buttonText: "Join Our Health Community"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentVariations.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
      <div
        className="relative flex flex-col md:flex-row min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover', // Ensures the image covers the entire area
          backgroundPosition: 'center 20%' // Keeps the image centered
          // 'center 20%'
        }}
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 text-left z-10 shadow-lg rounded-lg m-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-6">
            {contentVariations[currentIndex].title}
          </h1>
          <p className="text-md md:text-lg text-gray-700 mb-6 leading-relaxed">
            {contentVariations[currentIndex].description}
          </p>
          <button className="px-6 py-3 bg-indigo-200 text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-indigo-300 transition duration-300">
            {contentVariations[currentIndex].buttonText}
          </button>
        </div>

        {/* Right Model */}
        <div className="flex-1 flex justify-center items-center">
          <ModelViewer />
        </div>
      </div>


      <Homeabout />
      < Footer />


    </>
  );
}

export default App;
