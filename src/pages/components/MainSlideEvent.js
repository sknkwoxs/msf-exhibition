import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import YouTube from "react-youtube";

export default class MainSlideEvent extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      prevArrow: "",
      nextArrow: "",
      arrows: false,
      draggable: true,
      touchThreshold: 100,
      autoplay: true,
    };

    // const eventsCardComponent = [
    //   {
    //     url: "/photographers/GaelTurine",
    //     img_src: "/images/event_slide_1.png",
    //     title: "사진전 관람",
    //     sub_title:
    //       "11.02(수) - 11.14(월) 10:30-18:00 *11.05(토)/11.12(토) 오전 제외",
    //   },
    //   {
    //     url: "/photographers/AlessandroPenso",
    //     img_src: "/images/event_slide_2.png",
    //     title: "전시 사진 기부 옥션",
    //     sub_title: "11.02 (수) - 11.14 (월) 13일간",
    //   },
    //   {
    //     url: "/photographers/JohnVink",
    //     img_src: "/images/event_slide_3.png",
    //     title: "스페셜 토크",
    //     sub_title: "11.05 (토) 12:00-13:00",
    //   },
    //   {
    //     url: "/photographers/DominicNahr",
    //     img_src: "/images/event_slide_4.png",
    //     title: "도슨트 가이드 투어",
    //     sub_title: "자세한 일정은 추후 안내 예정",
    //   },
    //   {
    //     url: "/photographers/CedricGerbehaye",
    //     img_src: "/images/event_slide_5.png",
    //     title: "배우 유해진 오디오 가이드",
    //     sub_title: "",
    //   },
    //   {
    //     url: "/photographers/HannahReyesMorales",
    //     img_src: "/images/event_slide_6.png",
    //     title: "다큐멘터리 에고이스트 온라인 무료 상영",
    //     sub_title: "11.02(수)-11.14(월)",
    //   },
    // ];

    return (
      <div id="mainSlide" className="hidden mx-auto md:block mainSlide">
        <div className="flex items-center justify-between mt-8 mb-10">
          <p className="H4">참여 방법</p>
          <div className="flex items-center">
            <button
              className="main_slider_arrows_left w-[30px]"
              onClick={this.previous}
            >
              <img
                className="w-full"
                src={`${process.env.PUBLIC_URL}/images/svgIcons/slider_arrows_left.svg`}
                alt="slider_arrows_left"
              />
            </button>
            <div className="h-6 mx-2 border border-r border-Neutrals-Grey7 " />
            <button
              className="main_slider_arrows_right w-[30px]"
              onClick={this.next}
            >
              <img
                className="w-full"
                src={`${process.env.PUBLIC_URL}/images/svgIcons/slider_arrows_right.svg`}
                alt="slider_arrows_right"
              />
            </button>
          </div>
        </div>
        <Slider {...settings} ref={(c) => (this.slider = c)}>
          <li className="list-none">
            <HashLink to="/Participate#Section1">
              <div className="mb-6 h-0 pb-[74.285%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src={`${process.env.PUBLIC_URL}/images/event_slide_1.png`}
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 cardTitle">사진전 관람</p>
              <p className="text-Neutrals-Grey5 DB2">
                11.02(수) - 11.14(월) 10:30-18:00
                <br /> *11.05(토)/11.12(토) 오전 제외
              </p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink
              to="/Participate#Section2"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "top" })
              }
            >
              <div className="mb-6 h-0 pb-[74.285%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src={`${process.env.PUBLIC_URL}/images/event_slide_2.png`}
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 cardTitle">전시 사진 기부 옥션</p>
              <p className="text-Neutrals-Grey5 DB2">
                11.02 (수) - 11.14 (월) 13일간
              </p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section3">
              <div className="mb-6 h-0 pb-[74.285%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src={`${process.env.PUBLIC_URL}/images/event_slide_3.png`}
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 cardTitle">스페셜 토크</p>
              <p className="text-Neutrals-Grey5 DB2">11.05 (토) 12:00-13:00</p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section4">
              <div className="mb-6 h-0 pb-[74.285%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src={`${process.env.PUBLIC_URL}/images/event_slide_4.png`}
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 cardTitle">도슨트 가이드 투어</p>
              <p className="text-Neutrals-Grey5 DB2">11.05 (토) 12:00-13:00</p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section5">
              <div className="mb-6 h-0 pb-[74.285%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src={`${process.env.PUBLIC_URL}/images/event_slide_5.png`}
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 cardTitle">배우 유해진 오디오 가이드</p>
            </HashLink>
          </li>
          <li className="list-none">
            <div className="mb-6 h-0 pb-[74.285%] overflow-hidden relative z-0">
              <YouTube
                className="absolute object-cover w-full h-full"
                videoId="zlcdcJUSJBs"
                opts={{
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
                dataUrl="https://www.youtube.com/watch?v=zlcdcJUSJBs"
              />
            </div>
            <p className="mb-2 H5 cardTitle">
              다큐멘터리 에고이스트 온라인 무료 상영
            </p>
            <p className="text-Neutrals-Grey5 DB2">11.02(수)-11.14(월)</p>
          </li>
        </Slider>
      </div>
    );
  }
}
