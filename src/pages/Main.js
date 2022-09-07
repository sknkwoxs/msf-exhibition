export default function Main() {
  return (
    <>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <section className="py-[4rem] px-4 mx-auto md:max-w-[76rem]">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[4rem] leading-[4.5rem] font-bold mb-6">
                  MORE
                  <br /> THAN A<br /> PICTURE
                </h1>
                <p className="mb-[3.5rem] H5">
                  8인의 포토저널리스트가 담은
                  <br /> 국경없는의사회 구호현장의 기록
                </p>
                <div className="H6 text-Neutrals-Grey5 mb-[6rem]">
                  <p className="mb-2">갤러리 라메르</p>
                  <p>2022.11.02 - 11.14</p>
                </div>
                <div className="flex gap-4">
                  <img
                    src="/images/svgIcons/content_logo.svg"
                    alt="content_logo"
                  />
                  <img src="/images/svgIcons/symbol_x.svg" alt="symbol_x" />
                  <img src="/images/svgIcons/MAPS_logo.svg" alt="MAPS_logo" />
                </div>
              </div>
              <div>
                <img src="/images/Asset 3@3x 1.png" alt="Asset 3@3x 1" />
              </div>
            </div>
          </section>
          <section className="bg-bg-blur">
            <div className="py-[6rem] md:max-w-[76rem] mx-auto">
              <div className="mb-8">
                <p className="H4">작가 소개</p>
              </div>
              <div className="grid grid-cols-3 grid-rows-1 gap-8">
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_1.png" alt="ev_th_1" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[1rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_2.png" alt="ev_th_2" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[1rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_3.png" alt="ev_th_3" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[1rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-Neutrals-Grey8">
            <div className="py-[6rem] md:max-w-[76rem] mx-auto">
              <div className="flex justify-between mb-8">
                <p className="H4">이벤트</p>
                <div className="flex items-center gap-2">
                  <p className="H7">이벤트 페이지로 이동</p>
                  <img src="/images/svgIcons/symbol_+.svg" alt="symbol_+" />
                </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-1 gap-8">
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_1.png" alt="ev_th_1" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[1rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_2.png" alt="ev_th_2" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[1rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
                <div>
                  <div className="mb-8">
                    <img src="/images/ev_th_3.png" alt="ev_th_3" />
                  </div>
                  <p className="mb-2 H5">이벤트 내용이 나옵니다.</p>
                  <p className="text-Neutrals-Grey5 text-[1rem] leading-6 font-normal">
                    2021-11-05
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-Brand-Primary">
            <div className="px-4 md:max-w-[76rem] flex gap-[3.5rem] mx-auto">
              <div className="flex items-center w-full">
                국경없는의사회 한국에서 진행하는 이벤트 관련 최신 소식을
                받아보세요
              </div>
              <div className="flex w-full py-10">
                <div className="w-full">
                  <input
                    className="w-full px-4 py-3 rounded-l text-Neutrals-Grey9"
                    type="text"
                    id="subscribe"
                    placeholder="이메일 주소를 입력해주세요."
                  />
                </div>
                <button className="px-10 py-3 rounded-r bg-Neutrals-Grey9 H6 whitespace-nowrap">
                  구독하기
                </button>
              </div>
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </>
  );
}
