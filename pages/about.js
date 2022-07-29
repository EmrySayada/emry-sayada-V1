import React, { useState, useEffect } from "react";
import ActivityIndicator from "./components/activityIndecator";
import Link from "next/link";
import Project from "./components/project";
import Header from "./components/header";
import Footer from "./components/footer";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2700);
  }, []);
  return (
    <>
      {loading === false ? (
        <>
          <Header footerId="footer" />
          <div className="flex flex-col h-screen overflow-x-hidden">
            <p className="font-Poppins font-semibold text-3xl mt-[30px] ml-[50px] opacity-0 animate-[fadeIn_500ms_ease_forwards]">
              About Me
            </p>
            <div className="h-screen mr-[60%] ml-[50px] mt-[20px] opacity-0 animate-[fadeIn_500ms_250ms_ease_forwards] phone:w-[80%]">
              <p className="font-Poppins text-[18px] phone:text-[14px]">
                Hello, I am Emry Sayada or Emry_soda.exe.
              </p>
              <p className="font-Poppins text-[18px] phone:text-[14px]">
                I live and from Israel. My love for Computers started when I was
                around 6 years old and when I was 9 years old I started watching
                java toturials on youtube. After around 2 years of learning java
                and not getting anywhere at age 11 I started learning another
                languages like: Python, Dart, html, css and javascript. After A
                year or so of learning Python on youtube and some paid courses I
                got into app development for a little bit in Flutter (Which I
                didn&apos;t like). Then I finally got to where I am today which
                web and front-end development and design. Right now I mostly use
                reactjs, react native (which I prefer much more than flutter),
                nextjs, tailwind css and other libraries and frameworks. As of
                today (2022) I am in 9th grade almost going to the 10th. In
                middle school I was in a spacial class which tought us more then
                the regualar subject like Math and geography, In the class every
                monday we would learn in the Ben Gurion Uni in beersheva, Israel
                a simplefied version of the medicine program in the Uni. Also,
                through my school there is a yearly debate compatition in
                english (as the first language of most students including mine
                is hebrew) between differente middle schools from the south of
                israel and the 2 schools that win will be participating in the
                national debate championship in israel. The first year that I
                participated we didn&apos;t win however, the second year (this
                year) we did win! I am planning on majoring cs and chemistry.
              </p>
            </div>
          </div>
          <Footer id="footer" />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default About;
