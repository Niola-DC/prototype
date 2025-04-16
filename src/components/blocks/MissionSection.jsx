import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "/images/center.png",
    alt: "Group of students"
  },
  {
    src: "/images/main.png",
    alt: "Student smiling with laptop"
  },
  {
    src: "/images/faqs.png",
    alt: "More students in class"
  },
  {
    src: "/images/faqs.png",
    alt: "More students in class"
  }
];

const MissionSection = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
       navigate('/contact');

    }
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getImageStyle = (index) => {
    const total = images.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) {
      // Center image
      return "translate-x-0 scale-100 opacity-100 z-2";
    } else if (diff === 1) {
      // Right image
      return "translate-x-[60%] scale-90 opacity-50 z-1";
    } else if (diff === total - 1) {
      // Left image
      return "-translate-x-[60%] scale-90 opacity-50 z-1";
    } else {
      // Hidden images
      return "opacity-0 scale-75 z-0";
    }
  };

  return (
    <section className="max-w-screen bg-gradient-to-r from-white via-pink-50 to-pink-100 py-8 px-4 md:px-12 lg:px-32">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-[42px] md:text-[64px] font-normal leading-tight text-black mt-4">
          Discover Our Mission and
          <br className="hidden md:block" /> Values in Education
        </h1>
        <p className="text-[16px] md:text-[18px] font-medium text-black mt-6 md:mt-8 px-18">
          At Payskul, we are dedicated to making quality education accessible to all by easing
          financial burdens for parents and students. We aim to reduce school dropouts, promote
          literacy, and create opportunities for educational dreams to come true.
        </p>
        <div className="mt-10">
          <button onClick={handleClick} className=" bg-gradient-to-r from-[#796EFF] via-[#796EFF] to-pink-400 text-white font-semibold text-[16px] md:text-[18px] px-10 py-4 rounded-[10px] shadow-md hover:bg-[#6355e6] transition-all duration-300">
            Contact Us <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Marquee Image Section */}
      <div className="relative max-w-full mt-20 h-[360px] md:h-[420px] flex justify-center items-center overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute w-[70%] md:w-[560px] h-full rounded-3xl object-cover transition-all duration-1000 ease-in-out ${getImageStyle(index)}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
