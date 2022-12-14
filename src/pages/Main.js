import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CookiesProvider, useCookies } from "react-cookie";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CopyToClipboard from "react-copy-to-clipboard";

import MainSlidePhotographers from "./components/MainSlidePhotographers";
import MobileSlidePhotographers from "./components/MobileSlidePhotographers";
import MainSlideEvent from "./components/MainSlideEvent";
import MobileSlideEvent from "./components/MobileSlideEvent";
import StibeeSubscriptionForm from "./components/StibeeSubscriptionForm";
import MainModal from "./MainModal";

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
    window.Kakao.init(`${process.env.REACT_APP_JS_KEY}`);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "국경없는의사회 사진전",
        description:
          "MORE THAN A PICTURE: 8인의 포토저널리스트가 담은 국경없는의사회 구호현장의 기록",
        imageUrl: "https://msf.or.kr/morethanapicture/images/OG.jpg",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  const twitterShare = () => {
    // window.open(
    //   "https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20" +
    //     encodeURIComponent(document.currentUrl) +
    //     "%20-%20" +
    //     encodeURIComponent(document.title),
    //   "twittersharedialog",
    //   "menubar=no, toolbar=no, resizable=yes, scrollbars=yes height=600, width=600"
    // );
    // const sendText = "국경없는의사회 사진전"; // 공유할 텍스트
    // const sendUrl = window.location.href; // 공유할 URL
    // window.open(
    //   `https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`
    // );
    window.open(
      "https://twitter.com/intent/tweet?url=" + encodeURIComponent(currentUrl)
    );
  };

  const facebookShare = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?href=" +
        encodeURIComponent(document.currentUrl) +
        "%20-%20" +
        encodeURIComponent(document.title),
      "facebooksharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes height=600, width=600"
    );
    // const sendText = "국경없는의사회 사진전"; // 공유할 텍스트
    // const sendUrl = window.location.href; // 공유할 URL
    // window.open(
    //   `http://www.facebook.com/sharer/sharer.php?href=${sendText}&url=${sendUrl}`
    // );
  };

  const naverShare = () => {
    window.open(
      "http://share.naver.com/web/shareView.nhn?url=" +
        encodeURIComponent(document.currentUrl) +
        "&title=" +
        encodeURIComponent(document.title),
      "naversharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes height=600, width=600"
    );
  };

  const [openModal, setOpenModal] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);
  const [appCookies, setAppCookies] = useCookies();

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeModalUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(1);
    setAppCookies("MODAL_EXPIRES", true, { path: "/", expires });

    setOpenModal(false);
  };

  useEffect(() => {
    if (appCookies["MODAL_EXPIRES"]) return;
    console.log(appCookies["MODAL_EXPIRES"]);
    setHasCookie(false);
  }, []);

  return (
    <>
      <main className="md:pt-[7.5rem] pt-[3.5rem] bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <div className="flex md:w-full md:hidden">
            <img
              className="object-cover w-full"
              src={`${process.env.PUBLIC_URL}/images/Asset 1@3x 1.jpg`}
              alt="Asset 1@3x 1"
            />
          </div>
          <section className="md:pt-0 pt-4 mx-auto md:max-w-[76rem] px-4">
            <div className="md:flex md:justify-between">
              <div className="mt-[1rem] md:mt-0">
                <div className="md:w-full w-[222px]">
                  <img
                    className="hidden object-cover w-full mb-8 md:flex mt-[3.5rem]"
                    src={`${process.env.PUBLIC_URL}/images/MORE THAN A PICTURE.svg`}
                    alt="MORETHANAPICTURE"
                  />
                  <img
                    className="object-cover w-full mb-4 md:hidden"
                    src={`${process.env.PUBLIC_URL}/images/MORE THAN A PICTURE_mobile.svg`}
                    alt="MORETHANAPICTURE"
                  />
                </div>
                <p className="md:mb-[3.5rem] mb-2 MH5 md:text-[1.5rem] md:leading-[2rem]">
                  8인의 포토저널리스트가 담은
                  <br /> 국경없는의사회 구호현장의 기록
                </p>
                <div className="MH6 text-Neutrals-Grey5 md:mb-[6rem] mb-[4rem] md:text-[1.125rem] md:leading-[1.5rem]">
                  <p className="mb-2">갤러리 라메르</p>
                  <p>2022.11.02 - 11.14</p>
                </div>
              </div>
              <div className="hidden md:flex max-w-[780px]">
                <img
                  className="object-cover w-full"
                  src={`${process.env.PUBLIC_URL}/images/Asset 1@3x 1.jpg`}
                  alt="Asset 1@3x 1"
                />
              </div>
            </div>
          </section>
          <section className="px-4 bg-center bg-no-repeat bg-cover ">
            <div className="pt-[2rem] md:pb-[9.5rem] pb-[8rem] md:max-w-[76rem] mx-auto">
              <MainSlidePhotographers />
              <MobileSlidePhotographers />
            </div>
          </section>
          <section className="px-4 bg-Neutrals-Grey9">
            <div className="pt-[2rem] md:pt-0 md:pb-[9.5rem] pb-[8rem] md:max-w-[76rem] mx-auto">
              <MainSlideEvent />
              <MobileSlideEvent />
            </div>
          </section>
          <StibeeSubscriptionForm />
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
          <section className="md:hidden z-[10]">
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
      <div className="fixed bottom-[1.125rem] right-4 md:hidden z-[1]">
        <div>
          {expandButtons ? (
            <ul className="flex flex-col items-center justify-center gap-2 mx-auto">
              {/* naver */}
              <li>
                <button className="w-[60px]" onClick={naverShare}>
                  <img
                    className="w-full"
                    src={`${process.env.PUBLIC_URL}/images/shareButtons/share_naver_button.svg`}
                    alt="share_naver_button"
                  />
                </button>
              </li>
              {/* facebook */}
              <li>
                <button className="w-[60px]" onClick={facebookShare}>
                  <img
                    className="w-full"
                    src={`${process.env.PUBLIC_URL}/images/shareButtons/share_facebook_button.svg`}
                    alt="share_facebook_button"
                  />
                </button>
              </li>
              {/* twitter */}
              <li>
                <button className="w-[60px]" onClick={twitterShare}>
                  <img
                    className="w-full"
                    src={`${process.env.PUBLIC_URL}/images/shareButtons/share_twitter_button.svg`}
                    alt="share_twitter_button"
                  />
                  <script
                    async
                    src={`${process.env.PUBLIC_URL}/https://platform.twitter.com/widgets.js`}
                    charSet="utf-8"
                  ></script>
                </button>
              </li>
              {/* kakao */}
              <li>
                <button
                  id="kakaoShareButton"
                  className="w-[60px]"
                  onClick={kakaoShare}
                >
                  <img
                    className="w-full"
                    src={`${process.env.PUBLIC_URL}/images/shareButtons/share_kakao_button.svg`}
                    alt="share_kakao_button"
                  />
                </button>
              </li>
              {/* clipboard url */}
              <li>
                <button className="w-[60px]">
                  <CopyToClipboard text={currentUrl}>
                    <img
                      className="w-full cursor-pointer"
                      src={`${process.env.PUBLIC_URL}/images/shareButtons/share_link_button.svg`}
                      alt="share_link_button"
                      onClick={() => alert("링크가 복사되었습니다.")}
                    />
                  </CopyToClipboard>
                </button>
              </li>
              <li>
                <button className="w-[60px]" onClick={toggleButtons}>
                  <img
                    className="w-full"
                    src={`${process.env.PUBLIC_URL}/images/shareButtons/closeButton.svg`}
                    alt="closeButton"
                  />
                </button>
              </li>
            </ul>
          ) : (
            <div onClick={toggleButtons}>
              <button className="w-[60px]">
                <img
                  className="w-full"
                  src={`${process.env.PUBLIC_URL}/images/shareButtons/openButton.svg`}
                  alt="openButton"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <CookiesProvider>
        <div className="App">
          {openModal && !hasCookie && (
            <MainModal
              closeModal={() => setOpenModal(false)}
              closeModalUntilExpires={closeModalUntilExpires}
            />
          )}
        </div>
      </CookiesProvider> */}
    </>
  );
};

export default Main;
