import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const currRoute = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (currRoute === "/") {
      const homeBtn = document.getElementById("homeBtn");
      homeBtn.classList.add("text-white", "font-medium");
    } else if (currRoute === "/about") {
      const aboutBtn = document.getElementById("aboutBtn");
      aboutBtn.classList.add("text-white", "font-medium");
    } else if (currRoute === "/contact") {
      const contactBtn = document.getElementById("contactBtn");
      contactBtn.classList.add("text-white", "font-medium");
    }
  }, []);
  const menuLink = () => {
    const parent = document.getElementById("hamMenu");
    const homeBtn = parent.children[1];
    const aboutBtn = parent.children[2];
    const contactBtn = parent.children[3];
    if (currRoute === "/") {
      homeBtn.classList.add("text-white", "font-medium");
    } else if (currRoute === "/about") {
      aboutBtn.classList.add("text-white", "font-medium");
    } else if (currRoute === "/contact") {
      contactBtn.classList.add("text-white", "font-medium");
    }
  };
  const onMenuBtnPress = () => {
    const hamMenu = document.getElementById("hamMenu");
    if (menuOpen === false) {
      hamMenu.classList.remove("opacity-0", "z-0");
      hamMenu.classList.add("opacity-1", "z-10");
      const parent = document.getElementById("hamMenu");
      const homeBtn = parent.children[1];
      const aboutBtn = parent.children[2];
      const contactBtn = parent.children[3];
      homeBtn.classList.add("opacity-1");
      aboutBtn.classList.add("opacity-1");
      contactBtn.classList.add("opacity-1");
      menuLink();
      setMenuOpen(true);
    } else if (menuOpen === true) {
      hamMenu.classList.remove("opacity-1", "z-10");
      hamMenu.classList.add("opacity-0", "z-0");
      setMenuOpen(false);
    }
  };
  return (
    <>
      <div
        className="h-[10vh] bg-[#BBBBBB] drop-shadow-xl flex flex-row items-center translate-y-[-100px] animate-[headerShow_1s_ease_forwards] phone:justify-center"
        id="header"
      >
        <div className="w-[15%] ml-[25px] phone:w-[50%] computer:w-[11%]">
          <Link href={"/"}>
            <button className="font-Poppins font-semibold text-2xl phone:text-xl">
              Emry Sayada
            </button>
          </Link>
        </div>
        <div className="flex flex-row justify-between w-[15%] mr-[10%] phone:w-[50%]">
          <Link href={"/"}>
            <button>
              <p
                className="font-Poppins text-[18px] hover:text-white transition-all phone:hidden translate-x-[-135px] opacity-0 animate-[headerItems_1s_500ms_ease_forwards]"
                id="homeBtn"
              >
                Home
              </p>
            </button>
          </Link>
          <Link href={"/about"}>
            <button>
              <p
                className="font-Poppins text-[18px] hover:text-white transition-all phone:hidden translate-x-[-115px] opacity-0 animate-[headerItems_1s_1s_ease_forwards]"
                id="aboutBtn"
              >
                About
              </p>
            </button>
          </Link>
          <Link href={"/contact"}>
            <button>
              <p
                className="font-Poppins text-[18px] hover:text-white transition-all phone:hidden translate-x-[-120px] opacity-0 animate-[headerItems_1s_1.5s_ease_forwards]"
                id="contactBtn"
              >
                Contact
              </p>
            </button>
          </Link>
          <div className="group visible computer:hidden">
            <button onClick={onMenuBtnPress}>
              <p className="font-Poppins">Menu</p>
            </button>
          </div>
        </div>
      </div>
      {/* hamnurger menu items */}
      <div
        className="flex flex-col w-screen h-screen bg-[#BBBBBB] items-center justify-center absolute z-10 opacity-0 transition-all computer:hidden"
        id="hamMenu"
      >
        <p className="font-Poppins font-semibold text-2xl phone:text-xl">
          Emry Sayada
        </p>
        <Link href={"/"}>
          <button>
            <p
              className="font-Poppins text-[18px] hover:text-white transition-all opacity-1"
              id="homeBtn"
            >
              Home
            </p>
          </button>
        </Link>
        <Link href={"/about"}>
          <button>
            <p
              className="font-Poppins text-[18px] hover:text-white transition-all opacity-1"
              id="aboutBtn"
            >
              About
            </p>
          </button>
        </Link>
        <Link href={"/contact"}>
          <button>
            <p
              className="font-Poppins text-[18px] hover:text-white transition-all opacity-1"
              id="contactBtn"
            >
              Contact
            </p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;
