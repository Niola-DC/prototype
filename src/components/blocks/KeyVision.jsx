import React from 'react';
import { FaClipboard } from 'react-icons/fa';

const KeyVision = () => {
  const vision = [
    {
      id: '001',
      title: 'Envision Your Future',
      description: 'We envision a future where no student is left behind due to financial constraints.',
      image: '/images/vision1.jpg'
    },
    {
      id: '002',
      title: 'Transforming Education',
      description: 'Payskul transforms the education sector, ensuring schools thrive sustainably.',
      image: '/images/vision2.jpg'
    },
    {
      id: '003',
      title: 'Goal Achievement',
      description: 'Students can now achieve their academic goals with ease and stress free.',
      image: '/images/vision3.jpg'
    },
    {
      id: '004',
      title: 'Education Planning',
      description: 'We help you plan your education from primary to professional certifications.',
      image: '/images/vision4.jpg'
    }
  ];

  return (
    <div className="py-12 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#1f2937]">Our Key Visions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-18 lg:px-2">
        {vision.map((item) => (
          <div
            key={item.id}
            className="bg-[#F5F7F9] rounded-xl shadow-md overflow-hidden flex flex-col justify-between h-[350px]"
          >
            <div className="p-4 flex-grow">
              <div className='flex flex-row gap-24'>
              <p className="text-sm font-bold text-black mb-1 mr-10">{item.id}</p>
              <div className='bg-white rounded-full w-10 h-10 px-3 mx-22 lg:mx-4 py-2'>
              <FaClipboard size={20} />

              </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-8">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div className="h-[50%]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyVision;
