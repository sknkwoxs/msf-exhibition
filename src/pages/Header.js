import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { introduction, photographers } from "./components/SubmenuItems";
import Collapsible from "react-collapsible";
import { HashLink, NavHashLink } from "react-router-hash-link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 text-Neutrals-White bg-Neutrals-Grey9 md:bg-inherit">
        <div
          id="headerWrap"
          className={scrollPosition < 1 ? "bg_transparent" : "bg_black"}
        >
          <div
            id="headerContents"
            className="hidden md:flex justifiy-between px-4 mx-auto max-w-[76rem] relative"
          >
            <a href="/">
              <img
                className="py-[1.75rem]"
                src="/images/svgIcons/logo.svg"
                alt="logo"
              />
            </a>
            <div className="absolute right-0 h-full top-10">
              <ul
                className="flex text-[1.25rem] leading-[1.5rem] font-bold header_menu"
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
              >
                <li className="mx-[2rem] relative inline-block py-2 expanded">
                  <NavHashLink
                    to="/introduction/Summary#"
                    activeClassName="selected"
                    activeStyle={{ color: "red" }}
                  >
                    사진전 소개
                  </NavHashLink>
                  <ul className="absolute top-[7.5rem] text-center whitespace-nowrap flex flex-col gap-4 left-[50%] -translate-x-[50%] header_submenu">
                    {introduction.map((introduction, index) => {
                      return (
                        <li key={index}>
                          <HashLink to={introduction.url}>
                            {introduction.title}
                          </HashLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="mx-[2rem] relative inline-block py-2 expanded">
                  <NavHashLink
                    to="/photographers/GaelTurine#"
                    activeClassName="selected"
                    activeStyle={{ color: "red" }}
                  >
                    작가 소개
                  </NavHashLink>
                  <ul className="absolute top-[7.5rem] text-center whitespace-nowrap flex flex-col gap-4 left-[50%] -translate-x-[50%] header_submenu">
                    {photographers.map((photographers, index) => {
                      return (
                        <li key={index}>
                          <HashLink to={photographers.url}>
                            {photographers.title}
                          </HashLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="mx-[2rem] relative inline-block py-2">
                  <NavHashLink
                    to="/Participate#"
                    activeClassName="selected"
                    activeStyle={{ color: "red" }}
                  >
                    참여 방법
                  </NavHashLink>
                </li>
                <li className="mx-[2rem] relative inline-block py-2">
                  <NavHashLink
                    to="/Address#"
                    activeClassName="selected"
                    activeStyle={{ color: "red" }}
                  >
                    오시는길
                  </NavHashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-3 mx-auto md:hidden">
            <div className="flex justify-between">
              <a href="/">
                <img src="/images/svgIcons/Mlogo.svg" alt="Mlogo" />
              </a>
              <button className="flex items-center" onClick={toggleMenu}>
                <img src="/images/svgIcons/main_menu.svg" alt="main_menu" />
              </button>
            </div>
          </div>
          {/* mobile menu */}
          {openMenu ? (
            <div className="h-screen border-t border-Neutrals-Grey6 md:hidden">
              <div className="px-4 pb-12">
                <ul>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    <Collapsible trigger="사진전 소개">
                      <ul className="flex flex-col pt-6 DB3 text-Neutrals-Grey5 gap-y-2">
                        {introduction.map((introduction, index) => {
                          return (
                            <li key={index}>
                              <HashLink to={introduction.url}>
                                {introduction.title}
                              </HashLink>
                            </li>
                          );
                        })}
                      </ul>
                    </Collapsible>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    <Collapsible trigger="작가 소개">
                      <ul className="flex flex-col pt-6 DB3 text-Neutrals-Grey5 gap-y-2">
                        {photographers.map((photographers, index) => {
                          return (
                            <li key={index}>
                              <HashLink to={photographers.url}>
                                {photographers.title}
                              </HashLink>
                            </li>
                          );
                        })}
                      </ul>
                    </Collapsible>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    <HashLink to="/Participate#">참여 방법</HashLink>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    <HashLink to="/Address#">오시는길</HashLink>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
};

export default Header;
