import React from 'react';
import TickInCircle from '../core/TickInCircle';

const Goal = () => {
    return (
        <div className='bg-white max-w-screen h-full py-10'>
            <div className="flex flex-col lg:mx-20 bg-[#F5F7F9] lg:grid lg:grid-cols-2 lg:gap-12 items-center py-14 pt-20 px-3 lg:pt-8 md:px-10 lg:px-10 rounded-2xl">

                <div className="order-1 lg:order-2 flex justify-center lg:h-full">
                    <img
                        src='/images/center.png'
                        alt="Payskul Mockup"
                        className="w-fit h-[500px] lg:w-full lg:h-fit object-cover mb-8 lg:mr-10"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "";
                        }}
                    />
                </div>

                <div className="order-2 lg:order-1">
                    <h2 className="lg:max-w-5/6 text-3xl md:text-4xl font-semibold text-gray-900 text-center lg:text-left lg:ml-2">
                    Let’s know about our main goal
                    </h2>
                    <div className="space-y-3 text-center">
                        <p className="lg:max-w-5/6 text-sm text-black font-medium lg:text-left py-4 mx-2">
                        We offer on-demand access to affordable education loans with flexible repayment plans tailored to your needs, ensuring education isn’t interrupted by finances.
                        <br/>
                        <br/>

                        Other Services Include:
                        </p>
                        <div className='text-center justify-center flex lg:text-left'>
                        <ul className='text-center justify-center'>
                            <li>
                            <TickInCircle text='Education insurance to safe guard your child’s future'/> </li>
                           <li> <TickInCircle text='B2B transactions to support schools with fee management'/> </li>
                           <li> <TickInCircle text='Personalized loan structures with the academic calendar'/> </li>
                        </ul>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default Goal;