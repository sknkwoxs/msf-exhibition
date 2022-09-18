// import { Link } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";

import MainSlidePhotographers from "./components/MainSlidePhotographers";
import MobileSlidePhotographers from "./components/MobileSlidePhotographers";
import MainSlideEvent from "./components/MainSlideEvent";
// import MobileSlideEvent from "./components/MobileSlideEvent";

export default function Main() {
  return (
    <>
      <div className="md:pt-[7.5rem] pt-[3.5rem] bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <div className="flex w-full md:hidden">
            <img
              className="w-full"
              src="/images/Asset 1@3x 1.png"
              alt="Asset 1@3x 1"
            />
          </div>
          <section className="md:py-[4rem] pt-8 px-4 mx-auto md:max-w-[76rem]">
            <div className="md:flex md:justify-between">
              <div>
                {/* <h1 className="md:text-[6.5rem] text-[4rem] md:leading-[7rem] leading-[4.5rem] font-bold font-din">
                  MORE
                  <br /> THAN A<br className="hidden md:flex" /> PICTURE
                </h1> */}
                <div>
                  <img
                    className="hidden object-cover w-full mb-8 md:flex"
                    src="/images/MORE THAN A PICTURE.svg"
                    alt="MORETHANAPICTURE"
                  />
                  <img
                    className="object-cover w-full mb-8 md:hidden"
                    src="/images/MORE THAN A PICTURE_mobile.svg"
                    alt="MORETHANAPICTURE"
                  />
                </div>
                <p className="mb-[3.5rem] H5">
                  8인의 포토저널리스트가 담은
                  <br /> 국경없는의사회 구호현장의 기록
                </p>
                <div className="H6 text-Neutrals-Grey5 md:mb-[6rem] mb-[4rem]">
                  <p className="mb-2">갤러리 라메르</p>
                  <p>2022.11.02 - 11.14</p>
                </div>
              </div>
              <div className="hidden md:flex">
                <img
                  className="object-cover w-full"
                  src="/images/Asset 1@3x 1.png"
                  alt="Asset 1@3x 1"
                />
              </div>
            </div>
          </section>
          <section className="px-4 bg-center bg-no-repeat bg-cover bg-bg-blur">
            <div className="pt-[6rem] md:pb-[10rem] pb-[6rem] md:max-w-[76rem] mx-auto">
              <MainSlidePhotographers />
              <MobileSlidePhotographers />
            </div>
          </section>
          <section className="px-4 bg-Neutrals-Grey9">
            <div className="py-[6rem] md:max-w-[76rem] mx-auto md:pb-[10rem] pb-[6rem]">
              <MainSlideEvent />
            </div>
          </section>
          <section className="bg-Brand-Primary">
            <div className="w-full flex flex-col md:flex-row gap-6  mx-auto md:max-w-[76rem] py-8 md:py-0 px-4">
              <p className="w-full flex items-center MH3 md:text-[1.375rem] text-center justify-center md:justify-start break-words text-ellipsis whitespace-nowrap">
                국경없는의사회 한국 사무소에서 진행하는
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
