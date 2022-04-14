import React from "react";

const Home = () => {
  return (
    <div className="flex-auto overflow-auto">
      <div className="dark:text-white  title">
        <div>Hello!👋🏻</div>
        <div>My name is Ololade</div>

        <div>
          I’m a Product
          <span className="bg-clip-text text-transparent w-fit dark:bg-gradient-to-r from-[#3B82F6] via-[#EC4899] to-[#3B82F6] ml-1 ">
            {" "}
            Designer
          </span>
        </div>
      </div>
      <div className="text-white pt-12 py-36 subtitles ">
        Let me help you grow your business and make your product look pretty
        while at it
      </div>
      <button className="bg-[#188AEC] py-3 px-14 rounded-lg text-white font-medium  sm:text-base md:text-xl lg:text-2xl">
        Say Hello
      </button>
    </div>
  );
};

export default Home;
