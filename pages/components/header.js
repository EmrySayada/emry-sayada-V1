import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const currRoute = router.pathname;
    useEffect(() => {
        if (currRoute === '/') {
            const homeBtn = document.getElementById('homeBtn')
            homeBtn.classList.add('text-white', 'font-medium')
        } else if (currRoute === '/about') {
            const aboutBtn = document.getElementById('aboutBtn')
            aboutBtn.classList.add('text-white', 'font-medium')
        } else if (currRoute === '/contact') {
            const contactBtn = document.getElementById('contactBtn')
            contactBtn.classList.add('text-white', 'font-medium')
        }
    }, [])
    return (
        <>
            <div className="h-[10vh] bg-[#BBBBBB] drop-shadow-xl flex flex-row items-center translate-y-[-100px] animate-[headerShow_1s_ease_forwards] " id="header">
                <div className="w-[10%] ml-[25px] phone:w-[50%]">
                    <Link href={'/'}>
                        <button className="font-Poppins font-semibold text-2xl phone:text-xl">Emry Sayada</button>
                    </Link>
                </div>
                <div className="flex flex-row justify-between w-[15%] mr-[10%] phone:w-[50%]">
                    <Link href={'/'}>
                        <button><p className="font-Poppins text-[18px] hover:text-white transition-all phone:text-[14px] translate-x-[-135px] opacity-0 animate-[headerItems_1s_500ms_ease_forwards]" id="homeBtn">Home</p></button>
                    </Link>
                    <Link href={'/about'}>
                        <button><p className="font-Poppins text-[18px] hover:text-white transition-all phone:text-[14px] translate-x-[-115px] opacity-0 animate-[headerItems_1s_1s_ease_forwards]" id="aboutBtn">About Me</p></button>
                    </Link>
                    <Link href={'/contact'}>
                        <button><p className="font-Poppins text-[18px] hover:text-white transition-all phone:text-[14px] translate-x-[-120px] opacity-0 animate-[headerItems_1s_1.5s_ease_forwards]" id="contactBtn">Contact</p></button>
                    </Link>
                </div>
                {/* <div className="phone:translate-y-[0px] -translate-y-[100px]">
                    <Link href={'/menu'}>
                        <button>
                            <p>Menu</p>
                        </button>
                    </Link>
                </div> */}
            </div>
        </>
    )
}

export default Header