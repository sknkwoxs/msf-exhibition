import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      dotsClass: "slick-dots",
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      // centerMode: true,
      // centerPadding: "24px",
    };
    return (
      <div className="mx-auto md:hidden">
        <Slider {...settings}>
          <div className="-mx-3">
            <Link to="/photographers/GaelTurine">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/gael_thumb.png"
                  alt="gael_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">가엘 튜린 - 앙골라</p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                Gaël Turine - Angola
              </p>
            </Link>
          </div>
          <div className="-mx-3">
            <Link to="/photographers/AlessandroPenso">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/alessandro_thumb.png"
                  alt="alessandro_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">알레산드로 펜소 - 지중해</p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                Alessandro Penso - Mediterranean Sea
              </p>
            </Link>
          </div>
          <div className="-mx-3">
            <Link to="/photographers/JohnVink">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/john_thumb.png"
                  alt="john_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">존 빈크 - 온두라스</p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                John Vink - Honduras
              </p>
            </Link>
          </div>
          <div className="-mx-3">
            <Link to="/photographers/DominicNahr">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/dominic_thumb.png"
                  alt="dominic_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">도미닉 나흐르 - 남수단</p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                Dominic Nahr - South Sudan
              </p>
            </Link>
          </div>
          <div className="-mx-3">
            <Link to="/photographers/CedricGerbehaye">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/cedric_thumb.png"
                  alt="cedric_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">
                세드릭 게르베하이 - 콩고민주공화국
              </p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                Cédric Gerbehaye - Democratic Republic of the Congo
              </p>
            </Link>
          </div>
          <div className="-mx-3">
            <Link to="/photographers/HannahReyesMorales">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/hannah_thumb.png"
                  alt="hannah_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">
                해나 레예스 모랄레스 - 필리핀
              </p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                Hannah Reyes Morales - Philippines
              </p>
            </Link>
          </div>
          <div className="-mx-3">
            <Link to="/photographers/MassimoBerruti">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/massimo_thumb.png"
                  alt="massimo_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">마시모 베루티 - 파키스탄</p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                Massimo Berruti - Pakistan
              </p>
            </Link>
          </div>
          <div className="-mx-3">
            <Link to="/photographers/AshfikaRahman">
              <div className="mb-8 h-0 pb-[75%] overflow-hidden relative z-0 mx-3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="/images/mainPageThumbnail/ashfika_thumb.png"
                  alt="ashfika_thumb"
                />
              </div>
              <p className="mb-2 text-center H5">아슈피카 라만 - 방글라데시</p>
              <p className="text-center text-Neutrals-Grey5 DB2">
                Ashfika Rahman - Bangladesh
              </p>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
