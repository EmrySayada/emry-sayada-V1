import react, { useState, useEffect } from "react";
import ActivityIndicator from "./components/activityIndecator";
import Header from "./components/header";
import Footer from "./components/footer";
import Slide from "./components/slide";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const AboutText = [
    "Hello I am Emry Sayada or Emry_soda.exe",
    "I live and from Israel.",
    "My love for Computers started when I was around 6 years old and when I was 9 years old I started watching java toturials on youtube.",
    "after around 2 years of learning java and not getting anywhere at age 11 I started learning another languages like: Python, Dart, html, css and javascript.",
    "After A year or so of learning Python on youtube and some paid courses I got into app development for a little bit in Flutter (Which I didn't like).",
    "Then I finally got to where I am today which web front-end development and design.",
    "Right now I mostly use reactjs, react native (which I prefer much more than flutter), nextjs, tailwind css and other libraries and frameworks.",
    "As of today (2022) I am in 9th grade almost going to the 10th.",
    "In middle school I was accepted to a class where every monday we would learn at the Ben Gurion University at Beersheva, Israel.",
    "A simplefied version of the medicine program in the Uni",
    "Through my school there is a yearly debate compatition in english (as the first language of most students including mine is hebrew) between differente middle schools from the south of israel and the 2 schools that win will be participating in the national debate championship in israel.",
    "The first year that I participated we didn't win however, the second year (this year) we did win!",
    "I am planning on majoring cs and chemistry through my school.",
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2700);
  }, []);
  return (
    <>
      {loading === false ? (
        <>
          <Header />
          <title>Emry Sayada</title>
          <div className="flex flex-col h-screen items-center">
            <p className="font-Poppins font-semibold text-3xl mt-[30px] opacity-0 animate-[fadeIn_500ms_ease_forwards]">
              About Me
            </p>
            <div className="animate-[fadeIn_500ms_250ms_ease_forwards]">
              <div className="flex flex-col h-screen w-[90vh] items-center justify-center phone:w-[40vh]">
                <Slide content={AboutText[currentSlide]} />
                <div className="flex flex-row justify-evenly w-[inherit] mt-[10vh]">
                  {/* prev button */}
                  <button
                    onClick={() => {
                      if (currentSlide == 0) {
                        setCurrentSlide(AboutText.length - 1);
                      } else {
                        setCurrentSlide(currentSlide - 1);
                      }
                    }}
                    className="h-[50px] w-[120px] bg-white/30 rounded-[10px] mt-[20px] border-2 hover:drop-shadow-lg transition-all"
                  >
                    <p className="font-Poppins text-[16px] font-semibold">
                      previous
                    </p>
                  </button>
                  {/* next button */}
                  <button
                    onClick={() => {
                      if (currentSlide == AboutText.length - 1) {
                        setCurrentSlide(0);
                      } else {
                        setCurrentSlide(currentSlide + 1);
                      }
                    }}
                    className="h-[50px] w-[120px] bg-white/30 rounded-[10px] mt-[20px] border-2 hover:drop-shadow-lg transition-all"
                  >
                    <p className="font-Poppins text-[16px] font-semibold">
                      next
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default About;

{
  /* <p className="font-Poppins text-[18px] phone:text-[14px]">
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
</p> */
}
