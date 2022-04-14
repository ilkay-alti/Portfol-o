import React from "react";

const Detail = () => {
  return (
    <div className="flex-auto overflow-auto">
      <div className="dark:text-white  title">About Me 👨‍</div>
      <div className="text-white pt-12 pb-32 subtitles ">
        A brief intro to who i am and how i do what i do:
      </div>
      <div className="text-white  title font-bold mb-6">
        I am <span className="uppercase">ilkay</span>
      </div>
      <div className="text-white pb-12 text-base sm:!text-base md:!text-xl lg:!text-2xl max-w-7xl">
        I am in Turkey,İlkay. I produce content on Design and Development. I
        enjoy learning software languages like WorldPress,React and React Native
        in addition to working with Python. I make researchs about security.
      </div>
      <button className="bg-[#188AEC] py-3 px-14 rounded-lg text-white font-medium  sm:text-base md:text-xl lg:text-2xl">
        CV
      </button>
    </div>
  );
};

export default Detail;
