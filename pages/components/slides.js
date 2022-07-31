import react, { useState } from "react";
import Slide from "./slide";

function Slides({ list }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="flex flex-col h-screen w-[90vh] items-center justify-center phone:w-[40vh]">
      <Slide content={list[currentSlide]} />
      <div className="flex flex-row justify-evenly w-[inherit] mt-[10vh]">
        {/* prev button */}
        <button
          onClick={() => {
            if (currentSlide == 0) {
              setCurrentSlide(list.length - 1);
            } else {
              setCurrentSlide(currentSlide - 1);
            }
          }}
          className="h-[50px] w-[120px] bg-white/30 rounded-[10px] mt-[20px] border-2 hover:drop-shadow-lg transition-all"
        >
          <p className="font-Poppins text-[16px] font-semibold">previous</p>
        </button>
        {/* next button */}
        <button
          onClick={() => {
            if (currentSlide == list.length - 1) {
              setCurrentSlide(0);
            } else {
              setCurrentSlide(currentSlide + 1);
            }
          }}
          className="h-[50px] w-[120px] bg-white/30 rounded-[10px] mt-[20px] border-2 hover:drop-shadow-lg transition-all"
        >
          <p className="font-Poppins text-[16px] font-semibold">next</p>
        </button>
      </div>
    </div>
  );
}

export default Slides;
