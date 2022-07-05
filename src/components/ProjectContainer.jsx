import React from "react";

const ProjectContainer = (props) => {
  return (
    <div className="flex flex-row  ">
      <div className="basis-3/4 flex flex-col  mx-5  justify-between pr-16">
        <div className="title">{props.name}</div>
        <div className="text-base  line-clamp-4 md:line-clamp-5 lg:line-clamp-6 ">
          {props.description}
        </div>
        <button
          onClick={() => window.open(props.h_link, "_blank")}
          className="bg-[#188AEC] w-fit py-3 px-14 rounded-lg text-white font-medium  sm:text-base md:text-xl lg:text-2xl "
        >
          View project
        </button>
      </div>
      <div className="flex justify-center items-center w-auto  ">
        <img className=" object-cover " src={props.image} />
      </div>
    </div>
  );
};

export default ProjectContainer;
