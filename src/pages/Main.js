import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="md:pt-[7.5rem] pt-[3.5rem] bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <div className="flex md:hidden">
            <img src="/images/Asset 3@3x 1.png" alt="Asset 3@3x 1" />
          </div>
          <section className="md:py-[4rem] pt-8 px-4 mx-auto md:max-w-[76rem]">
            <div className="md:flex md:justify-between">
              <div>
                <h1 className="md:text-[4rem] text-[2.5rem] md:leading-[4.5rem] leading-[3rem] font-bold mb-6">
                  MORE
                  <br /> THAN A<br className="hidden md:flex" /> PICTURE
                </h1>
                <p className="mb-[3.5rem] H5">
                  8인의 포토저널리스트가 담은
                  <br /> 국경없는의사회 구호현장의 기록
                </p>
                <div className="H6 text-Neutrals-Grey5 md:mb-[6rem] mb-[4rem]">
                  <p className="mb-2">갤러리 라메르</p>
                  <p>2022.11.02 - 11.14</p>
                </div>
                <div className="flex gap-4 mb-6 md:mb-0">
                  <img
                    src="/images/svgIcons/content_logo.svg"
                    alt="content_logo"
                  />
                  <img src="/images/svgIcons/symbol_x.svg" alt="symbol_x" />
                  <img src="/images/svgIcons/MAPS_logo.svg" alt="MAPS_logo" />
                </div>
              </div>
              <div className="hidden md:flex">
                <img
                  className="object-cover w-full"
                  src="/images/Asset 3@3x 1.png"
                  alt="Asset 3@3x 1"
                />
              </div>
            </div>
          </section>
          <section className="bg-bg-blur">
            <div className="py-[6rem] md:max-w-[76rem] mx-auto px-4">
              <div className="mb-8">
                <p className="H4">작가 소개</p>
              </div>
              <div className="hidden grid-cols-3 grid-rows-1 gap-8 md:grid ">
                <div>
                  <Link to="/photographers/GaelTurine">
                    <div className="mb-8">
                      <img
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
                <div>
                  <Link to="/photographers/AlessandroPenso">
                    <div className="mb-8">
                      <img
                        src="/images/mainPageThumbnail/alessandro_thumb.png"
                        alt="alessandro_thumb"
                      />
                    </div>
                    <p className="mb-2 text-center H5">
                      알레산드로 펜소 - 지중해
                    </p>
                    <p className="text-center text-Neutrals-Grey5 DB2">
                      Alessandro Penso - Mediterranean Sea
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/photographers/JohnVink">
                    <div className="mb-8">
                      <img
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
                <div>
                  <Link to="/photographers/DominicNahr">
                    <div className="mb-8">
                      <img
                        src="/images/mainPageThumbnail/dominic_thumb.png"
                        alt="dominic_thumb"
                      />
                    </div>
                    <p className="mb-2 text-center H5">
                      도미닉 나흐르 - 남수단
                    </p>
                    <p className="text-center text-Neutrals-Grey5 DB2">
                      Dominic Nahr - South Sudan
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/photographers/CedricGerbehaye">
                    <div className="mb-8">
                      <img
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
                <div>
                  <Link to="/photographers/HannahReyesMorales">
                    <div className="mb-8">
                      <img
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
                <div>
                  <Link to="/photographers/MassimoBerruti">
                    <div className="mb-8">
                      <img
                        src="/images/mainPageThumbnail/massimo_thumb.png"
                        alt="massimo_thumb"
                      />
                    </div>
                    <p className="mb-2 text-center H5">
                      마시모 베루티 - 파키스탄
                    </p>
                    <p className="text-center text-Neutrals-Grey5 DB2">
                      Massimo Berruti - Pakistan
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/photographers/AshfikaRahman">
                    <div className="mb-8">
                      <img
                        src="/images/mainPageThumbnail/ashfika_thumb.png"
                        alt="ashfika_thumb"
                      />
                    </div>
                    <p className="mb-2 text-center H5">
                      아슈피카 라만 - 방글라데시
                    </p>
                    <p className="text-center text-Neutrals-Grey5 DB2">
                      Ashfika Rahman - Bangladesh
                    </p>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-8 md:hidden ">
                <div>
                  <div className="h-0 pb-[75%] overflow-hidden relative z-0 mb-8">
                    <img
                      className="absolute object-cover w-full h-full"
                      src="/images/ev_th_3.png"
                      alt="ev_th_3"
                    />
                  </div>
                  <p className="mb-2 H6">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[0.875rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="px-4 bg-Neutrals-Grey8">
            <div className="py-[6rem] md:max-w-[76rem] mx-auto">
              <div className="flex justify-between mb-8">
                <p className="H4">이벤트</p>
                <div className="flex items-center gap-2">
                  <p className="H7">이벤트 페이지로 이동</p>
                  <img src="/images/svgIcons/symbol_+.svg" alt="symbol_+" />
                </div>
              </div>
              <div className="hidden grid-cols-3 grid-rows-1 gap-8 md:grid ">
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_1.png" alt="ev_th_1" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 DB2">2021-11-05</p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_2.png" alt="ev_th_2" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 DB2">2021-11-05</p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_3.png" alt="ev_th_3" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 DB2">2021-11-05</p>
                </div>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-8 md:hidden ">
                <div>
                  <div className="h-0 pb-[75%] overflow-hidden relative z-0 mb-8">
                    <img
                      className="absolute object-cover w-full h-full"
                      src="/images/ev_th_3.png"
                      alt="ev_th_3"
                    />
                  </div>
                  <p className="mb-2 H6">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[0.875rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-Brand-Primary">
            <div className="px-4 md:max-w-[76rem] flex flex-col md:flex-row gap-6 md:gap-[3.5rem] mx-auto py-8 md:py-0">
              <div className="flex items-center w-full md:min-w-[38.5rem] MH3 md:text-[1.375rem] text-center justify-center md:justify-start">
                국경없는의사회 한국에서 진행하는
                <br className="md:hidden" /> 이벤트 관련 최신 소식을 받아보세요
              </div>
              <div className="flex flex-col w-full gap-2 py-0 md:py-10 md:flex-row md:gap-0">
                <div className="w-full">
                  <input
                    className="w-full px-4 py-3 rounded md:rounded-none md:rounded-l text-Neutrals-Grey9"
                    type="text"
                    id="subscribe"
                    placeholder="이메일 주소를 입력해주세요."
                  />
                </div>
                <button className="px-10 py-3 rounded md:rounded-none md:rounded-r bg-Neutrals-Grey9 H6 whitespace-nowrap">
                  구독하기
                </button>
              </div>
            </div>
          </section>
          <section>지도 api</section>
        </div>
      </div>
    </>
  );
}
