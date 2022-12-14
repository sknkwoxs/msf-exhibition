import { HashLink } from "react-router-hash-link";
import YouTube from "react-youtube";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import ShareButtons from "../components/ShareButtons";

const AshfikaRahman = () => {
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
    11: useScrollFadeIn("left", 1, 0.4),
    12: useScrollFadeIn("right", 1, 0.4),
    13: useScrollFadeIn("up", 1, 0.4),
    14: useScrollFadeIn("up", 1, 0.4),
  };
  return (
    <>
      <div className="md:pt-[7.5rem] pt-[4rem] bg-black"></div>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="md:mb-[4rem] mb-[3rem] flex justify-center md:h-screen h-[calc(100vh-64px)]">
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/8 1.png`}
            alt="8 1"
          />
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="text-center">
            <div>
              <h3
                className="md:text-[2.5rem] md:leading-[3rem] MH2 font-extrabold mb-1 md:mb-2"
                {...animatedItem[0]}
              >
                아슈피카 라만 - 방글라데시
              </h3>
              <h3
                className="md:mb-8 mb-5 font-normal md:text-[1.5rem] md:leading-[2rem] text-[1.125rem] leading-[1.5rem] font-sans italic"
                {...animatedItem[1]}
              >
                Ashfika Rahman - Bangladesh
              </h3>
              <p
                className="mb-4 md:DB1 md:text-[1.125rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[2]}
              >
                다카(Dhaka), 2021년 1월 28일
              </p>
              <p
                className="md:mb-[3.375rem] mb-[3rem] md:DB3 md:text-[0.875rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[3]}
              >
                Nikon D810 35mm f 2.8 1/60s ISO 640
              </p>
              <p
                className="text-left max-w-[63rem] mx-auto DB1"
                {...animatedItem[4]}
              >
                방글라데시 다카 캄란기르차르에 사는 많은 여아는 어린 나이에
                강제로 결혼해 출산을 경험하지만 보건당국은 이들의 고통을
                외면하고 있다. 이 소녀들은 전통적인 성역할로 인해 자신의 신체와
                관련된 성·생식 문제에 대해 스스로 결정하지 못하며 병원을 찾을
                경제적 수단 역시 없어 심리적·의료적 지원이 절실하다.
                포토저널리스트 아슈피카 라만은 2021년 1월 캄란기르차르에 위치한
                국경없는의사회 진료소를 찾아 17세 임산부 루키아를 비롯한
                소녀들의 모습을 카메라에 담았다.
              </p>
            </div>
            <div
              className="md:my-[6rem] my-[5rem] h-0 pb-[55.921%] overflow-hidden relative z-0"
              {...animatedItem[5]}
            >
              <YouTube
                className="absolute object-cover w-full h-full"
                videoId="QEvqK27gQaM"
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
                dataUrl="https://youtu.be/QEvqK27gQaM"
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
                  src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/ASHIFIKA RAHMAN02 1.png`}
                  alt="ASHIFIKA RAHMAN02 1"
                />
              </div>
              <div className="md:hidden mb-[5rem]">
                <img
                  className="mx-auto"
                  src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/84.png`}
                  alt="84"
                />
              </div>
              <div className="flex max-w-[63rem] mx-auto gap-8 md:mb-[6rem] mb-[5rem]">
                <p className="flex-1 my-auto italic DB1" {...animatedItem[7]}>
                  “제 이름은 아노와라 베굼입니다. 저는 14살에 결혼해 15살에 첫
                  아이를 임신했습니다. 더 빨리 임신하게 도와준다는 부적을 받기도
                  했어요. 제 어머니는 12살에 첫 아이를 낳았으니 저는 이른 편이
                  아니었죠. 지금 저는 아들 셋과 딸 하나가 있는데, 딸은 이미
                  결혼했습니다.”
                </p>
                <div className="hidden md:block" {...animatedItem[8]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/84.png`}
                    alt="84"
                  />
                </div>
              </div>
              <div className="md:hidden mb-[5rem]">
                <img
                  className="mx-auto"
                  src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/85.png`}
                  alt="85"
                />
              </div>
              <div className="flex max-w-[63rem] mx-auto gap-8 md:mb-[6rem] mb-[5rem]">
                <div className="hidden md:block" {...animatedItem[9]}>
                  <img
                    className="mx-auto"
                    src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/85.png`}
                    alt="85"
                  />
                </div>
                <p className="flex-1 my-auto italic DB1" {...animatedItem[10]}>
                  사랑하는 사비나,
                  <br />
                  <br />
                  잘 지내고 있으면 좋겠구나. 네 형부는 새 직장을 얻어서 쿨나로
                  가게 됐어. 네 오빠는 집을 새로 마련하려고 살마한테 돈을 좀
                  빌리려고 한단다. 다행히 살마가 친정아빠한테 돈을 받아서 줄 수
                  있다고 해. 고모도 얼마전에 수술을 잘 마쳤어. 네가 임신했다는
                  소식에 아빠가 매우 좋아하셨단다. 27일에 오빠가 널 집으로
                  데려온다고 하니 여기서 며칠 쉬다 가렴. 그동안 남편 잘 챙기고,
                  밥도 잘 챙겨 먹거라.
                  <br />
                  <br />
                  알라신의 축복이 있길,
                  <br />
                  엄마가
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="md:mb-[6rem] mb-[5rem] flex md:flex-row flex-col justify-center gap-8 px-4">
          <div {...animatedItem[11]}>
            <img
              className="mx-auto"
              src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/EXTRA_03_MSF 1.png`}
              alt="EXTRA_03_MSF 1"
            />
          </div>
          <div {...animatedItem[12]}>
            <img
              className="mx-auto"
              src={`${process.env.PUBLIC_URL}/images/AshfikaRahman/EXTRA_04_MSF 1.png`}
              alt="EXTRA_04_MSF 1"
            />
          </div>
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-10 md:mb-12" {...animatedItem[13]}>
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                아슈피카 라만 Ashfika Rahman
              </p>
            </div>
            <p className="max-w-[63rem] mx-auto DB1" {...animatedItem[14]}>
              방글라데시 다카 출신의 아슈피카 라만은 방글라데시 파트샬라
              남아시아 언론학교에서 기록사진을 전공했다. 그의 작업은 예술과
              기록사진의 영역을 넘나드는데, 특히 19세기 판화로부터 영감을 얻어
              현대 미디어와 결합시킨 독특한 스타일이 돋보인다. 사진이란 매개를
              통해 사회에 내재된 권력구조와 병폐를 드러낸다.
              <br />
              <br />
              라만은 2016년 시작한 장기 프로젝트를 통해 인도와 미얀마 사이
              방글라데시 외곽 언덕지대의 성폭력 생존자의 현실을 보도해
              주목받았다. 현재는 방글라데시 북부 군경의 초법적 살인과 납치 등을
              심도 있게 탐구한 ‘실종자 파일’ 프로젝트를 진행 중이다. 2018년
              세계보도사진재단의 교육기관 줍 스와트{" "}
              <span className="font-sans italic text-[0.875rem]">
                Joop Swart
              </span>{" "}
              마스터클래스에 참여했으며, 현재 모교인 방글라데시 남아시아
              언론학교의 교수로 근무하고 있다.
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
                  1985년 방글라데시에서 첫 의료지원 활동을 시작했다. 현재
                  국경없는의사회는 로힝야 난민과 방글라데시 지역주민을 대상으로
                  의료적∙인도적 지원을 제공하고 있으며, 다카 캄란기르차르 지역의
                  의료 공백에 대응하는 데에도 전력을 다하고 있다.
                  <br />
                  <br />
                  국경없는의사회는 다카에서 여성청소년을 위한 생식 보건 서비스를
                  제공하고 임신 상담 및 출산을 지원하고 있다. 또한 성폭력 및
                  가정폭력 피해자에게 의료 및 심리적 지원을 제공한다.
                </p>
              </div>
              <div>
                <p className="flex justify-center mx-auto mb-4 font-bold md:mb-6 DB3">
                  내 채널에 공유하기
                </p>
                <div className="flex justify-center gap-2 mb-10 md:hidden">
                  <ShareButtons />
                </div>
                <div className="grid items-center grid-cols-3">
                  <HashLink to="/photographers/MassimoBerruti#">
                    <div className="flex items-center gap-2 hover:text-Neutrals-Grey3">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/svgIcons/arrows_left.svg`}
                        alt="arrows_left"
                      />
                      이전 작가로
                    </div>
                  </HashLink>
                  <div className="hidden gap-2 md:flex justify-self-center">
                    <ShareButtons />
                  </div>
                  {/* <HashLink to="/photographers/GaelTurine">
                    <div className="flex items-center gap-2">
                      다음 작가로
                      <img
                        src={`${process.env.PUBLIC_URL}/images/svgIcons/arrows_right.svg`}
                        alt="arrows_right"
                      />
                    </div>
                  </HashLink> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AshfikaRahman;
