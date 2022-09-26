import { HashLink } from "react-router-hash-link";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import ShareButtons from "../components/ShareButtons";

const HannahReyesMorales = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.1),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.4),
    4: useScrollFadeIn("up", 1, 0.5),
    5: useScrollFadeIn("up", 1, 0.3),
    6: useScrollFadeIn("up", 1, 0.1),
    7: useScrollFadeIn("up", 1, 0.5),
    8: useScrollFadeIn("up", 1, 0.3),
    9: useScrollFadeIn("up", 1, 0.2),
    10: useScrollFadeIn("left", 1, 0.3),
    11: useScrollFadeIn("right", 1, 0.3),
    12: useScrollFadeIn("up", 1, 0.5),
    13: useScrollFadeIn("up", 1, 0.5),
  };

  return (
    <>
      <div className="md:pt-[7.5rem] pt-[4rem] bg-black"></div>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="md:mb-[4rem] mb-[3rem] flex justify-center md:h-screen h-[calc(100vh-64px)]">
          <img
            className="object-cover w-full h-full"
            src="/images/HannahReyesMorales/img.png"
            alt="img"
          />
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="text-center">
            <div>
              <h3
                className="md:text-[2.5rem] md:leading-[3rem] MH2 font-extrabold"
                {...animatedItem[0]}
              >
                해나 레예스 모랄레스 - 필리핀
              </h3>
              <h3
                className="mb-6 font-bold md:text-[2.5rem] md:leading-[3rem] MH2 font-sans"
                {...animatedItem[1]}
              >
                Hannah Reyes Morales - Philippines
              </h3>
              <p
                className="mb-4 md:DB1 md:text-[1.125rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[2]}
              >
                톤도(Tondo), 2017년 7월 31일
              </p>
              <p
                className="md:mb-[3.375rem] mb-[3rem] md:DB3 text-[0.75rem]"
                {...animatedItem[3]}
              >
                Sony ILCE-7M2 28mm f3.5 1/3200sec ISO 400
              </p>
              <p
                className="text-left max-w-[63rem] mx-auto DB1"
                {...animatedItem[4]}
              >
                필리핀 마닐라의 가장 큰 슬럼가 톤도에는 30만 명이 거주하고 있다.
                ‘마약과의 전쟁’으로 인한 영향을 가장 많이 받은 지역인 톤도의
                주민들은 많은 위험에 노출된 채 생활하고 있다. 특히 수많은 여성이
                검사만으로도 예방할 수 있는 자궁경부암으로 고통받고 있다. 2017년
                모랄레스는 톤도 슬럼가에서 생활하며 이곳의 의료위기에 대해
                인식을 제고하기 위해 지역주민의 모습을 카메라에 담았다.
              </p>
            </div>
            <div
              className="md:my-[6rem] my-[5rem] h-0 pb-[55.921%] overflow-hidden relative z-0"
              {...animatedItem[5]}
            >
              <iframe
                className="absolute object-cover w-full h-full"
                src="https://www.youtube.com/embed/LeiKlmvd6KI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
                  src="/images/HannahReyesMorales/HANNAH REYES MORALES 02 1.png"
                  alt="HANNAH REYES MORALES 02 1"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-10 md:mb-12" {...animatedItem[7]}>
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                모랄레스의 일기
              </p>
            </div>
            <p
              className="max-w-[63rem] mx-auto DB1 italic"
              {...animatedItem[8]}
            >
              마닐라의 슬럼가는 지상에 존재하나 거의 지하에 파묻혀 있는
              느낌이다. 과거에는 슬럼가 주변에 높은 벽을 세워 이곳을 사람들의
              시야에서 가리려고 했다. 슬럼가는 점점 팽창해 수백만 명의 집이
              됐고, 동시에 세상에서 가장 인구밀도가 높은 곳이 되었다. 오늘날
              톤도는 필리핀 정부가 선포한 ‘마약과의 전쟁’의 배경이 되는 곳이다.
              인권 증진∙보호 단체 휴먼라이츠워치 긴급위기 국장에 따르면
              톤도에서는 도시 빈민을 겨냥한 “반인도적 범죄”가 자행되고 있다.
              <br />
              <br />
              최근 몇 년 나온 필리핀에 대한 사진들은 대부분 폭력적이고
              자극적이다. 유혈이 낭자한 모습이 아닌, 아직 세상에 알려지지 않은
              이야기를 사진에 담을 수 있을까? 높은 장벽 너머 수많은 생명을
              앗아간 마약과의 전쟁 속에서도 열심히 살아가는 사람들의 모습을
              보여주고 싶다.<p className="not-italic">- 2017년</p>
            </p>
          </section>
        </div>
        <div className="mx-auto md:max-w-[76rem] md:mb-[6rem] mb-[5rem] px-4 md:px-0">
          <div className="flex flex-col gap-8 md:flex-row">
            <div {...animatedItem[9]}>
              <img
                src="/images/HannahReyesMorales/IMG_20180221_173336 (1) 1.png"
                alt="IMG_20180221_173336 (1) 1"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div {...animatedItem[10]}>
                <img
                  className="mx-auto"
                  src="/images/HannahReyesMorales/11-HRMorales for MSF 1.png"
                  alt="11-HRMorales for MSF 1"
                />
              </div>
              <div {...animatedItem[11]}>
                <img
                  className="mx-auto"
                  src="/images/HannahReyesMorales/HRMorales00029 1.png"
                  alt="HRMorales00029 1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-10 md:mb-12">
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p
                className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]"
                {...animatedItem[12]}
              >
                해나 레예스 모랄레스 Hannah Reyes Morales
              </p>
            </div>
            <p className="max-w-[63rem] mx-auto DB1" {...animatedItem[13]}>
              해나 레예스 모랄레스는 필리핀 마닐라에서 태어나 자랐다. 필리핀
              딜리만 대학교에서 스피치 커뮤니케이션을 전공했다. 모랄레스는
              불평등, 빈곤과 범죄에 노출된 이들을 조명하는 사진을 찍어왔다.
              필리핀 해역의 인신매매(뉴욕 타임스), 캄보디아 여성이 겪은
              전쟁범죄(미국 알자지라), 태풍 이후 성폭력과 인신매매에 더욱 노출된
              필리핀 여성의 삶을 렌즈에 담았다.
              <br />
              <br />
              모랄레스는 뉴욕 타임스에 연재된 디지털 르포르타주로
              아시아출판인협회상을 수상했으며, 2019년에는 팀 헤더링턴 상을,
              2020년에는 뉴욕 국제사진센터가 주관하는 ICP 인피니티 상{" "}
              <span className="font-sans italic text-[0.875rem]">
                ICP Infinity Awards{" "}
              </span>
              을 수상했다. 모랄레스의 보도사진은 워싱턴 포스트, 월스트리트 저널,
              타임, 내셔널 지오그래픽 등 다수의 매체에 실렸으며 마닐라,
              코펜하겐, 치앙마이 등에서 전시됐다. 현재는 내셔널 지오그래픽
              크리에이티브 소속 작가로 활동하고 있다.
            </p>
          </section>
          <section className="max-w-[63rem] mx-auto md:pb-[8rem] pb-[6rem]">
            <div>
              <div className="md:px-8 md:pt-8 md:pb-10 p-6 border md:mb-[5rem] mb-[4rem] border-Neutrals-Grey7 rounded-lg">
                <img
                  className="mb-4"
                  src="/images/svgIcons/introduction_footer_logo.svg"
                  alt="introduction_footer_logo"
                />
                <p className="mb-4 md:H4 MH3">국경없는의사회는</p>
                <p className="DB1">
                  1987년 필리핀에서 처음 활동을 시작했고, 2016년부터 수도
                  마닐라에 위치한 슬럼가 산 안드레스와 톤도에서 종합적인 성∙생식
                  보건 프로젝트를 운영했다. 2019년에는 여아 및 여성을 위한
                  프로젝트를 운영하며 가족 계획, 산전후 관리, 성매개 감염 및
                  자궁경부암 치료를 제공했다.
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
                  <HashLink to="/photographers/CedricGerbehaye#">
                    <div className="flex items-center gap-2 hover:text-Neutrals-Grey3">
                      <img
                        src="/images/svgIcons/arrows_left.svg"
                        alt="arrows_left"
                      />
                      이전 작가로
                    </div>
                  </HashLink>
                  <div className="hidden gap-2 md:flex">
                    <ShareButtons />
                  </div>
                  <HashLink to="/photographers/MassimoBerruti#">
                    <div className="flex items-center gap-2 hover:text-Neutrals-Grey3">
                      다음 작가로
                      <img
                        src="/images/svgIcons/arrows_right.svg"
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

export default HannahReyesMorales;
