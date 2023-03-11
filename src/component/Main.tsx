import React from "react";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-bg-pipink via-bg-pink via-bg-blue to-bg-cyan">
      <div className="text-gray-200 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0">
            <span className="ml-3 text-3xl">Logo.</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center text-xl">
            <a className="mr-10 hover:text-gray-900">Home</a>
            <a className="mr-10 hover:text-gray-900">About</a>
            <a className="mr-10 hover:text-gray-900">Offer</a>
            <a className="mr-10 hover:text-gray-900">Testimonials</a>
            <a className="mr-10 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
      <div className="text-white py-24">
        <div className="grid grid-cols-2 place-items-center">
          <div className="content-center">
            <p className="text-3xl w-[20ch] font-medium leading-relaxed">
              Lorem ipsum dolor sit amet consec
            </p>
            <p className="text-xl w-[42ch] mt-[40px] font-normal leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </p>
            <button className="text-2xl mt-[40px] rounded-full border-4 border-white px-10 py-2">
              Learn more
            </button>
          </div>
          <div>
            <div className="ontent-center">
              <img src="/pic1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
