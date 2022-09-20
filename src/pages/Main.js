import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import CopyToClipboard from "react-copy-to-clipboard";

import MainSlidePhotographers from "./components/MainSlidePhotographers";
import MobileSlidePhotographers from "./components/MobileSlidePhotographers";
import MainSlideEvent from "./components/MainSlideEvent";
import MobileSlideEvent from "./components/MobileSlideEvent";

const Main = () => {
  const [expandButtons, setexpandButtons] = useState(false);
  const { pathname } = useLocation();
  const toggleButtons = () => {
    setexpandButtons(!expandButtons);
  };

  useEffect(() => {
    setexpandButtons(false);
  }, [pathname]);

  const currentUrl = window.location.href;

  return (
    <>
      <main className="md:pt-[7.5rem] pt-[3.5rem] bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <div className="flex w-full md:hidden">
            <img
              className="w-full"
              src="/images/Asset 1@3x 1.png"
              alt="Asset 1@3x 1"
            />
          </div>
          <section className="md:pt-[4rem] pt-8 mx-auto md:max-w-[76rem] px-4">
            <div className="md:flex md:justify-between">
              <div>
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
          <section className="px-4 bg-center bg-no-repeat bg-cover md:bg-bg-blur bg-bg-blur-mobile">
            <div className="pt-[6rem] md:pb-[10rem] pb-[6rem] md:max-w-[76rem] mx-auto">
              <MainSlidePhotographers />
              <MobileSlidePhotographers />
            </div>
          </section>
          <section className="px-4 bg-Neutrals-Grey9">
            <div className="py-[6rem] md:max-w-[76rem] mx-auto md:pb-[10rem] pb-[6rem]">
              <MainSlideEvent />
              <MobileSlideEvent />
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
            >
              <MapMarker
                position={{
                  lat: 37.5725546,
                  lng: 126.9848341,
                }}
              >
                <div style={{ padding: "5px", color: "#000" }}>
                  <a
                    className="whitespace-nowrap"
                    href="https://map.kakao.com/link/map/서울시 종로구 인사동 5길 26 홍익빌딩,37.5725546,126.9848341"
                    target="_blank"
                    rel="noreferrer"
                  >
                    서울시 종로구 인사동 5길 26 홍익빌딩
                  </a>
                </div>
              </MapMarker>
            </Map>
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
            >
              <MapMarker
                position={{
                  lat: 37.5725546,
                  lng: 126.9848341,
                }}
              >
                <div style={{ padding: "5px", color: "#000" }}>
                  <a
                    className="whitespace-nowrap"
                    href="https://map.kakao.com/link/map/서울시 종로구 인사동 5길 26 홍익빌딩,37.5725546,126.9848341"
                    target="_blank"
                    rel="noreferrer"
                  >
                    서울시 종로구 인사동 5길 26 홍익빌딩
                  </a>
                </div>
              </MapMarker>
            </Map>
          </section>
        </div>
      </main>
      <div className="fixed z-10 bottom-[1.125rem] right-4 md:hidden">
        <div>
          {expandButtons ? (
            <ul className="flex flex-col gap-2">
              <li>
                <button>
                  <img
                    src="/images/shareButtons/share_naver_button.svg"
                    alt="share_naver_button"
                  />
                </button>
              </li>
              <li>
                <button>
                  <img
                    src="/images/shareButtons/share_facebook_button.svg"
                    alt="share_facebook_button"
                  />
                </button>
              </li>
              <li>
                <button>
                  <a
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    className="twitter-share-button"
                    data-show-count="false"
                  >
                    <img
                      src="/images/shareButtons/share_twitter_button.svg"
                      alt="share_twitter_button"
                    />
                  </a>
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                  ></script>
                </button>
              </li>
              <li>
                <button>
                  <img
                    src="/images/shareButtons/share_kakao_button.svg"
                    alt="share_kakao_button"
                  />
                </button>
              </li>
              <li>
                <CopyToClipboard text={currentUrl}>
                  <img
                    className="cursor-pointer"
                    src="/images/shareButtons/share_link_button.svg"
                    alt="share_link_button"
                    onClick={() => alert("링크가 복사되었습니다.")}
                  />
                </CopyToClipboard>
              </li>
              <li>
                <button onClick={toggleButtons}>
                  <img
                    src="/images/shareButtons/closeButton.svg"
                    alt="closeButton"
                  />
                </button>
              </li>
            </ul>
          ) : (
            <div onClick={toggleButtons}>
              <img src="/images/shareButtons/openButton.svg" alt="openButton" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
