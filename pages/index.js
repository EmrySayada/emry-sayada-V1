import React, { useState, useEffect, useRef } from "react";
import ActivityIndicator from "./components/activityIndecator";
import backImg from "./assets/back.svg";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2700);
  }, []);
  return (
    <>
      {loading === false ? (
        <>
          <Header />
          <div className="flex flex-col overflow-hidden bg-[#AAAAAA] items-center justify-center">
            <div className="h-[90vh] w-screen flex items-center justify-center flex-col">
              <p
                className="font-Poppins text-4xl font-semibold animate-[fadeIn_400ms_ease_forwards] group phone:text-3xl"
                id="header1"
              >
                <span className="opacity-0 animate-[fadeIn_200ms_200ms_ease_forwards]">
                  Hello,
                </span>{" "}
                <span className="opacity-0 animate-[fadeIn_200ms_400ms_ease_forwards]">
                  I
                </span>{" "}
                <span className="opacity-0 animate-[fadeIn_200ms_600ms_ease_forwards]">
                  am
                </span>{" "}
                <span className="opacity-0 animate-[fadeIn_200ms_800ms_ease_forwards] group-hover:text-white transition-all">
                  Emry
                </span>{" "}
                <span className="opacity-0 animate-[fadeIn_200ms_1000ms_ease_forwards] group-hover:text-white transition-all">
                  Sayada
                </span>
                <span className="opacity-0 animate-[fadeIn_200ms_1200ms_ease_forwards]">
                  .
                </span>
              </p>
              <p
                className="opacity-0 font-Poppins text-2xl animate-[fadeIn_1000ms_900ms_ease_forwards] phone:text-[16px]"
                id="header2"
              >
                A 15 years old self tought front-end developer.
              </p>
              <Link href={"/about"}>
                <button className="h-[50px] w-[120px] opacity-0 bg-white/30 rounded-[10px] mt-[20px] border-2 hover:drop-shadow-lg transition-all group animate-[fadeIn_1000ms_1.1s_ease_forwards]">
                  <p className="font-Poppins font-medium transition-all">
                    About Me
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

export default App;
