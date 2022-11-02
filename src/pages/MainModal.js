import { useEffect } from "react";

export default function MainModal({ closeModal, closeModalUntilExpires }) {
  // 외부 화면 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"
        onClick={closeModal}
      ></div>
      <section className="h-[448px] lg:h-[400px] fixed md:top-[29%] top-[20%] bottom-0 left-0 right-0 md:py-8 py-4 md:px-4 px-3 bg-Neutrals-White rounded-lg z-[1000] drop-shadow font-PT mx-[10%] lg:max-w-[600px] lg:mx-auto">
        {/* <div className="w-full mb-8 rounded-t-lg bg-Neutrals-Grey9">
          <img
            className="py-[1.75rem]"
            src={`${process.env.PUBLIC_URL}/images/svgIcons/logo.svg`}
            alt="logo"
          />
        </div> */}
        <p className="px-4 text-[#F93232] font-PTSemiBold md:mb-4 mb-2">
          알립니다!
        </p>
        <p className="px-4 mb-4 H6 text-Neutrals-Grey6 MH5 md:text-[1.125rem] leading-[23px]">
          11.05(토), 11.12(토) 오전 중에는 내부 이벤트가 있는 관계로 해당
          일자에는 <span className=" font-PTBold">오후 2시-6시</span> 사이에만
          전시현장 관람이 가능하신 점 참고 부탁드립니다.
          <br />
          <br />
          <div className="border-t" />
          <br />
          11.05(토) 스페셜토크 현장 참석 신청은 마감되었습니다.
          <br className="hidden md:flex" />
          스페셜토크는 당일 <span className=" font-PTBold">오후 12시-1시</span>
          에 국경없는의사회 한국 유튜브 채널을 통해 온라인 생중계되며 온라인
          참여 인증 이벤트도 진행되므로 많은 참여 부탁드립니다!
        </p>
        <div className="absolute bottom-0 left-0 right-0 w-full border-t text-Neutrals-Grey5">
          <div className="flex w-full">
            <button
              className="w-full py-2 rounded md:py-4 text-[0.875rem]"
              onClick={closeModalUntilExpires}
            >
              오늘 하루
              <br className="md:hidden" /> 더 이상 보지 않기
            </button>
            <div className="border-r" />
            <button
              className="w-full py-2 rounded md:py-4 text-[0.875rem] text-Neutrals-Grey6"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
