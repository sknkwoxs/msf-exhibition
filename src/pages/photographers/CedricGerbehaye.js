import { HashLink } from "react-router-hash-link";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import ShareButtons from "../components/ShareButtons";

const CedricGerbehaye = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.2),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.2),
    3: useScrollFadeIn("up", 1, 0.2),
    4: useScrollFadeIn("up", 1, 0.2),
    5: useScrollFadeIn("up", 1, 0.2),
    6: useScrollFadeIn("up", 1, 0.2),
    7: useScrollFadeIn("up", 1, 0.2),
    8: useScrollFadeIn("up", 1, 0.2),
    9: useScrollFadeIn("up", 1, 0.2),
    10: useScrollFadeIn("left", 1, 0.2),
    11: useScrollFadeIn("right", 1, 0.2),
    12: useScrollFadeIn("up", 1, 0.2),
    13: useScrollFadeIn("up", 1, 0.2),
    14: useScrollFadeIn("up", 1, 0.2),
  };

  return (
    <>
      <div className="md:pt-[7.5rem] pt-[4rem] bg-black"></div>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="md:mb-[4rem] mb-[3rem] flex justify-center md:h-screen h-[calc(100vh-64px)]">
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}/images/CedricGerbehaye/img.png`}
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
                세드릭 게르베하이 - 콩고민주공화국
              </h3>
              <h3
                className="md:mb-8 mb-5 font-normal md:text-[1.5rem] md:leading-[2rem] text-[1.125rem] leading-[1.5rem] font-sans italic"
                {...animatedItem[1]}
              >
                Cédric Gerbehaye - Democratic Republic of the Congo
              </h3>
              <p
                className="mb-4 md:DB1 md:text-[1.125rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[2]}
              >
                마시시(Masisi), 2008년 8월 8일
              </p>
              <p
                className="md:mb-[3.375rem] mb-[3rem] md:DB3 md:text-[0.875rem] text-[1rem] font-nanummyeongjo"
                {...animatedItem[3]}
              >
                Mamiya 6, Tri-X 400
              </p>
              <p
                className="text-left max-w-[63rem] mx-auto DB1"
                {...animatedItem[4]}
              >
                2008년 8월, 콩고민주공화국 동부 북키부 주에서 심각한 폭력사태가
                발발했다. 무장단체 간 분쟁이 격화하면서 수백만 명이 피난하고,
                남은 주민들은 공포에 떨며 하루하루를 보내야 했다. 식량과 식수,
                의료서비스가 부족했고, 그나마 남아있던 의료시설은 약탈당했다.
                난민캠프에는 피난민이 몰려들었고, 다른 지역에 사는 친척의 집이나
                숲으로 피신한 사람도 있었다. 세드릭 게르베하이는
                국경없는의사회가 무력분쟁에 대응해 구호활동을 진행한 마시시
                지역에서 피난민들의 모습을 카메라로 포착했다.
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
              <div className="md:mb-[6rem] mb-[5rem]" {...animatedItem[7]}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/CedricGerbehaye/CEDRIC GERBEHAYE 02 - edited 1.png`}
                  alt="CEDRIC GERBEHAYE 02 - edited 1"
                />
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="mb-10 md:mb-12" {...animatedItem[8]}>
                <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
                <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                  게르베하이과 국경없는의사회의 첫 만남
                </p>
              </div>
              <p
                className="max-w-[63rem] mx-auto DB1 md:mb-[6rem] mb-[5rem] italic"
                {...animatedItem[9]}
              >
                “마시시 지역의 한 병원에서 국경없는의사회와 처음 연이 닿았어요.
                저녁 시간이 다 되었을 때쯤 길에서 공격당한 부상자들이 트럭에
                실려 병원에 왔어요. 전기는 들어오지 않았고 발전기도 고장 난
                상황이었습니다. 해가 져서 어두웠기 때문에 마취과 의사 바트가
                수술하는 동안 저에게 헤드램프를 비춰 달라고 했습니다. 환자는
                여러 군데 총상을 입은 8개월 임신부였습니다. 저는 환자가
                수술대에서 떨어지지 않게 꼭 붙잡고, 진정시키기 위해 눈을
                마주쳐가며 계속 말을 걸었습니다. 그동안 바트가 총알을 제거했죠.
                다음날 새벽 환자는 병상에 누운 채 미소를 지어 보였습니다. 밤
                사이 아들을 출산한 것입니다.“
              </p>
              <div className="md:mb-[6rem] mb-[5rem]" {...animatedItem[10]}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/CedricGerbehaye/31 1.png`}
                  alt="31 1"
                />
              </div>
              <div className="md:mb-[6rem] mb-[5rem]" {...animatedItem[11]}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/CedricGerbehaye/35 1.png`}
                  alt="35 1"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-10 md:mb-12" {...animatedItem[12]}>
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                세드릭 게르베하이 Cédric Gerbehaye
              </p>
            </div>
            <p className="max-w-[63rem] mx-auto DB1" {...animatedItem[13]}>
              세드릭 게르베하이는 벨기에에서 태생으로 저널리즘을 전공했고,
              인도네시아 여행 당시 사진을 처음 접한 후 콩고민주공화국에서
              사진작가로 활동했다. 그의 사진과 에세이를 담은 책 ‘잊혀진
              콩고(2010)’는 미국 해외언론클럽에서 수여하는 올리비에 레보트
              <span className="font-sans italic text-[0.875rem]">
                {" "}
                Olivier Rebbot
              </span>{" "}
              상, 앰네스티 인터내셔널 국제 보도상, 세계보도사진상 등을 받았다.
              <br />
              <br />
              게르베하이는 2011년 남수단에서 활동하며 신생독립국의 탄생과정을
              기록하고 이를 바탕으로 ‘랜드 오브 쿠시{" "}
              <span className="font-sans italic text-[0.875rem]">
                Land of Cush
              </span>
              , 2013’를 출간했다. 게르베하이의 작품은 여러 전시회의 초청작으로
              선정됐으며, 매그넘 재단, 퓰리처위기보도센터, 저널리즘 펀드 등의
              후원을 받았다. 게르베하이의 사진은 휴스턴 미술관, 벨기에 샤를루아
              미술관, 파리의 유럽사진미술관, 앤트워프 사진박물관 FOMU 에서
              소장하고 있다.
            </p>
          </section>
          <section className="max-w-[63rem] mx-auto">
            <div>
              <div className="md:px-8 md:pt-8 md:pb-10 p-6 border md:mb-[5rem] mb-[4rem] border-Neutrals-Grey7 rounded-lg">
                <img
                  className="mb-4"
                  src={`${process.env.PUBLIC_URL}/images/svgIcons/introduction_footer_logo.svg`}
                  alt="introduction_footer_logo"
                />
                <p className="mb-4 md:H4 MH3">국경없는의사회는</p>
                <p className="DB1">
                  1977년 콩고민주공화국에서 첫 활동을 시작했다. 특히 동부
                  지역에서는 전쟁부상자를 치료하고 국내실향민과 지역주민을
                  대상으로 깨끗한 식수와 생필품을 제공했다. 현재
                  국경없는의사회는 성폭력 생존자에게 의료적∙심리적 지원을
                  제공하고 있으며, 결핵, 홍역, 콜레라, 에볼라 환자를 치료하고
                  있다.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="md:mb-[6rem] mb-[4rem] flex justify-center w-full min-h-[20rem]">
          <img
            className="object-cover w-full"
            src={`${process.env.PUBLIC_URL}/images/CedricGerbehaye/30 1.png`}
            alt="30 1"
          />
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="max-w-[63rem] mx-auto md:pb-[8rem] pb-[6rem]">
            <div>
              <div>
                <p className="flex justify-center mx-auto mb-4 font-bold md:mb-6 DB3">
                  내 채널에 공유하기
                </p>
                <div className="flex justify-center gap-2 mb-10 md:hidden">
                  <ShareButtons />
                </div>
                <div className="flex items-center justify-between">
                  <HashLink to="/photographers/DominicNahr#">
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
                  <HashLink to="/photographers/HannahReyesMorales#">
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

export default CedricGerbehaye;
