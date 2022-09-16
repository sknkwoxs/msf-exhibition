// import { Link } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";

import MainSlide from "./components/MainSlide";
import MobileSlideWriter from "./components/MobileSlideWriter";
// import MobileSlideEvent from "./components/MobileSlideEvent";

export default function Main() {
  return (
    <>
      <div className="md:pt-[7.5rem] pt-[3.5rem] bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <div className="flex w-full md:hidden">
            <img
              className="w-full"
              src="/images/Asset 3@3x 1.png"
              alt="Asset 3@3x 1"
            />
          </div>
          <section className="md:py-[4rem] pt-8 px-4 mx-auto md:max-w-[76rem]">
            <div className="md:flex md:justify-between">
              <div>
                <h1 className="md:text-[4rem] text-[2.5rem] md:leading-[4.5rem] leading-[3rem] font-bold mb-6">
                  MORE
                  <br /> THAN A<br className="hidden md:flex" /> PICTURE
                </h1>
                <p className="mb-[3.5rem] H5">
                  8인의 포토저널리스트가 담은
                  <br /> 국경없는의사회 구호현장의 기록
                </p>
                <div className="H6 text-Neutrals-Grey5 md:mb-[6rem] mb-[4rem]">
                  <p className="mb-2">갤러리 라메르</p>
                  <p>2022.11.02 - 11.14</p>
                </div>
                <div className="flex gap-4 mb-6 md:mb-0">
                  <img
                    src="/images/svgIcons/content_logo.svg"
                    alt="content_logo"
                  />
                  <img src="/images/svgIcons/symbol_x.svg" alt="symbol_x" />
                  <img src="/images/svgIcons/MAPS_logo.svg" alt="MAPS_logo" />
                </div>
              </div>
              <div className="hidden md:flex">
                <img
                  className="object-cover w-full"
                  src="/images/Asset 3@3x 1.png"
                  alt="Asset 3@3x 1"
                />
              </div>
            </div>
          </section>
          <section className="px-4 bg-center bg-no-repeat bg-cover bg-bg-blur">
            <div className="pt-[6rem] md:pb-[10rem] pb-[6rem] md:max-w-[76rem] mx-auto">
              <div className="mb-8">
                <p className="H4">작가 소개</p>
              </div>
              <MainSlide />
              <MobileSlideWriter />
            </div>
          </section>
          <section className="px-4 bg-Neutrals-Grey8">
            <div className="py-[6rem] md:max-w-[76rem] mx-auto">
              <div className="flex justify-between mb-8">
                <p className="H4">이벤트</p>
                <div className="flex items-center gap-2">
                  <p className="H7">이벤트 페이지로 이동</p>
                  <img src="/images/svgIcons/symbol_+.svg" alt="symbol_+" />
                </div>
              </div>
              <div className="hidden grid-cols-3 grid-rows-1 gap-8 md:grid ">
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_1.png" alt="ev_th_1" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 DB2">2021-11-05</p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_2.png" alt="ev_th_2" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 DB2">2021-11-05</p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_3.png" alt="ev_th_3" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 DB2">2021-11-05</p>
                </div>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-8 md:hidden ">
                <div>
                  <div className="h-0 pb-[75%] overflow-hidden relative z-0 mb-8">
                    <img
                      className="absolute object-cover w-full h-full"
                      src="/images/ev_th_3.png"
                      alt="ev_th_3"
                    />
                  </div>
                  <p className="mb-2 H6">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[0.875rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-Brand-Primary">
            <div className="w-full flex flex-col md:flex-row gap-6  mx-auto md:max-w-[76rem] py-8 md:py-0 px-4">
              <p className="w-full flex items-center MH3 md:text-[1.375rem] text-center justify-center md:justify-start break-words text-ellipsis whitespace-nowrap">
                국경없는의사회 한국에서 진행하는
                <br className="md:hidden" /> 이벤트 관련 최신 소식을 받아보세요
              </p>
              <div className="flex flex-col w-full gap-2 py-0 md:py-10 md:flex-row md:gap-0 md:pl-[3.5rem]">
                <div className="w-full">
                  <input
                    className="w-full px-4 py-3 rounded md:rounded-none md:rounded-l text-Neutrals-Grey9"
                    type="text"
                    id="subscribe"
                    placeholder="이메일 주소를 입력해주세요."
                  />
                </div>
                <button className="px-10 py-3 rounded md:rounded-none md:rounded-r bg-Neutrals-Grey9 H6 max-h-[3rem] whitespace-nowrap">
                  구독하기
                </button>
              </div>
            </div>
          </section>
          <section className="hidden md:block">
            <Map
              center={{
                lat: 37.5725546,
                lng: 126.9848341,
              }}
              style={{
                width: "100%",
                minHeight: "400px",
              }}
              level={3}
            />
          </section>
          <section className="md:hidden">
            <Map
              center={{
                lat: 37.5725546,
                lng: 126.9848341,
              }}
              style={{
                width: "100%",
                maxHeight: "400px",
                minHeight: "240px",
              }}
              level={3}
            />
          </section>
        </div>
      </div>
    </>
  );
}
