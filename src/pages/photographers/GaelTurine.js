import { Link } from "react-router-dom";
import ShareButtons from "../components/ShareButtons";

export default function GaelTurine() {
  return (
    <>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="md:mb-[4rem] mb-[3rem] flex justify-center max-h-[60rem] md:h-full">
          <img
            className="object-cover w-full"
            src="/images/GaelTurine/bg.png"
            alt="bg"
          />
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="text-center">
            <div>
              <h3 className="md:text-[2.5rem] md:leading-[3rem] MH2 font-extrabold">
                가엘 튀린 - 앙골라
              </h3>
              <h3 className="mb-6 font-bold md:text-[2.5rem] md:leading-[3rem] MH2 font-sans">
                Gaël Turine - Angola
              </h3>
              <p className="mb-4 md:DB1 md:text-[1.125rem] text-[1rem] font-nanummyeongjo">
                쿠이토(Kuito), 1996년 3월 2일
              </p>
              <p className="md:mb-[3.375rem] mb-[3rem] md:DB3 md:text-[0.875rem] text-[1rem] font-nanummyeongjo">
                Mamiya 6, Tri-X 400
              </p>
              <p className="text-left max-w-[63rem] mx-auto DB1">
                앙골라 내전 1975~2002 이 장기화하며 극심한 영양실조로 고통받는
                아동 환자가 급증했다. 심각한 영양실조 위기가 길어지자 폐렴,
                설사, 말라리라, 홍역 등으로 아동 사망률이 잇따라 증가했다.
                1996년, 포토저널리스트 튀린은 앙골라에서 6주를 보내며 무장단체간
                충돌이 끊이지 않는 비에주 쿠이토의 국경없는의사회 병원을 찾아
                현장을 기록했다.
              </p>
            </div>
            <div className="md:my-[6rem] my-[5rem] h-0 pb-[55.921%] overflow-hidden relative z-0">
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
                <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                  컨택트시트
                </p>
              </div>
              <div className="md:mb-[6rem] mb-[5rem]">
                <img
                  src="/images/GaelTurine/GAEL TURINE 02 1.png"
                  alt="GAEL TURINE 02 1"
                />
              </div>
              <p className="mb-4 max-w-[63rem] mx-auto DB1 italic">
                “쿠이토에 머물던 중 국경없는의사회와 연락이 닿아 함께 작업할 수
                있었습니다. 국경없는의사회 직원들의 도움으로 현장 상황을 더욱
                명확히 파악할 수 있었습니다. 위중한 상태로 병원에 실려온
                부상자들을 봤고, 견디기 힘든 광경을 마주하기도 했습니다. 다행히
                크게 무겁지 않은 분위기 속에서 환자와 의료진의 모습을 있는
                그대로 담을 수 있었습니다.”
              </p>
              <p className="max-w-[63rem] mx-auto DB1 font-bold">
                가엘 튀린(2021)
              </p>
              <div className="md:flex-row flex flex-col gap-8 md:my-[6rem] my-[5rem]">
                <div>
                  <img
                    className="w-full"
                    src="/images/GaelTurine/GAEL TURINE 04 1.png"
                    alt="GAEL TURINE 04 1"
                  />
                </div>
                <div>
                  <img
                    src="/images/GaelTurine/GAEL TURINE 05 1.png"
                    alt="GAEL TURINE 05 1"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="md:mb-[6rem] mb-[5rem] flex justify-center max-h-[100rem]">
          <img
            className="object-cover w-full"
            src="/images/GaelTurine/GAEL TURINE 06 1.png"
            alt="GAEL TURINE 06 1"
          />
        </div>
        <div className="bg-Neutrals-Grey9 text-Neutrals-White px-4 mx-auto md:max-w-[76rem]">
          <section className="md:mb-[4rem] mb-[3rem]">
            <div className="mb-8 md:mb-12">
              <div className="md:mb-8 mb-6 border-b border-Neutrals-Grey6 md:w-[6.5rem] w-[5rem] mx-auto" />
              <p className="text-center MH3 md:text-[2rem] md:leading-[2.5rem]">
                가엘 튀린 Gaël Turine
              </p>
            </div>
            <p className="max-w-[63rem] mx-auto DB1">
              가엘 튀린은 포켓사진집 포토 포슈
              <span className="font-sans italic text-[0.875rem]">
                {" "}
                Photo Poche{" "}
              </span>{" "}
              시리즈의 ‘장벽과 공포
              <span className="font-sans italic text-[0.875rem]">
                {" "}
                Le mur et la peur{" "}
              </span>
              ’, ‘맹목적으로
              <span className="font-sans italic text-[0.875rem]">
                {" "}
                Aveuglément{" "}
              </span>
              ’ ‘카불에서 스무살 되기
              <span className="font-sans italic text-[0.875rem]">
                {" "}
                Avoir 20 ans à Kaboul{" "}
              </span>
              ’ ‘아이티의 시내
              <span className="font-sans italic text-[0.875rem]">
                {" "}
                En bas la ville{" "}
              </span>
              ’ 등 다수의 모노그래프를 발간한 사진작가이다. 튀린은 유럽과
              미국에서 유수의 상과 후원을 받았으며, 그의 에세이는 뉴욕 타임스,
              르몽드, 뉴스위크 재팬 등 여러 매체에 게재됐다.
              <br />
              <br /> 현재 벨기에 소재 리브르 드 브뤼셀 대학교에서 포토저널리즘을
              가르치고 있으며, 다양한 국가에서 기록사진 워크숍을 이끌고 있다.
              튀린은 사진 에이전시 맵스(MAPS)의 창립멤버로, 2017년 창설 이래
              지금까지 회장직을 맡고 있다.
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
                  1983년 앙골라에서 첫 활동을 개시했다. 1996년 국경없는의사회는
                  벤구엘라, 후암보, 쿠안도 쿠반고주 등 앙골라 전역에서 영양실조
                  프로그램을 운영하며 영양실조 아동에게 의료지원을 제공했다.
                </p>
              </div>
              <div>
                <button className="flex mx-auto mb-4 font-bold md:mb-6 DB3">
                  내 채널에 공유하기
                </button>
                <div className="flex justify-center gap-2 mb-10 md:hidden">
                  <ShareButtons />
                </div>
                <div className="items-center md:grid md:grid-cols-3">
                  <Link to="/photographers/AshfikaRahman">
                    {/* <div className="flex items-center gap-2 H7 ">
                      <img
                        src="/images/svgIcons/arrows_left.svg"
                        alt="arrows_left"
                      />
                      이전 작가로
                    </div> */}
                  </Link>
                  <div className="hidden gap-2 md:flex justify-self-center">
                    <ShareButtons />
                  </div>
                  <Link to="/photographers/AlessandroPenso">
                    <div className="flex items-center justify-end w-full gap-2 H7">
                      다음 작가로
                      <img
                        src="/images/svgIcons/arrows_right.svg"
                        alt="arrows_right"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
