import React from 'react';
import SubmitButton from '../core/SubmitButton';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const ScheduleAbout = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
       navigate('/contact');

    }
  return (
    <div className='p-8 bg-[#F5F7F9] w-full'>
        <div className="relative w-full h-96">
      <img 
        src="https://via.placeholder.com/1200x600" 
        alt="Example" 
        className="w-[300px] h-screen object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-4xl px-4">
        <div className="text-center px-4 md:px-8">
          <h2 className="text-3xl lg:text-6xl  md:text-4xl font-semibold mb-4">Get fast and easy study loans <br/> easily and seamlessly</h2>
          <p className="mb-6 text-lg">Discover amazing products and more.</p>
          {/* <SubmitButton
                      label="Make a Schedule"
                      className='bg-white text-blue-500 py-2 px-6 rounded-6xl'
                    /> */}
          <div>
          <button onClick={handleClick} className="bg-white text-purple-400 font-semibold text-[16px] md:text-[18px] px-10 py-4 rounded-4xl shadow-md hover:bg-[#6355e6] hover:text-gray-800 transition-all duration-300">
            Make a Schedule <span className="ml-2 w-5 h-5">&rarr;</span>
          </button>
           
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default ScheduleAbout;
