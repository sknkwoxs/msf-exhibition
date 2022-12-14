import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import YouTube from "react-youtube";
import Modal from "./Modal";

export default function Participate() {
  return (
    <>
      <div className="h-[7.5rem] bg-black hidden md:flex" />
      <div>
        <div className="md:mb-[6rem] mb-[4rem] px-4">
          <div
            id="Section1"
            className="flex md:grid md:grid-cols-[1fr_max(488px)] flex-col-reverse md:max-w-[76rem] mx-auto md:gap-[6.5rem] gap-[1.625rem] md:pt-[6rem] pt-[7rem] md:mb-[6rem] mb-[3rem]"
          >
            <div className="my-auto">
              <p className="mb-6 text-Brand-Primary md:text-[2rem] leading-[2.5rem] TH4">
                사진전 관람
              </p>
              <p className="mb-4 font-PTSemiBold DB1 text-Neutrals-Grey7">
                전시 기간: 11.02(수) - 11.14(월) 10:30-18:00
                *11.05(토)/11.12(토) 오전 제외
                <br /> 전시 장소: 갤러리 라메르 (
                <HashLink to="/Address">
                  <span className="underline hover:text-Neutrals-Grey9">
                    오시는 길
                  </span>
                </HashLink>
                )
              </p>
              <p className="DB2 text-[#636B73]">
                * 전시와 모든 이벤트에는 무료로 참여가 가능하며, 현장 방문을
                하시는 분들을 위한 스페셜 굿즈가 준비되어 있으니 많은 관심과
                참여를 부탁드립니다. <br id="Section2" />* 11.05(토), 11.12(토)
                오전은 별도 내부 이벤트가 있습니다. 해당 일자에는 오후 2시-6시
                사이에만 관람이 가능하신 점 참고 부탁드립니다.
              </p>
            </div>
            <div className="h-0 pb-[100%] overflow-hidden relative z-0">
              <img
                className="absolute object-cover w-full h-full"
                src={`${process.env.PUBLIC_URL}/images/participate1.jpg`}
                alt="participate1"
              />
            </div>
          </div>
          <div className="border-b border-Neutrals-Grey3" />
          <div className="flex md:grid md:grid-cols-[1fr_max(488px)] flex-col-reverse md:max-w-[76rem] mx-auto md:gap-[6.5rem] gap-[1.625rem] md:mt-[6rem] md:mb-[6rem] mb-[3rem]">
            <div className="my-auto">
              <p className="mb-6 text-Brand-Primary md:text-[2rem] leading-[2.5rem] TH4">
                전시 사진 기부 옥션
              </p>
              <p className="DB1 text-Neutrals-Grey6">
                세계적인 보도사진 작가 8인이 국경없는의사회 활동 현장에서 촬영한
                사진을 소장할 수 있는 기회! 국경없는의사회 한국 사무소 설립
                10주년을 기념해 고품질의 사진(액자 포함)을 구매하시고 생명을
                살리는 기부 옥션에도 참여하세요.
              </p>
              <br />
              <p className="font-PTSemiBold text-Neutrals-Grey7 DB1">
                옥션 기간: 11.02 (수) - 11.14 (월) 13일간
                <br /> 참여 방법:
                <br /> 1. 국경없는의사회 설립 10주년 기념 사진전을 관람한다
                <br />
                2.사진전에서 옥션 지정 표시가 된 8개의 작품 중 구매 소장하고
                싶은 사진을 선택한다
                <br /> 3.국경없는의사회에 기부하고 싶은 해당 사진의 적정
                구매가를 정한다
                <br /> 4.전시장 내 인포데스크를 방문해 이름과 연락처, 해당
                구매가를 적어 제출한다
              </p>
              <br />
              <p className="DB2 text-[#636B73]">
                * 사진전 종료 이후 가장 높은 금액을 제출하신 분께 개별적으로
                연락 드릴 예정입니다. <br id="Section3" />* 옥션을 통해 발생한
                모든 사진 구매 비용은 전액 국경없는의사회 후원금으로 사용되며,
                연말 기부금 영수증 발급이 가능합니다.
              </p>
            </div>
            <div className="h-0 pb-[100%] overflow-hidden relative z-0">
              <img
                className="absolute object-cover w-full h-full"
                src={`${process.env.PUBLIC_URL}/images/participate2.png`}
                alt="participate2"
              />
            </div>
          </div>
          <div className="border-b border-Neutrals-Grey3" />
          <div className="flex md:grid md:grid-cols-[1fr_max(488px)] flex-col-reverse md:max-w-[76rem] mx-auto md:gap-[6.5rem] gap-[1.625rem] md:mt-[6rem] md:mb-[6rem] mb-[3rem]">
            <div className="my-auto">
              <p className="mb-6 text-Brand-Primary md:text-[2rem] leading-[2.5rem] TH4">
                스페셜 토크
                <br className="md:hidden" />
                <span className="md:text-[24px] text-[16px]">
                  &nbsp;&lt;떼모아나지 Témoignage: 위기를 증언하다&gt;
                </span>
              </p>
              <p className="DB1 text-[#636B73]">
                앙골라, 르완다, 레바논 등 전 세계 인도적 위기 현장에서 구호
                활동을 진행해 온 티에리 코펜스 국경없는의사회 한국 사무총장과
                남수단, 파키스탄, 필리핀 등지에서 최근까지 국경없는의사회 한국
                소속으로 활동해 온 이효민 구호활동가가 사진 너머의 생생한 구호
                현장 이야기를 증언합니다.
                <br />
                <br />
                <span className="font-PTSemiBold text-Neutrals-Grey7">
                  일시: 11.05(토) 12:00-13:00
                  <br id="Section4" /> 게스트: 티에리 코펜스 국경없는의사회 한국
                  사무총장, 이효민 국경없는의사회 구호활동가(마취과 전문의)
                </span>
              </p>
            </div>
            <div className="h-0 pb-[100%] overflow-hidden relative z-0">
              <img
                className="absolute object-cover w-full h-full"
                src={`${process.env.PUBLIC_URL}/images/participate3.png`}
                alt="participate3"
              />
            </div>
          </div>
          <div className="border-b border-Neutrals-Grey3" />
          <div className="flex md:grid md:grid-cols-[1fr_max(488px)] flex-col-reverse md:max-w-[76rem] mx-auto md:gap-[6.5rem] gap-[1.625rem] md:mt-[6rem] md:mb-[6rem] mb-[3rem]">
            <div className="my-auto">
              <p className="mb-6 text-Brand-Primary md:text-[2rem] leading-[2.5rem] TH4">
                도슨트 가이드 투어
              </p>
              <p className="DB1 text-[#636B73]">
                국경없는의사회 한국 사무소 설립 10주년을 기념하기 위해 개최되는
                MORE THAN A PICTURE 사진전에는 8명의 사진작가가 8곳의
                국경없는의사회 구호활동 현장에서 찍은 총 30여 점의 사진이
                전시됩니다. 인도적 위기 상황과 그곳에서의 국경없는의사회 활동에
                대해 구호활동가 혹은 국경없는의사회 한국 사무소 직원이 직접
                도슨트가 되어 설명해 드립니다. 어린이의 눈높이에 맞춰 진행되는
                어린이 도슨트 투어도 준비되어 있으니 많은 관심 부탁드립니다.
              </p>
              <div id="Section5">
                <div className="">
                  <Modal />
                </div>
              </div>
            </div>
            <div className="h-0 pb-[100%] overflow-hidden relative z-0">
              <img
                className="absolute object-cover w-full h-full"
                src={`${process.env.PUBLIC_URL}/images/participate4.png`}
                alt="participate4"
              />
            </div>
          </div>
          <div className="border-b border-Neutrals-Grey3" />
          <div className="flex md:grid md:grid-cols-[1fr_max(488px)] flex-col-reverse md:max-w-[76rem] mx-auto md:gap-[6.5rem] gap-[1.625rem] md:mt-[6rem] md:mb-[6rem] mb-[3rem]">
            <div className="my-auto">
              <p className="mb-6 text-Brand-Primary md:text-[2rem] leading-[2.5rem] TH4">
                배우 유해진 오디오 가이드
              </p>
              <p className="DB1 text-[#636B73]">
                국경없는의사회 MORE THAN A PICTURE 사진전에 오셔서 국민배우
                유해진의 목소리로 사진전 해설을 들어보세요! 국경없는의사회의
                오랜 후원자로 깊은 인연을 맺어 온 배우 유해진님이 작년
                다큐멘터리 ‘에고이스트’ 내레이션에 이어 올해도 사진전 오디오
                가이드에 목소리 재능기부를 해주셨습니다. 전시된 사진 옆 QR
                코드를 통해 깊은 울림을 담은 배우 유해진님의 전시 해설을 들으실
                수 있습니다.
                <br />
                <br />
                <span id="Section6" className="DB2">
                  *개인 이어폰을 지참해 주세요.
                </span>
              </p>
            </div>
            <div className="h-0 pb-[100%] overflow-hidden relative z-0">
              <img
                className="absolute object-cover w-full h-full"
                src={`${process.env.PUBLIC_URL}/images/participate5.png`}
                alt="participate5"
              />
            </div>
          </div>
          <div className="border-b border-Neutrals-Grey3" />
          <div className="flex md:grid md:grid-cols-[1fr_max(488px)] flex-col-reverse md:max-w-[76rem] mx-auto md:gap-[6.5rem] gap-[1.625rem] md:mt-[6rem] md:mb-[6rem] mb-[3rem]">
            <div className="my-auto">
              <p className="mb-6 text-Brand-Primary md:text-[2rem] leading-[2.5rem] TH4">
                다큐멘터리 에고이스트 온라인 무료 상영
              </p>
              <p className="DB1 text-[#636B73]">
                국경없는의사회 구호활동가 40명의 개인적인 이야기를 담은
                &lt;에고이스트: 이기심과 이타심의 경계&gt;가 사진전 기간 동안
                무료 공개됩니다! 다큐멘터리를 통해 국경없는의사회 구호활동가들이
                이 특별한 길을 걷게 된 계기와 소명의식, 현장에서 마주하는
                두려움과 무력감, 남겨진 가족과 연인의 이야기에 대해 알아보세요.
                <span className="block mt-6 font-PTSemiBold text-Neutrals-Grey7 DB1">
                  시청 기간: 11.02(수)-11.14(월)
                </span>
              </p>
              <a
                className="inline-block px-8 py-2 mt-6 border rounded border-Neutrals-Grey7"
                href="https://www.youtube.com/watch?v=O6iFAaWLyX0"
                target="_blank"
                rel="noopener noreferrer"
              >
                영화 바로 시청하기
              </a>
            </div>
            <div className="bg-Neutrals-Grey8 pb-[100%] h-0">
              <div className="h-0 pb-[67.21%] overflow-hidden relative z-0 participateYoutubeEmbed mt-[50%] -translate-y-[50%]">
                <YouTube
                  className="absolute object-cover w-full h-full"
                  videoId="zlcdcJUSJBs"
                  opts={{
                    playerVars: {
                      autoplay: 1,
                      mute: 1,
                      rel: 0,
                      modestbranding: 1,
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
