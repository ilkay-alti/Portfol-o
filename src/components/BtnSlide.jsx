import React from "react";

const BtnSlide = ({ direction, moveSlide }) => {
  return (
    <button onClick={moveSlide} className="flex items-center">
      {direction === "prev" ? (
        <FaArrowAltCircleLeft />
      ) : (
        <FaArrowAltCircleRight />
      )}
    </button>
  );
};

export default BtnSlide;
