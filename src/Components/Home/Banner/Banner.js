import React from 'react';

const Banner = () => {
    return (
    <section
    className="relative bg-[url(https://img.freepik.com/free-photo/portrait-happy-students-sitting-with-textbooks-pc-tablet_1262-17978.jpg?t=st=1725287813~exp=1725291413~hmac=137fe3891b9eca9350d4041dc63ccdaca59cebfcafcc57300f2843f421060675&w=1060)] bg-cover bg-center bg-no-repeat"
    >
    <div
        className="absolute inset-0 bg-gray-900/25 bg-opacity-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
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
    </section>
    );
};

export default Banner;