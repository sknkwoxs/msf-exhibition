import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-Neutrals-Grey9 text-Neutrals-White">
        {/* <div className="fixed top-0 left-0 right-0 bg-transparent text-Neutrals-White"> */}
        <div>
          <div className="hidden md:flex justify-between px-4 mx-auto max-w-[76rem]">
            <a href="/">
              <img
                className="py-[1.75rem]"
                src="/images/svgIcons/logo.svg"
                alt="logo"
              />
            </a>
            <div className="my-auto">
              <ul className="flex text-[1.25rem] leading-[1.5rem] font-bold items-center text-center">
                <li className="ml-[4rem] relative inline-block">
                  <Link to="#">사진전 소개</Link>
                  {/* <ul className="absolute whitespace-nowrap left-[50%] -translate-x-[50%] flex flex-col gap-y-4 pt-[5rem] pb-[4rem] text-[1.125rem] leading-6 font-normal">
                    <li>사진전 소개</li>
                    <li>사무총장 인사말</li>
                  </ul> */}
                </li>
                <li className="ml-[4rem] relative inline-block">
                  <Link to="#">작가 소개</Link>
                  {/* <ul className="absolute whitespace-nowrap left-[50%] -translate-x-[50%] flex flex-col gap-y-4 pt-[5rem] pb-[4rem] text-[1.125rem] leading-6 font-normal">
                    <li>가엘 튜린</li>
                    <li>알레산드로펜소</li>
                    <li>존 빈크</li>
                    <li>도미닉 나흐르</li>
                    <li>세드릭 게르베하이</li>
                    <li>해나 레예스 모랄레스</li>
                    <li>마시모 베루티</li>
                    <li>아슈피카 라만</li>
                  </ul> */}
                </li>
                <li className="pl-[4rem]">
                  <Link to="#">이벤트</Link>
                </li>
                <li className="pl-[4rem]">
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
                      <li>사무총장 인사말</li>
                    </ul>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    작가 소개
                    <ul className="flex flex-col pt-6 DB3 text-Neutrals-Grey5 gap-y-2">
                      <li>가엘 튜린</li>
                      <li>알레산드로펜소</li>
                      <li>존 빈크</li>
                      <li>도미닉 나흐르</li>
                      <li>세드릭 게르베하이</li>
                      <li>해나 레예스 모랄레스</li>
                      <li>마시모 베루티</li>
                      <li>아슈피카 라만</li>
                    </ul>
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    이벤트
                  </li>
                  <li className="py-6 border-b border-Neutrals-Grey6 MH5">
                    오시는길
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
