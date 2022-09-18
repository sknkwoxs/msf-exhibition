import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
      autoplaySpeed: 5000,
      prevArrow: "",
      nextArrow: "",
    };

    const eventsCardComponent = [
      {
        url: "/photographers/GaelTurine",
        img_src: "/images/SD-default.png",
        title: "사진전 관람",
        sub_title:
          "11.02(수) - 11.14(월) 10:30-18:00 (11.05(토) / 11.12(토) 오전 제외)",
      },
      {
        url: "/photographers/AlessandroPenso",
        img_src: "/images/SD-default.png",
        title: "전시 사진 기부 옥션",
        sub_title: "11.02 (수) – 11.14 (월) 13일간",
      },
      {
        url: "/photographers/JohnVink",
        img_src: "/images/SD-default.png",
        title: "스페셜 토크",
        sub_title: "11.05 (토) 12:00-13:00",
      },
      {
        url: "/photographers/DominicNahr",
        img_src: "/images/SD-default.png",
        title: "도슨트 가이드 투어",
        sub_title: "자세한 일정은 추후 안내 예정",
      },
      {
        url: "/photographers/CedricGerbehaye",
        img_src: "/images/SD-default.png",
        title: "배우 유해진 오디오 가이드",
        // sub_title: "",
      },
      {
        url: "/photographers/HannahReyesMorales",
        img_src: "/images/SD-default.png",
        title: "다큐멘터리 에고이스트 온라인 무료 상영",
        sub_title: "11.02(수)-11.14(월)",
      },
    ];

    return (
      <div id="mainSlide" className="hidden mx-auto md:block">
        <div className="flex items-center justify-between mb-10">
          <p className="H4">작가 소개</p>
          <div className="flex items-center">
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
          </div>
        </div>
        <Slider {...settings} ref={(c) => (this.slider = c)}>
          {eventsCardComponent.map((eventsCardComponent, index) => {
            return (
              <li className="mx-3 list-none" key={index}>
                {/* <Link to={eventsCardComponent.url}> */}
                <div className="mb-8 -mx-3 thumbnail">
                  <img
                    className="object-cover w-full h-full"
                    src={eventsCardComponent.img_src}
                    alt="photographers_thumb"
                  />
                </div>
                <p className="mb-2 H5 card_title">
                  {eventsCardComponent.title}
                </p>
                <p className="text-Neutrals-Grey5 DB2">
                  {eventsCardComponent.sub_title}
                </p>
                {/* </Link> */}
              </li>
            );
          })}
        </Slider>
      </div>
    );
  }
}
