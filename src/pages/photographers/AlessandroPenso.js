import { HashLink } from "react-router-hash-link";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import ShareButtons from "../components/ShareButtons";

const AlessandroPenso = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.3),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.4),
    4: useScrollFadeIn("up", 1, 0.5),
    5: useScrollFadeIn("up", 1, 0.3),
    6: useScrollFadeIn("up", 1, 0.3),
    7: useScrollFadeIn("up", 1, 0.3),
    8: useScrollFadeIn("up", 1, 0.5),
    9: useScrollFadeIn("up", 1, 0.5),
    10: useScrollFadeIn("left", 1, 0.3),
    11: useScrollFadeIn("right", 1, 0.3),
    12: useScrollFadeIn("up", 1, 0.3),
    13: useScrollFadeIn("up", 1, 0.5),
  };

  return (
    <>
      <div className="md:pt-[7.5rem] pt-[4rem] bg-black"></div>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="md:mb-[4rem] mb-[3rem] flex justify-center md:h-screen h-[calc(100vh-64px)]">
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}/images/AlessandroPenso/img.png`}
            alt="img"
          />
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="text-center">
            <div>
              <h3
                className="md:text-[2.5rem] md:leading-[3rem] MH2 font-extrabold mb-1 md:mb-2"
                {...animatedItem[0]}
              >
                알레산드로 펜소 - 지중해
              </h3>
              <h3
                className="md:mb-8 mb-5 font-bold md:text-[1.5rem] md:leading-[2rem] text-[1.125rem] leading-[1.5rem] font-sans italic"
                {...animatedItem[1]}
              >
                Alessandro Penso - Mediterranean Sea
              </h3>
              <p
                className="mb-4 md:DB1 md:text-[1.125rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[2]}
              >
                지중해(Mediterranean Sea), 2015년 11월 13일
              </p>
              <p
                className="md:mb-[3.375rem] mb-[3rem] md:DB3 md:text-[0.875rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[3]}
              >
                Canon 5D Mark III, 35mm, f9-1/125s ISO 640
              </p>
              <p
                className="text-left max-w-[63rem] mx-auto DB1"
                {...animatedItem[4]}
              >
                2014년부터 최소 3만 명의 난민이 지중해를 건너다 목숨을 잃었다.
                유럽연합은 국경 수비에만 집중한 채 해상난민을 방치하고 있다.
                현재 해상난민 수색구조 작업은 대부분 국경없는의사회를 비롯한
                민간 구호 단체에 의해 이뤄지고 있다.
                <br />
                <br /> 2015년 5월, 국경없는의사회의 첫 수색구조선 부르봉
                아르고스{" "}
                <span className="font-sans italic text-[0.875rem]">
                  Bourbon Argos
                </span>{" "}
                호가 첫 구조 활동을 시작했다. 총 400명의 해상난민을 수용할 수
                있는 부르봉 아르고스 호에는 수색구조팀을 비롯해 의료진, 식수위생
                전문가 등 총 29명이 승선해 활동했다. 포토저널리스트 알레산드로
                펜소는 2015년 11월 부르봉 아르고스호에 올라 해상난민 구조 작업
                중 마주한 긴박한 순간들을 기록했다.
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
              <div className="mb-10 md:mb-12">
                <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
                <p
                  className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]"
                  {...animatedItem[6]}
                >
                  컨택트시트
                </p>
              </div>
              <div className="md:mb-[6rem] mb-[5rem]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/AlessandroPenso/ALESSANDRO_PENSO 02 1.png`}
                  alt="ALESSANDRO_PENSO 02 1"
                />
              </div>
              <div className="mb-10 md:mb-12" {...animatedItem[7]}>
                <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
                <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                  유러피안 드림
                </p>
              </div>
              <p
                className="mb-4 max-w-[63rem] mx-auto DB1 italic"
                {...animatedItem[8]}
              >
                <span className="not-italic">
                  알렉산드로 펜소는 유럽난민 위기를 알리기 위해 전시 《유러피안
                  드림{" "}
                  <span className="font-sans italic text-[0.875rem]">
                    The European Dream
                  </span>
                  》을 열었다. 난민의 주요 이동수단인 트럭을 개조해 개최한 이
                  전시는 유럽에서의 안전한 삶을 꿈꾸는 난민의 험난한 여정을
                  보여주었다.
                </span>
                <br />
                <br />
                “전시의 목표는 취약 인구의 유럽 이주를 둘러싼 구획화와
                제노포비아 문제를 수면 위로 끌어올리는 것이었습니다. 이 문제는
                오래전부터 존재해왔지만, 이주민이 첫 발을 디딘 나라에서만
                망명이나 난민 신청을 해야 한다는 내용의 더블린 조약 등의
                부조리한 유럽연합 정책에 의해 외면당하고 있습니다.
                <br />
                <br />
                저는 사회의 관심에서 멀어진 문제를 카메라에 담기 시작했습니다.
                이탈리아, 프랑스, 스페인 자치도시 멜리야, 몰타와 불가리아에서
                기약없이 구금된 이들, 열악한 환경의 임시 캠프, 착취당하는 이주민
                노동자, 수비가 한층 강화된 국경지대, 제대로 된 생활시설조차 없는
                오래된 건물에 방치된 사람들을 주로 찍었습니다.”
              </p>
              <p
                className="max-w-[63rem] mx-auto DB1 font-bold"
                {...animatedItem[9]}
              >
                알레산드로 펜소(2014)
              </p>
              <div className="flex flex-col gap-8 md:my-[6rem] my-[5rem]">
                <div {...animatedItem[10]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/AlessandroPenso/MSF160552_Medium 1.png`}
                    alt="MSF160552_Medium 1"
                  />
                </div>
                <div {...animatedItem[11]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/AlessandroPenso/MSF160580_Medium 1.png`}
                    alt="MSF160580_Medium 1"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-12" {...animatedItem[12]}>
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                알레산드로 펜소 Alessandro Penso
              </p>
            </div>
            <p className="max-w-[63rem] mx-auto DB1" {...animatedItem[13]}>
              알레산드로 펜소는 이탈리아에서 태어나 로마 라 사피엔자 대학교에서
              임상심리학을 전공했다. 로마 사진영화 학교에 장학생으로 진학해
              포토저널리즘을 배웠다.
              <br />
              <br />
              사회 문제에 관심이 많은 그는 최근 몇 년 지중해 난민 문제에 주목해
              몰타의 구금센터, 이탈리아 남부의 이주민 농업 종사자, 그리스에 발이
              묶인 이주민의 현실을 카메라에 담았다. 그리스에서 그가 찍은 사진은
              《유러피안 드림{" "}
              <span className="font-sans italic text-[0.875rem]">
                The European Dream
              </span>
              》 전시를 통해 이탈리아, 프랑스, 스위스와 벨기에에서 주목받았다.
              <br />
              <br />
              펜소는 인터내셔널 헤럴드 트리뷴, 타임, 워싱턴 포스트, 비즈니스
              위크, 가디언, BBC 등 여러 굴지의 매체와 협업했다. 세계보도사진
              <span className="font-sans italic text-[0.875rem]">
                {" "}
                World Press Photo
              </span>{" "}
              상을 포함해 다수의 수상 경력이 있으며, 매그넘 재단, 게티 이미지
              등으로부터 지원을 받았다.
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
                <p className="mb-4 md:H4 MH3">국경없는의사회의 지중해 활동</p>
                <p className="DB1">
                  국경없는의사회는 2015년부터 지중해에서 난민 수색구조 활동을
                  전개했고, 지금까지 구조한 난민의 수는 8만여명에 이른다.
                  의료진, 로지스티션 등 다양한 전문가로 이뤄진 팀은 조난당한
                  해상난민을 구조하고 선상에서 응급처치를 제공한다.
                  국경없는의사회의 수색구조 활동은 이탈리아 해안경비대 및 로마
                  해상구조 조정 센터가 관장하는 국제 해역에서 이루어지며
                  국제해양법과 인도적 지원의 원칙에 따라 이루어진다.
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
                  <HashLink to="/photographers/GaelTurine#">
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
                  <HashLink to="/photographers/JohnVink#">
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

export default AlessandroPenso;
