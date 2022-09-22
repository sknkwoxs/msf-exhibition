import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import CopyToClipboard from "react-copy-to-clipboard";

import MainSlidePhotographers from "./components/MainSlidePhotographers";
import MobileSlidePhotographers from "./components/MobileSlidePhotographers";
import MainSlideEvent from "./components/MainSlideEvent";
import MobileSlideEvent from "./components/MobileSlideEvent";
import Stibee from "./components/Stibee";
import { HashLink } from "react-router-hash-link";

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

  const kakaoShare = () => {
    window.Kakao.init(`${process.env.REACT_APP_REST_API_KEY}`);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "국경없는의사회 사진전",
        description: "국경없는의사회 사진전",
        imageUrl: "카톡 공유시 보여질 이미지",
        link: {
          mobileWebUrl: "www.naver.com",
          webUrl: "www.naver.com",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "www.naver.com",
            webUrl: "www.naver.com",
          },
        },
      ],
    });
  };

  const facebookShare = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(document.URL) +
        "&t=" +
        encodeURIComponent(document.title),
      "facebooksharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600"
    );
  };

  const naverShare = () => {
    window.open("http://www.facebook.com/sharer.php?u=www.naver.com");
  };

  return (
    <>
      <main className="md:pt-[7.5rem] pt-[3.5rem] bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <div className="flex w-full md:hidden">
            <img
              className="w-full"
              src="/images/Asset 1@3x 1.jpg"
              alt="Asset 1@3x 1"
            />
          </div>
          <section className="md:pt-0 pt-8 mx-auto md:max-w-[76rem] px-4">
            <div className="md:flex md:justify-between">
              <div>
                <div>
                  <img
                    className="hidden object-cover w-full mb-8 md:flex mt-[3.5rem]"
                    src="/images/MORE THAN A PICTURE.svg"
                    alt="MORETHANAPICTURE"
                  />
                  <img
                    className="object-cover w-full mb-8 md:hidden"
                    src="/images/MORE THAN A PICTURE_mobile.svg"
                    alt="MORETHANAPICTURE"
                  />
                </div>
                <p className="md:mb-[3.5rem] mb-4 H5">
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
            <div className="pt-[4rem] md:pb-[10rem] pb-[8rem] md:max-w-[76rem] mx-auto">
              <MainSlidePhotographers />
              <MobileSlidePhotographers />
            </div>
          </section>
          <section className="px-4 bg-Neutrals-Grey9">
            <div className="pt-[4rem] md:pb-[10rem] pb-[8rem] md:max-w-[76rem] mx-auto">
              <MainSlideEvent />
              <MobileSlideEvent />
            </div>
          </section>
          <Stibee />
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
            <ul className="flex flex-col items-center justify-center gap-2 mx-auto">
              <li>
                <button>
                  <img
                    src="/images/shareButtons/share_naver_button.svg"
                    alt="share_naver_button"
                  />
                </button>
              </li>
              <li>
                <button onClick={facebookShare}>
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
                <button id="kakaoShareButton" onClick={kakaoShare}>
                  <img
                    src="/images/shareButtons/share_kakao_button.svg"
                    alt="share_kakao_button"
                  />
                </button>
              </li>
              <li>
                <button>
                  <CopyToClipboard text={currentUrl}>
                    <img
                      className="cursor-pointer"
                      src="/images/shareButtons/share_link_button.svg"
                      alt="share_link_button"
                      onClick={() => alert("링크가 복사되었습니다.")}
                    />
                  </CopyToClipboard>
                </button>
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
              <button className="text-red-500">
                <span className="absolute">예시</span>
                <img
                  src="/images/shareButtons/openButton.svg"
                  alt="openButton"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
