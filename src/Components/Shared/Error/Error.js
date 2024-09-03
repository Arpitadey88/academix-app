import React from 'react';
import { useNavigate } from 'react-router-dom'
import errorImg from '../../../assets/404.gif';

const Error = () => {
    const navigate = useNavigate();
    return (
        <section
        className="relative bg-cover bg-center bg-no-repeat pt-24" style={{
          backgroundImage: `url(${errorImg})`
        }}
      >
        <div
          className="absolute inset-0 sm:bg-transparent  sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-40 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold  sm:text-5xl text-black text-center">
              Error 404 – Page Not Found!
            </h1>
            <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">

              <button className="btn text-center bg-gray-200 btn-md mt-2" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Back To Home</button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Error;