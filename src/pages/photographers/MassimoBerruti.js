import { HashLink } from "react-router-hash-link";
import YouTube from "react-youtube";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import ShareButtons from "../components/ShareButtons";

const MassimoBerruti = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4),
    1: useScrollFadeIn("up", 1, 0.4),
    2: useScrollFadeIn("up", 1, 0.4),
    3: useScrollFadeIn("up", 1, 0.4),
    4: useScrollFadeIn("up", 1, 0.4),
    5: useScrollFadeIn("up", 1, 0.4),
    6: useScrollFadeIn("up", 1, 0.4),
    7: useScrollFadeIn("up", 1, 0.4),
    8: useScrollFadeIn("left", 1, 0.4),
    9: useScrollFadeIn("right", 1, 0.4),
    10: useScrollFadeIn("up", 1, 0.4),
    11: useScrollFadeIn("up", 1, 0.4),
  };

  return (
    <>
      <div className="md:pt-[7.5rem] pt-[4rem] bg-black"></div>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="md:mb-[4rem] mb-[3rem] flex justify-center md:h-screen h-[calc(100vh-64px)]">
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}/images/MassimoBerruti/7 1.png`}
            alt="7 1"
          />
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="text-center">
            <div>
              <h3
                className="md:text-[2.5rem] md:leading-[3rem] MH2 font-extrabold mb-1 md:mb-2"
                {...animatedItem[0]}
              >
                마시모 베루티 - 파키스탄
              </h3>
              <h3
                className="md:mb-8 mb-5 font-normal md:text-[1.5rem] md:leading-[2rem] text-[1.125rem] leading-[1.5rem] font-sans italic"
                {...animatedItem[1]}
              >
                Massimo Berruti - Pakistan
              </h3>
              <p
                className="mb-4 md:DB1 md:text-[1.125rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[2]}
              >
                타타(Thatta), 2010년 8월 28일
              </p>
              <p
                className="md:mb-[3.375rem] mb-[3rem] md:DB3 md:text-[0.875rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[3]}
              >
                Canon EOS 5D Mark II 24mm f 6.3 1/1000s ISO 400
              </p>
              <p
                className="text-left max-w-[63rem] mx-auto DB1"
                {...animatedItem[4]}
              >
                2010년, 파키스탄에서 50년 만의 최악의 홍수가 발생해 약 1,400만
                명이 피해를 입었다. 북동부 산악지대에서부터 인구밀도가 높은
                계곡과 평원 쪽으로 빗물이 흘러 수많은 사람들이 집을 잃고
                피난했다. 2022년, 파키스탄 사상 최악의 홍수가 발생해 국토의
                3분의 1이 침수되고 2억 2천만 인구가 피해를 입었다.
                국가비상사태가 선포된 직후 국경없는의사회는 가용한 모든 자원을
                동원해 구호 활동을 시작했고, 현재에도 이동진료소 운영 및
                위생품과 필수품을 보급하고 있다.
              </p>
            </div>
            <div
              className="md:my-[6rem] my-[5rem] h-0 pb-[55.921%] overflow-hidden relative z-0"
              {...animatedItem[5]}
            >
              <YouTube
                className="absolute object-cover w-full h-full"
                videoId="ULZtTdBOF0s"
                opts={{
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
                dataUrl="https://youtu.be/ULZtTdBOF0s"
              />
            </div>
          </section>
          <section>
            <div>
              <div className="mb-10 md:mb-12" {...animatedItem[6]}>
                <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
                <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                  컨택트시트
                </p>
              </div>
              <div className="md:mb-[6rem] mb-[5rem]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/MassimoBerruti/MASSIMO BERRUTI 02 1.png`}
                  alt="MASSIMO BERRUTI 02 1"
                />
              </div>
              <p
                className="mb-4 max-w-[63rem] mx-auto DB1"
                {...animatedItem[7]}
              >
                베루티는 파키스탄에서 수십년 만에 발생한 최악의 홍수를 타임지에
                보도하기 위해 파키스탄 스왓 골짜기를 방문했다. 이 지역은 집
                대부분이 진흙으로 지어져 홍수 피해를 크게 받은 곳이었다.
                베루티는 다리가 무너진 사건을 일기에 기록하기도 했다.
                <br />
                <br />
                물이 불어나 주민들은 아무 데도 오가지 못하고, 환자들은 더 이상
                병원에 가 치료를 받을 수도 없었다. 깨끗한 식수도 더 이상 구할 수
                없었다. 다행히 시간이 지날수록 수위가 낮아져 구호활동가들이 피해
                지역으로 가 인도적 지원을 제공할 수 있었다.
              </p>
              <div className="flex md:flex-row flex-col gap-8 md:my-[6rem] my-[5rem]">
                <div {...animatedItem[8]}>
                  <img
                    className="mx-auto"
                    src={`${process.env.PUBLIC_URL}/images/MassimoBerruti/MASSIMO BERRUTI EXTRA 04 1.png`}
                    alt="MASSIMO BERRUTI EXTRA 04 1"
                  />
                </div>
                <div {...animatedItem[9]}>
                  <img
                    className="mx-auto"
                    src={`${process.env.PUBLIC_URL}/images/MassimoBerruti/MASSIMO BERRUTI EXTRA 03 - Copy 1.png`}
                    alt="MASSIMO BERRUTI EXTRA 03 - Copy 1"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-10 md:mb-12" {...animatedItem[10]}>
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                마시모 베루티 Massimo Berruti
              </p>
            </div>
            <p className="max-w-[63rem] mx-auto DB1" {...animatedItem[11]}>
              마시모 베루티는 이탈리아 출신의 사진작가이다. 2003년 대학에서
              생물학을 전공하던 그는 우연한 기회로 사진을 처음 접한 후 독학하여
              일 년 후 프리랜스 사진작가가 되었다.
              <br />
              <br />
              베루티는 2008년부터 4년 동안 중앙아시아에서 활동하며 파키스탄 및
              중앙아시아 등지의 사회적 변화를 취재했다. 베루티의 대표적인
              프로젝트 ‘먼지투성이 길{" "}
              <span className="font-sans italic text-[0.875rem]">
                The Dusty Path
              </span>
              ’ 은 카르미냑 재단{" "}
              <span className="font-sans italic text-[0.875rem]">
                Carmignac Foundation
              </span>{" "}
              의 지원을 받아 그의 첫 모노그래프인 ‘라슈카르{" "}
              <span className="font-sans italic text-[0.875rem]">Lashkars</span>{" "}
              ’로 출간됐다.
              <br />
              <br />
              베루티는 타임, 뉴요커, 뉴스위크, 엘에스프레소 등 다양한 매체와
              정기적으로 협업하고 있으며, 다수의 지원금과 상을 받았다. 베루티의
              사진은 카르미냑 재단과 국립로마현대미술관 컬렉션에 포함됐고,
              오슬로 노벨평화센터와 아를 국제사진 페스티벌, 국제 보도사진
              페스티벌 등 다양한 사진전에 전시되기도 했다. 현재는 국제 보도사진
              센터의 회원이며 로마에서 활동하고 있다.
            </p>
          </section>
          <section className="max-w-[63rem] mx-auto md:pb-[8rem] pb-[6rem]">
            <div>
              <div className="md:px-8 md:pt-8 md:pb-10 p-6 border md:mb-[5rem] mb-[4rem] border-Neutrals-Grey7 rounded-lg">
                <img
                  className="mb-4"
                  src={`${process.env.PUBLIC_URL}/images/svgIcons/introduction_footer_logo.svg`}
                  alt="introduction_footer_logo"
                />
                <p className="mb-4 md:H4 MH3">국경없는의사회는</p>
                <p className="DB1">
                  2010년, 50년 만의 발생한 최악의 홍수로 수많은 마을이 고립되고
                  식량과 깨끗한 식수도 부족해진 파키스탄에서 긴급 대응을 펼쳤다.
                  질병이 창궐하는 등 인도적 지원을 지속하기 어려운 상황에서도
                  국경없는의사회 직원 1,600여 명이 병원과 이동진료소에서
                  의료지원을 제공하며, 식수, 텐트, 위생용품 및 조리용품 등을
                  보급했다. 2022년, 파키스탄 사상 최악의 홍수가 발생해 국토의
                  3분의 1이 침수되고 2억 2천만 인구가 피해를 입었다.
                  국가비상사태가 선포된 직후 국경없는의사회는 가용한 모든 자원을
                  동원해 구호 활동을 시작했고, 현재에도 이동진료소 운영 및
                  위생품과 필수품을 보급하고 있다.
                </p>
              </div>
              <div>
                <p className="flex justify-center mx-auto mb-4 font-bold md:mb-6 DB3">
                  내 채널에 공유하기
                </p>
                <div className="flex justify-center gap-2 mb-10 md:hidden">
                  <ShareButtons />
                </div>
                <div className="flex items-center justify-between">
                  <HashLink to="/photographers/HannahReyesMorales#">
                    <div className="flex items-center gap-2 hover:text-Neutrals-Grey3">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/svgIcons/arrows_left.svg`}
                        alt="arrows_left"
                      />
                      이전 작가로
                    </div>
                  </HashLink>
                  <div className="hidden gap-2 md:flex">
                    <ShareButtons />
                  </div>
                  <HashLink to="/photographers/AshfikaRahman#">
                    <div className="flex items-center gap-2 hover:text-Neutrals-Grey3">
                      다음 작가로
                      <img
                        src={`${process.env.PUBLIC_URL}/images/svgIcons/arrows_right.svg`}
                        alt="arrows_right"
                      />
                    </div>
                  </HashLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MassimoBerruti;
