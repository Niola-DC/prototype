import React from "react";

const MeetCEO = () => {
    return (
        <section className="max-w-screen px-8 pt-6 pb-14 md:px-12  bg-purple-50  lg:px-20">
            {/* Heading */}
            <div className="w-full px-4 py-16 md:px-12 lg:px-24 text-center justify-center">
                <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold  text-[#1f2937]">
                    Meet Our CEO
                </h2>
                <p className="text-sm text-semibold pt-2">We aim to share information about our CEO</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 relative rounded-2xl bg-white px-14 py-10 w-full">
                {/* Image Section */}
                <div className="w-[320px] h-[320px] min-w-[320px] relative z-1">
                    <img
                        src="/images/faqs.png"
                        alt="CEO Portrait"
                        className="w-full h-full object-cover rounded-full border-4 border-[#796EFF] shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-12  text-left ml-0 md:ml-16 relative w-full">
                    {/* First Paragraph + L Line */}
                    <div className="relative">
                        {/* L-shaped line */}
                        <div className="hidden lg:block absolute -left-20 top-3 mt-18">
                            <div className="w-14 h-[3px] bg-[#796EFF]"></div>
                            <div className="w-[2px] h-10 bg-[#796EFF] ml-13.5"></div>
                            <div className="w-24 h-[3px] bg-[#796EFF] ml-13.5"></div>
                        </div>
                        <p className="text-[16px] lg:text-2xl md:text-[18px] text-gray-700 leading-relaxed max-w-xl lg:ml-24">
                            Our passionate team of experts is led by
                            <span className="font-semibold font-2xl inline-block animate-bounce-color"> Adedayo Adegoke, </span>
                             Founder of Payskul and an experienced entrepreneur with over six years in the startup ecosystem. Previously at Kobo360, he managed operations generating over $300,000 monthly.
                        </p>


                    </div>

                    {/* Second Paragraph + L Line */}
                    <div className="relative">
                        {/* L-shaped line */}
                        <div className="hidden lg:block absolute -left-20 top-3">
                            <div className="w-14 h-[3px] bg-[#796EFF]"></div>
                            <div className="w-[2px] h-10 bg-[#796EFF] ml-13.5"></div>
                            <div className="w-28 h-[3px] bg-[#796EFF] ml-13.5"></div>
                        </div>
                        <p className="text-[16px] lg:text-2xl md:text-[18px] text-gray-700 leading-relaxed max-w-xl lg:ml-24 lg:mt-4">
                            Together with our team of dedicated experts, we are committed transforming education financing.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MeetCEO;
