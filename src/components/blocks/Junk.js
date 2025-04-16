import React, { useEffect, useState } from "react";

const images = [
  {
    src: "/images/center.png",
    alt: "Group of students"
  },
  {
    src: "/images/main.png",
    alt: "Student smiling with laptop"
  }
];

const MissionSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-white via-pink-50 to-white py-16 px-4 md:px-12 lg:px-32">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-[42px] md:text-[64px] font-light leading-tight text-black">
          Discover Our Mission and
          <br className="hidden md:block" /> Values in Education
        </h1>
        <p className="text-[16px] md:text-[18px] text-black mt-6 md:mt-8">
          At Payskul, we are dedicated to making quality education accessible to all by easing
          financial burdens for parents and students. We aim to reduce school dropouts, promote
          literacy, and create opportunities for educational dreams to come true.
        </p>
        <div className="mt-10">
          <button className="bg-[#796EFF] text-white font-semibold text-[16px] md:text-[18px] px-10 py-4 rounded-[10px] shadow-md hover:bg-[#6355e6] transition-all duration-300">
            Contact Us <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Marquee Image Section */}
      <div className="relative w-full mt-16 h-[360px] md:h-[420px] flex justify-center items-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute rounded-3xl w-full max-w-[560px] h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionSection;






import React from "react";

const TickInCircle = ({ size = 36, color = "text-purple-500", bg = "bg-purple-100" }) => {
  return (
    <div className={`flex items-center justify-center rounded-full ${bg} ${color}`} style={{ width: size, height: size }}>
      <svg
        className={`w-2/3 h-2/3`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
      
    </div>
  );
};

export default TickInCircle;
