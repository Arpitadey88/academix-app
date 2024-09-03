import React from 'react';
import about from '../../../assets/about1.jpg';

const Banner = () => {
    return (
    <section
    className="relative bg-[url(https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat"
    >
    <div
        className="absolute inset-0 bg-gray-900/45 bg-opacity-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>

    <div
        className="relative mx-auto  px-4 py-32 lg:py-0 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-24"
    >
        <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right lg:mt-14 mt-6">
        <h1 className="text-3xl font-bold text-white sm:text-5xl">
        Partner For Your 

            <strong className="block font-bold primary-text">Future Of Learning. </strong>
        </h1>

        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        Empower your journey to success with our expertly crafted courses designed to inspire and challenge you.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
            href="#"
            className="block w-full rounded primary-bg px-12 py-3 text-sm font-medium text-white shadow hover:primary-text focus:outline-none active:primary-text sm:w-auto"
            >
            Get Started
            </a>

            <a
            href="#"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium primary-text shadow hover:primary-text focus:outline-none focus:ring active:primary-text sm:w-auto"
            >
            Learn More
            </a>
        </div>
        </div>
    </div>
    <div class="relative flex justify-center items-center dark:bg-gray-800 w-full  lg:pe-0 pe-1 mt-24">
    <div class="absolute max-w-5xl cursor-pointer dark:text-white z-40 ">
        <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1  primary-bg rounded-md dark:bg-gray-200"></span>
        <div class="overflow-hidden relative p-4 bg-white dark:bg-gray-800 primary-border border-2 border-gt-green dark:border-gray-300 rounded-md lg:hover:scale-105 transition duration-500">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3  lg:grid-cols-3 lg:gap-6">
              <div class="relative h-32 overflow-hidden rounded-md md:h-32 lg:h-32 ">
                <img
                  alt=""
                  src={about}
                  class="absolute inset-0 h-full w-full"
                />
              </div>
        
              <div class="col-span-2 flex items-center">
                <p class=" text-gray-600 text-md font-bold text-justify">
                At Academix, we are dedicated to providing cutting-edge educational solutions that empower students and educators alike. Our platform is tailored to foster academic growth and innovation, ensuring that every learner can thrive in today's dynamic educational landscape
                </p>
              </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    );
};

export default Banner;