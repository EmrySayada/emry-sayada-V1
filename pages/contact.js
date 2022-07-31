import React, { useState, useEffect } from "react";
import ActivityIndicator from "./components/activityIndecator";
import Footer from "./components/footer";
import Header from "./components/header";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2700);
  }, []);
  return (
    <>
      {loading === false ? (
        <>
          <Header />
          <title>Emry Sayada</title>
          <div className="flex flex-col h-screen items-center justify-center">
            <p className="font-Poppins mb-[10px] text-[24px] font-semibold animate-[fadeIn_1s_ease_forwards] opacity-0">
              Contact
            </p>
            <div className="flex flex-row justify-center items-center">
              <input
                placeholder="Email"
                type={"email"}
                className="bg-[#AAAAAA] opacity-0 h-[50px] w-[250px] border-[1px] rounded-[10px] font-Poppins placeholder-black pl-[20px] animate-[fadeIn_1s_100ms_ease_forwards] mr-[5px]"
              />
              <input
                placeholder="Name"
                type={"text"}
                className="bg-[#AAAAAA] opacity-0 h-[50px] w-[150px] border-[1px] rounded-[10px] font-Poppins placeholder-black pl-[20px] animate-[fadeIn_1s_200ms_ease_forwards] ml-[5px]"
              />
            </div>
            <textarea
              placeholder="What's on your mind?"
              type={"text"}
              className="bg-[#AAAAAA] h-[150px] w-[384px] border-[1px] rounded-[10px] font-Poppins opacity-0 placeholder-black pl-[20px] pt-[10px] mt-[20px] animate-[fadeIn_1s_300ms_forwards]"
            />
            <button className="h-[50px] w-[120px] opacity-0 bg-white/30 rounded-[10px] mt-[20px] border-2 hover:drop-shadow-lg transition-all group animate-[fadeIn_1000ms_400ms_ease_forwards]">
              <p className="font-Poppins font-medium transition-all text-black">
                Send
              </p>
            </button>
            <p className="flex flex-col font-Poppins mt-[10px] items-center justify-center phone:text-[14px]">
              The contact doesn&apos;t work as I am not looking for a job.
            </p>
          </div>
          <Footer id="footer" />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default Contact;
