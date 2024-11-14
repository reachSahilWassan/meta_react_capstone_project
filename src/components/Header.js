import logo from "../assets/logo.svg"
import HeaderLink from "./HeaderLink";
import { useState, useRef } from "react";
import hamburgerMenu from "../assets/hambugerMenu.svg"
import closeMenu from "../assets/closeMenu.svg"

const Header = () =>{
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = (e) => {
    e.preventDefault()
    console.log("here")
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <a
            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            <img src={logo} alt="Little Lemon Logo" />
          </a>

          <button onClick={toggleMenu}>
            <img src={menuOpen ? closeMenu : hamburgerMenu} alt="" />
          </button>
        </div>

        <div
          ref={menuRef}
          id="hs-header-base"
          className={
            menuOpen
              ? "hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
              : "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          }
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                  <HeaderLink link="">Home</HeaderLink>
                  <HeaderLink link="">About</HeaderLink>
                  <HeaderLink link="">Menu</HeaderLink>
                  <HeaderLink link="">Reservations</HeaderLink>
                  <HeaderLink link="">Order Online</HeaderLink>
                </div>
              </div>

              <div className="my-2 md:my-0 md:mx-2">
                <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300"></div>
              </div>

              <div className=" flex flex-wrap items-center gap-x-1.5">
                <HeaderLink link="">Log in</HeaderLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );



    // return (
    //   <header className="p-4 grid grid-cols-2 items-center mx-12">
    //     <picture>
    //       <a href="#">
    //         <img src={logo} alt="Little Lemon Logo" />
    //       </a>
    //     </picture>
    //     <nav>
    //       <ul className="flex justify-start gap-4">
    //         <li>
    //           <a
    //             href="#"
    //             className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
    //           >
    //             Menu
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
    //           >
    //             Reservations
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
    //           >
    //             Order Online
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
    //           >
    //             Login
    //           </a>
    //         </li>
    //       </ul>
    //       {/* <i className="fa-solid fa-bars "></i> */}
    //     </nav>
    //   </header>
    // );
}

export default Header