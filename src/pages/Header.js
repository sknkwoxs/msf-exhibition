import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 text-Neutrals-White bg-Neutrals-Grey9 md:bg-inherit">
        <div className={scrollPosition < 1 ? "bg_transparent" : "bg_black"}>
          <div className="hidden md:flex justify-between px-4 mx-auto max-w-[76rem] relative">
            <a href="/">
              <img
                className="py-[1.75rem]"
                src="/images/svgIcons/logo.svg"
                alt="logo"
              />
            </a>
            <div className="absolute right-0 top-10">
              <ul className="flex text-[1.25rem] leading-[1.5rem] font-bold header_menu">
                <li className="mx-[2rem] relative inline-block py-2 expanded">
                  <Link to="#">사진전 소개</Link>
                  <ul className="absolute top-[7.5rem] text-center whitespace-nowrap flex flex-col gap-4 left-[50%] -translate-x-[50%] header_submenu">
                    <li className="header_submenu_item">
                      <Link to="#">모시는 말씀</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="#">사진전 소개</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/photo_exhibition/Greetings">
                        사무총장 인사말
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mx-[2rem] relative inline-block py-2 expanded">
                  <Link to="#">작가 소개</Link>
                  <ul className="absolute top-[7.5rem] text-center whitespace-nowrap flex flex-col gap-4 left-[50%] -translate-x-[50%] header_submenu">
                    <li>
                      <Link to="/photographers/GaelTurine">가엘 튜린</Link>
                    </li>
                    <li>
                      <Link to="/photographers/AlessandroPenso">
                        알레산드로펜소
                      </Link>
                    </li>
                    <li>
                      <Link to="/photographers/JohnVink">존 빈크</Link>
                    </li>
                    <li>
                      <Link to="/photographers/DominicNahr">도미닉 나흐르</Link>
                    </li>
                    <li>
                      <Link to="/photographers/CedricGerbehaye">
                        세드릭 게르베하이
                      </Link>
                    </li>
                    <li>
                      <Link to="/photographers/HannahReyesMorales">
                        해나 레예스 모랄레스
                      </Link>
                    </li>
                    <li>
                      <Link to="/photographers/MassimoBerruti">
                        마시모 베루티
                      </Link>
                    </li>
                    <li>
                      <Link to="/photographers/AshfikaRahman">
                        아슈피카 라만
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mx-[2rem] relative inline-block py-2">
                  <Link to="#">이벤트</Link>
                </li>
                <li className="mx-[2rem] relative inline-block py-2">
                  <Link to="/address">오시는길</Link>
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
          {openMenu ? (
            <div className="border-t border-Neutrals-Grey6 md:hidden">
              <div className="px-4 pb-12">
                <ul>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    사진전 소개
                    <ul className="flex flex-col pt-6 DB3 text-Neutrals-Grey5 gap-y-2">
                      <li>사진전 소개</li>
                      <li>
                        <Link to="/photo_exhibition/Greetings">
                          사무총장 인사말
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    작가 소개
                    <ul className="flex flex-col pt-6 DB3 text-Neutrals-Grey5 gap-y-2">
                      <li>
                        <Link to="/photographers/GaelTurine">가엘 튜린</Link>
                      </li>
                      <li>
                        <Link to="/photographers/AlessandroPenso">
                          알레산드로펜소
                        </Link>
                      </li>
                      <li>
                        <Link to="/photographers/JohnVink">존 빈크</Link>
                      </li>
                      <li>
                        <Link to="/photographers/DominicNahr">
                          도미닉 나흐르
                        </Link>
                      </li>
                      <li>
                        <Link to="/photographers/CedricGerbehaye">
                          세드릭 게르베하이
                        </Link>
                      </li>
                      <li>
                        <Link to="/photographers/HannahReyesMorales">
                          해나 레예스 모랄레스
                        </Link>
                      </li>
                      <li>
                        <Link to="/photographers/MassimoBerruti">
                          마시모 베루티
                        </Link>
                      </li>
                      <li>
                        <Link to="/photographers/AshfikaRahman">
                          아슈피카 라만
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    <Link to="#">이벤트</Link>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    <Link to="/address">오시는길</Link>
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
