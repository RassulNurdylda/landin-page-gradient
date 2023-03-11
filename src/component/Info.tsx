import React from "react";

const Info = () => {
  return (
    <div className="bg-gradient-to-r from-bg-pipink via-bg-pink via-bg-blue to-bg-cyan text-white py-24">
      <div className="grid grid-cols-2 place-items-center">
        <div>
          <div className="content-center">
            <img src="/pic3.png" />
          </div>
        </div>
        <div className="content-center">
          <p className="text-3xl font-medium leading-relaxed">
            Lorem ipsum dolor
          </p>
          <p className="text-xl w-[55ch] py-8 font-normal leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <p className="text-xl w-[55ch] font-normal leading-relaxed">
            rhoncus dolor purus non enim praesent elementum facilisis leo, vel
            fringilla est ullamcorper eget nulla facilisi etiam dignissim
          </p>
          <p className="text-xl w-[55ch] py-8 font-normal leading-relaxed">
            diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
            quam viverra orci sagittis eu volutpat odio facilisis mauris sit
            amet massa
          </p>
          <button className="text-2xl mt-[40px] rounded-full border-4 border-white bg-white px-10 py-2 text-blue-200">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
