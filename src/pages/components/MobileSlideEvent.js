import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import YouTube from "react-youtube";

export default class MobileSlideEvent extends Component {
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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      prevArrow: "",
      nextArrow: "",
      arrows: false,
      // autoplay: true,
    };

    return (
      <div id="mainSlide" className="mx-auto md:hidden slide">
        <div className="flex items-center justify-between mb-10">
          <p className="H4">참여 방법</p>
          {/* <div className="flex items-center">
            <button className="main_slider_arrows_left" onClick={this.previous}>
              <img
                src="/images/svgIcons/slider_arrows_left.svg"
                alt="slider_arrows_left"
              />
            </button>
            <div className="h-6 border border-r border-Neutrals-Grey7 " />
            <button className="main_slider_arrows_right" onClick={this.next}>
              <img
                src="/images/svgIcons/slider_arrows_right.svg"
                alt="slider_arrows_right"
              />
            </button>
          </div> */}
        </div>
        <Slider {...settings} ref={(c) => (this.slider = c)}>
          <li className="list-none">
            <HashLink to="/Participate#Section1">
              <div className="mb-6 h-0 pb-[75.609%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src="/images/event_slide_1.png"
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 card_title">사진전 관람</p>
              <p className="text-Neutrals-Grey5 DB2">
                11.02(수) - 11.14(월) 10:30-18:00
                <br /> *11.05(토)/11.12(토) 오전 제외
              </p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section2">
              <div className="mb-6 h-0 pb-[75.609%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src="/images/event_slide_2.png"
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 card_title">전시 사진 기부 옥션</p>
              <p className="text-Neutrals-Grey5 DB2">
                11.02 (수) - 11.14 (월) 13일간
              </p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section3">
              <div className="mb-6 h-0 pb-[75.609%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src="/images/event_slide_3.png"
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 card_title">스페셜 토크</p>
              <p className="text-Neutrals-Grey5 DB2">11.05 (토) 12:00-13:00</p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section4">
              <div className="mb-6 h-0 pb-[75.609%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src="/images/event_slide_4.png"
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 card_title">도슨트 가이드 투어</p>
              <p className="text-Neutrals-Grey5 DB2">11.05 (토) 12:00-13:00</p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section5">
              <div className="mb-6 h-0 pb-[75.609%] overflow-hidden relative z-0">
                <img
                  className="absolute object-cover w-full h-full thumbnail"
                  src="/images/event_slide_5.png"
                  alt="participate_thumb"
                />
              </div>
              <p className="mb-2 H5 card_title">배우 유해진 오디오 가이드</p>
            </HashLink>
          </li>
          <li className="list-none">
            <HashLink to="/Participate#Section1">
              <div className="mb-6 h-0 pb-[75.609%] overflow-hidden relative z-0">
                <YouTube
                  className="absolute object-cover w-full h-full thumbnail"
                  videoId="zlcdcJUSJBs"
                  opts={{
                    playerVars: {
                      // width: "100%",
                      autoplay: 1,
                      modestbranding: 1,
                    },
                  }}
                  onEnd={(e) => {
                    e.target.stopVideo(0);
                  }}
                />
              </div>
              <p className="mb-2 H5 card_title">
                다큐멘터리 에고이스트 온라인 무료 상영
              </p>
              <p className="text-Neutrals-Grey5 DB2">11.02(수)-11.14(월)</p>
            </HashLink>
          </li>
        </Slider>
      </div>
    );
  }
}
