import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Collapsible from "react-collapsible";
import { HashLink, NavHashLink } from "react-router-hash-link";
import {
  introduction,
  photographers,
  participate,
} from "./components/SubmenuItems";

const Header = () => {
  const [hover, setHover] = useState(false);
  const hoverStyle = {
    height: "30rem",
    backgroundColor: "#000000",
    transition: "0.5s all",
  };

  const hoverBorder = {
    display: "block",
    position: "absolute",
    width: "100%",
    height: "",
    top: "7.5rem",
    zIndex: "100",
    borderBottom: "1px solid #636B73",
  };

  const subMenuFlex = {
    display: "flex",
  };

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 shadow-md text-Neutrals-White bg-Neutrals-Grey9 md:bg-inherit">
        <div style={hover ? hoverBorder : null} />
        <div
          id="headerWrap"
          className={scrollPosition < 1 ? "bg_transparent" : "bg_black"}
          style={hover ? hoverStyle : null}
          onMouseLeave={onMouseLeave}
        >
          <div
            id="headerContents"
            className="hidden md:flex justifiy-between px-4 mx-auto max-w-[76rem] relative headerContents"
          >
            <a href="/morethanapicture">
              <img
                className="py-[1.75rem]"
                src={`${process.env.PUBLIC_URL}/images/svgIcons/logo.svg`}
                alt="logo"
              />
            </a>
            <div
              className="absolute right-0 top-10"
              onMouseEnter={onMouseEnter}
            >
              <ul className="flex text-[1.25rem] leading-[1.5rem] header_menu">
                <li className="mx-[2.25rem] font-PTBold relative inline-block py-2 expanded">
                  <NavHashLink to="/introduction/Summary#">
                    사진전 소개
                  </NavHashLink>
                  <ul
                    className="absolute top-[6.5rem] text-center MH4 font-normal  whitespace-nowrap flex flex-col gap-4 left-[50%] -translate-x-[50%] header_submenu font-PT"
                    style={hover ? subMenuFlex : null}
                  >
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
                <li className="mx-[2.25rem] font-PTBold relative inline-block py-2 expanded">
                  <NavHashLink to="/photographers/GaelTurine#">
                    작가 소개
                  </NavHashLink>
                  <ul
                    className="absolute top-[6.5rem] text-center MH4 font-normal  whitespace-nowrap flex flex-col gap-4 left-[50%] -translate-x-[50%] header_submenu font-PT"
                    style={hover ? subMenuFlex : null}
                  >
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
                <li className="mx-[2.25rem] font-PTBold relative inline-block py-2 expanded">
                  <NavHashLink to="/Participate#">참여 방법</NavHashLink>
                  <ul
                    className="absolute top-[6.5rem] text-center MH4 font-normal  whitespace-nowrap flex flex-col gap-4 left-[50%] -translate-x-[50%] header_submenu font-PT"
                    style={hover ? subMenuFlex : null}
                  >
                    {participate.map((participate, index) => {
                      return (
                        <li key={index}>
                          <HashLink
                            to={participate.url}
                            scroll={(el) =>
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              })
                            }
                          >
                            {participate.title}
                          </HashLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="mx-[2.25rem] font-PTBold relative inline-block py-2">
                  <NavHashLink to="/Address#">오시는길</NavHashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-3 mx-auto md:hidden">
            <div className="flex justify-between">
              <a href="/morethanapicture">
                <img
                  src={`${process.env.PUBLIC_URL}/images/svgIcons/Mlogo.svg`}
                  alt="Mlogo"
                />
              </a>
              <button className="flex items-center" onClick={toggleMenu}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/svgIcons/main_menu.svg`}
                  alt="main_menu"
                />
              </button>
            </div>
          </div>
          {/* mobile menu */}
          {openMenu ? (
            <div className="z-[30] h-screen border-t border-Neutrals-Grey6 md:hidden animate-fade-in-down">
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
                    <Collapsible trigger="참여 방법">
                      <ul className="flex flex-col pt-6 DB3 text-Neutrals-Grey5 gap-y-2">
                        {participate.map((participate, index) => {
                          return (
                            <li key={index}>
                              <HashLink to={participate.url}>
                                {participate.title}
                              </HashLink>
                            </li>
                          );
                        })}
                      </ul>
                    </Collapsible>
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
