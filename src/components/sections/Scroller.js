import React from "react";

const Scroller = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full p-14">
        <div className="w-1/6"></div>
        <div className=" w-5/5 flex justify-end">
          <p className="text-accent text-[7.5rem] font-semibold leading-[8rem]">
            {" "}
            We make scrolling worth it.
          </p>
        </div>
      </div>

      <div className="flex-1 h-full">  </div>
    </div>
  );
};

export default Scroller;
