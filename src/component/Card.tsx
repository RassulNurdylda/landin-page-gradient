import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center py-32 text-white">
        <div className="flex flex-wrap rounded-lg bg-gradient-to-r from-bg-pipink via-bg-pink via-bg-blue to-bg-cyan px-12 py-12">
          <img src="pic4.png" />
          <div className="flex flex-col pl-10">
            <p className="w-[24ch] text-2xl font-medium leading-relaxed">
              Maria Kowalska
            </p>
            <p className="w-[24ch] mt-5 font-medium leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
          </div>
        </div>
        <div className="flex flex-wrap rounded-lg bg-gradient-to-r from-bg-pipink via-bg-pink via-bg-blue to-bg-cyan px-12 py-12">
          <img src="pic4.png" />
          <div className="flex flex-col pl-10">
            <p className="w-[24ch] text-2xl font-medium leading-relaxed">
              Maria Kowalska
            </p>
            <p className="w-[24ch] mt-5 font-medium leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
