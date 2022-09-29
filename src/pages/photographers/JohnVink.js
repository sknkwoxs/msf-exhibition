import { HashLink } from "react-router-hash-link";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import ShareButtons from "../components/ShareButtons";

const JohnVink = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.3),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.4),
    4: useScrollFadeIn("up", 1, 0.5),
    5: useScrollFadeIn("up", 1, 0.6),
    6: useScrollFadeIn("up", 1, 0.3),
    7: useScrollFadeIn("up", 1, 0.3),
    8: useScrollFadeIn("up", 1, 0.3),
    9: useScrollFadeIn("up", 1, 0.3),
    10: useScrollFadeIn("right", 1, 0.3),
    11: useScrollFadeIn("up", 1, 0.3),
    12: useScrollFadeIn("up", 1, 0.3),
    13: useScrollFadeIn("up", 1, 0.3),
    14: useScrollFadeIn("left", 1, 0.3),
  };

  return (
    <>
      <div className="md:pt-[7.5rem] pt-[4rem] bg-black"></div>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="md:mb-[4rem] mb-[3rem] flex justify-center md:h-screen h-[calc(100vh-64px)]">
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}/images/JohnVink/img.png`}
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
                존 빈크 - 온두라스
              </h3>
              <h3
                className="mb-6 font-bold md:text-[2.5rem] md:leading-[3rem] MH2 font-sans"
                {...animatedItem[1]}
              >
                Gohn Vink - Honduras
              </h3>
              <p
                className="mb-4 md:DB1 md:text-[1.125rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[2]}
              >
                메사 그란데(Mesa Grande), 1988년 4월 8일
              </p>
              <p
                className="md:mb-[3.375rem] mb-[3rem] md:DB3 md:text-[0.875rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[3]}
              >
                Leica M4, 35mm, Tri-X 400
              </p>
              <p
                className="text-left max-w-[63rem] mx-auto DB1 md:mb-[6rem] mb-[5rem]"
                {...animatedItem[4]}
              >
                1980년대 온두라스에는 엘살바도르와 니카라과에서 발생한 내전으로
                수십만 명의 피난민이 몰렸다. 국경없는의사회는 당시 온두라스의
                난민캠프에서 생활하던 피난민을 대상으로 의료지원을 제공했다.
                포토저널리스트 존 빈크는 온두라스 메사 그란데 국경없는의사회
                난민캠프에서 난민이 겪는 폭력 현장을 카메라에 포착했다.
              </p>
            </div>
            <div className="flex justify-center" {...animatedItem[5]}>
              <img
                src={`${process.env.PUBLIC_URL}/images/JohnVink/VIJ2010000G1398 1.png`}
                alt="VIJ2010000G1398 1"
              />
            </div>
            <div
              className="md:my-[6rem] my-[5rem] h-0 pb-[55.921%] overflow-hidden relative z-0"
              {...animatedItem[6]}
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
              <div className="mb-10 md:mb-12" {...animatedItem[7]}>
                <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
                <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                  컨택트시트
                </p>
              </div>
              <div className="md:mb-[6rem] mb-[5rem]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/JohnVink/JOHN VINK 02-edited 1.png`}
                  alt="JOHN VINK 02-edited 1"
                />
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="mb-10 md:mb-12" {...animatedItem[8]}>
                <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
                <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                  마리나와의 이메일
                </p>
              </div>
              <div className="md:mb-[6rem] mb-[5rem] max-w-[63rem] mx-auto">
                <p className="mb-[3.5rem] DB1" {...animatedItem[9]}>
                  빈크가 온두라스에서 활동한 지 30년도 더 넘은 어느 날, 자신을
                  에벨리오의 딸 마리나라고 소개한 여성이 연락을 해왔다. 마리나는
                  인터넷 검색을 하던 중 아버지로 추정되는 사진을 발견했다고
                  말했다. 마리나의 아버지 에벨리오는 엘살바도르 북부 출신의
                  농부였으며, 20살이 되던1981년 가족과 함께 온두라스로 피난했다.
                  사진 속 에벨리오는 27살이었다. 아래는 마리나가 빈크에게 보낸
                  이메일 중 일부를 발췌한 내용이다.
                </p>
                <div className="md:hidden mb-[3.5rem]">
                  <img
                    className="mx-auto"
                    src={`${process.env.PUBLIC_URL}/images/JohnVink/JOHN VINK 07 1.png`}
                    alt="JOHN VINK 07 1"
                  />
                </div>
                <div className="flex gap-8 mb-8">
                  <div className="flex-1">
                    <p className="italic DB1" {...animatedItem[10]}>
                      안녕하세요 작가님,
                      <br />
                      <br />
                      사진을 보내주셔서 정말 감사합니다. 아버지께서 어떤 일을
                      겪으셨는지 이야기로만 전해 듣다가 직접 사진을 보니 믿기지
                      않을 정도로 벅차네요. [중략] 제 부모님께선 10년이란 세월
                      동안 난민캠프에서 생활하셨습니다. 두 분은 난민캠프에서
                      처음 만나셨고 저랑 형제들을 캠프 안에서 낳으셨어요.
                      <br />
                      <br />
                      사진 속 아버지는 끔찍한 경험을 겪었지만 다행히 잘
                      회복하셨습니다. 그로부터 얼마 지나지 않아 저희 가족에게는
                      캐나다로 이주할 기회가 생겼습니다. 저희 부모님께선 그동안
                      가족과 떨어지기 싫어서 기회가 와도 붙잡지 않았습니다. 특히
                      어머니가 할머니와 떨어지기 싫어하셨죠. 마지막 망명신청
                      인터뷰를 하기 전 어머니의 친구가 어머니를 설득했고 그렇게
                      1990년 3월, 저희 아버지와 저, 제 남매들이 캐나다로 먼저
                      이주했습니다. 어머니는 3월에 제 남동생을 낳았기 때문에 그
                      다음 달이 되어서야 캐나다로 오셨습니다. 어머니가 오고 한
                      달 후, 할머니까지 캐나다에 오셨습니다.
                      <br />
                      <br />
                      저는 항상 제가 어디 출신인지, 저희 가족이 그 동안 어떤
                      일을 겪었는지 알고 싶었습니다. 과거 난민캠프였던 메사
                      그란데는 현재 공터이기 때문에 수많은 엘살바도르 사람들의
                      “삶의 터전”이었던 흔적을 더 이상 찾아볼 수 없습니다.
                      그래서 저는 가끔 우리 가족의 사진이 한 장이라도 있을까
                      바라며 구글에 들어가 “온두라스 메사 그란데”를 검색해보곤
                      합니다. 어느 날 밤, 검색결과를 보다가 제 아버지의 사진을
                      발견했습니다. 핸드폰으로 봤기 때문에 사진이 너무 작았지만
                      들것에 실린 그 남성이 제 아버지라는 사실을 확신했습니다.
                    </p>
                  </div>
                  <div
                    className="hidden md:flex md:flex-1"
                    {...animatedItem[14]}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/JohnVink/JOHN VINK 07 1.png`}
                      alt="JOHN VINK 07 1"
                    />
                  </div>
                </div>
                <p className="italic DB1" {...animatedItem[11]}>
                  사진을 눌러보니 작가님의 사이트로 연결이 되었습니다.
                  사진설명을 보니 ‘에벨리오’라는 한 번도 들어본 적 없는 이름의
                  사람이라고 되어 있었지만 당시 내전을 겪는 동안 엘살바도르
                  사람들이 신원을 보호하기 위해 가명을 쓰곤 해서 사진 속 그
                  남자가 제 아버지임을 확신했습니다. 나중에 어머니께 여쭤보니
                  에벨리오는 아버지가 쓰던 가명이었습니다. 그렇게 작가님의 앨범
                  전체를 보고, 가족에게도 사진을 보여주었습니다. 저와 할머니,
                  어머니가 아는 얼굴들과 친척들도 있었어요. 어머니와 할머니가 옛
                  추억을 떠올릴 만한 사진을 더 볼 수 있으면 좋겠다고
                  생각했습니다. 작가님께서 보여주신 사진으로 저희 가족이 지나온
                  힘든 세월을 더욱 잘 이해할 수 있게 되었습니다.
                  <br />
                  <br />
                  감사합니다,
                  <br />
                  <br />
                  마리나
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-10 md:mb-12" {...animatedItem[12]}>
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                존 빈크 John Vink
              </p>
            </div>
            <p className="max-w-[63rem] mx-auto DB1" {...animatedItem[13]}>
              1948년 벨기에에서 태어난 존 빈크는 1968년 라 캄브르 순수미술 전문
              대학에서 사진을 전공한 후 프리랜스 저널리스트로 활동하기 시작했다.
              1986년 빈크는 파리의 사진 에이전시 뷰 소속작가로 활동하며 발표한
              보고기사 “사헬의 물{" "}
              <span className="font-sans italic text-[0.875rem]">
                Water in the Sahel
              </span>
              ”로 유진스미스상을 수상했다.
              <br />
              <br />
              빈크는 1987년부터 약 6년간 세계 각지의 난민을 담은 방대한 분량의
              작업물을 엮어 1994년 “레퓨지{" "}
              <span className="font-sans italic text-[0.875rem]">
                Réfugiés
              </span>{" "}
              · 난민 ”를 출간했다. 기록사진으로 구성된 포토매거진 “테마{" "}
              <span className="font-sans italic text-[0.875rem]">Themes</span>
              ”도 출간했다. 2000년부터 약 16년 동안 캄보디아의 정치사회적 문제를
              직접 취재했는데, 이를 다룬 책 “프놈펜에서 스무 살 되기{" "}
              <span className="font-sans italic text-[0.875rem]">
                Avoir 20 Ans à Phnom Penh
              </span>
              ”를 2000년 출간하기도 했다.
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
                  1974년 온두라스에서 첫 의료지원 활동을 개시했다. 1988년
                  엘살바도르에서 4만 명, 니카라과에서 2만 명의 난민이 온두라스에
                  도착해 온두라스 서부와 동부에 위치한 여러 난민캠프에서
                  생활했다. 국경없는의사회는 난민 지원 뿐 아니라 자연재해에
                  대응해 긴급 대응 활동을 전개했으며, 현재는 수도 테구시갈파에서
                  신체적 폭력 및 성폭력 생존자를 대상으로 종합적인 의료지원을
                  제공하고 있다.
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
                  <HashLink to="/photographers/AlessandroPenso#">
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
                  <HashLink to="/photographers/DominicNahr#">
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

export default JohnVink;
