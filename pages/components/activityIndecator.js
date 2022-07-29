import React from "react";

const ActivityIndicator = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#AAAAAA] animate-[fadeIn_1s_ease_forwards]">
      <title>Emry Sayada</title>
      <div className="flex flex-col w-[25vh] justify-around h-[10vh] items-center">
        <div className="flex flex-row w-[100%] justify-around animate-[fadeOut_500ms_2s_ease_forwards]">
          <div className="h-[15px] w-[15px] bg-black rounded-full animate-[upDown_500ms_300ms_ease_infinite]"></div>
          <div className="h-[15px] w-[15px] bg-black rounded-full animate-[upDown_500ms_250ms_ease_infinite]"></div>
          <div className="h-[15px] w-[15px] bg-black rounded-full animate-[upDown_500ms_200ms_ease_infinite]"></div>
          <div className="h-[15px] w-[15px] bg-black rounded-full animate-[upDown_500ms_150ms_ease_infinite]"></div>
          <div className="h-[15px] w-[15px] bg-black rounded-full animate-[upDown_500ms_100ms_ease_infinite]"></div>
          <div className="h-[15px] w-[15px] bg-black rounded-full animate-[upDown_500ms_50ms_ease_infinite]"></div>
          <div className="h-[15px] w-[15px] bg-black rounded-full animate-[upDown_500ms_ease_infinite]"></div>
        </div>
        <p className="text-black mt-[100px] font-Poppins font-semibold text-2xl animate-[fadeOut_500ms_2.3s_ease_forwards]">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default ActivityIndicator;
