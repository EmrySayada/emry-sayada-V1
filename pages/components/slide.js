import react from "react";

function Slide({ content }) {
  return (
    <div className="h-[30vh] w-[90vh] bg-[#bbbbbb] items-center justify-center flex rounded-[10px] drop-shadow-xl phone:w-[40vh]">
      <p className="font-Poppins text-[18px] pl-[5vh] pr-[5vh] phone:text-[14px] text-center transition-all opacity-1">
        {content}
      </p>
    </div>
  );
}

export default Slide;
