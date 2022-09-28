import React, { Component } from "react";
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";

export default class MobileSlidePhotographers extends Component {
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
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      // prevArrow: "",
      // nextArrow: "",
      arrows: false,
      draggable: false,
      autoplay: true,
    };

    const photographersCardComponent = [
      {
        url: "/photographers/GaelTurine#",
        img_src: "/images/mainPageThumbnail/gael_thumb.png",
        title: "가엘 튀린",
        sub_title: "Gaël Turine - Angola",
      },
      {
        url: "/photographers/AlessandroPenso#",
        img_src: "/images/mainPageThumbnail/alessandro_thumb.png",
        title: "알레산드로 펜소",
        sub_title: "Alessandro Penso - Mediterranean Sea",
      },
      {
        url: "/photographers/JohnVink#",
        img_src: "/images/mainPageThumbnail/john_thumb.png",
        title: "존 빈크",
        sub_title: "John Vink - Honduras",
      },
      {
        url: "/photographers/DominicNahr#",
        img_src: "/images/mainPageThumbnail/dominic_thumb.png",
        title: "도미닉 나흐르",
        sub_title: "Dominic Nahr - South Sudan",
      },
      {
        url: "/photographers/CedricGerbehaye#",
        img_src: "/images/mainPageThumbnail/cedric_thumb.png",
        title: "세드릭 게르베하이",
        sub_title: "Cédric Gerbehaye - Democratic Republic of the Congo",
      },
      {
        url: "/photographers/HannahReyesMorales#",
        img_src: "/images/mainPageThumbnail/hannah_thumb.png",
        title: "해나 레예스 모랄레스",
        sub_title: "Hannah Reyes Morales - Philippines",
      },
      {
        url: "/photographers/MassimoBerruti#",
        img_src: "/images/mainPageThumbnail/massimo_thumb.png",
        title: "마시모 베루티",
        sub_title: "Massimo Berruti - Pakistan",
      },
      {
        url: "/photographers/AshfikaRahman#",
        img_src: "/images/mainPageThumbnail/ashfika_thumb.png",
        title: "아슈피카 라만",
        sub_title: "Ashfika Rahman - Bangladesh",
      },
    ];

    return (
      <div id="mainSlide" className="mx-auto md:hidden slide">
        <div className="flex items-center justify-between mb-10">
          <p className="TH4">작가 소개</p>
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
          {photographersCardComponent.map(
            (photographersCardComponent, index) => {
              return (
                <li className="list-none" key={index}>
                  <HashLink to={photographersCardComponent.url}>
                    <div className="mb-6 h-0 pb-[75.609%] overflow-hidden relative z-0">
                      <img
                        className="absolute object-cover w-full h-full thumbnail"
                        src={`${process.env.PUBLIC_URL}/${photographersCardComponent.img_src}`}
                        alt="photographers_thumb"
                      />
                    </div>
                    <p className="mb-2 text-center H5 card_title">
                      {photographersCardComponent.title}
                    </p>
                    <p className="text-center text-Neutrals-Grey5 DB2">
                      {photographersCardComponent.sub_title}
                    </p>
                  </HashLink>
                </li>
              );
            }
          )}
        </Slider>
      </div>
    );
  }
}
