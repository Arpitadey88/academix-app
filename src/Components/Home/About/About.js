import React from 'react';
import aboutBg from '../../../assets/aboutBg.jpg';
import check from '../../../assets/check-mark.png';

const About = () => {
    return (
    <section id="about">
    <div className="max-w-7xl mx-auto  px-4 pt-16 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
            <div className="w-full mb-10 sm:mb-0">
            <div className="relative h-full ml-0 mr-0">
                <span className="absolute top-0 left-0 w-full h-full lg:mt-4 lg:ml-4 mt-2 ml-2 primary-bg rounded"></span>
                <div className="relative h-64 sm:h-80 lg:h-96">
                    <img
                    alt=""
                    src={aboutBg}
                    className="absolute inset-0 h-full w-full object-cover rounded"
                    />
                </div>
            </div>
        </div>
        
      </div>

      <div className="relative flex items-center bg-gray-100 ">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-16 text-justify">
          <p className="text-md font-bold lg:text-lg">
          At Academix, our dedicated team of experts is committed to delivering exceptional educational services and support, ensuring that your academic projects are completed efficiently and effectively. By leveraging innovative technologies and industry best practices, we help you achieve your educational goals and drive academic success. 
          </p>

          <div className="flex items-center gap-4">
            <img
              src={check}
              alt=""
              className="aspect-square w-20 rounded-lg object-cover"
            />
            <p className="mt-0.5 text-grey">
            Explore how Academix's expertise can transform your learning experience and provide you with the tools and solutions needed to excel in today’s competitive educational landscape. 
            </p>
          </div>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={check} alt=""/>
            <p>Contact us today to learn more about our services and how we can assist you in your academic journey.</p>
        </li>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default About;