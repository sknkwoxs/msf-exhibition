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
        className="fixed top-0 left-0 right-0 w-full h-full bg-[#000000bd] z-[999]"
        onClick={closeModal}
      ></div>
      <section className="md:h-[216px] h-[324px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-Neutrals-White z-[1000] drop-shadow font-PT md:mx-auto mx-10 max-w-[488px]">
        <div className="flex items-center justify-between mb-4 font-PTSemiBold H7 ">
          안내말씀 드립니다.
          <img
            className="cursor-pointer"
            src={`${process.env.PUBLIC_URL}/images/svgIcons/close_x.svg`}
            alt="close_x"
            onClick={closeModal}
          />
        </div>
        <p className="mb-4 text-Neutrals-Grey6 text-[12px] leading-6 ">
          *11.05(토), 11.12(토) 오전 중에는 내부 이벤트가 있는 관계로 해당
          일자에는
          {/* <br className="hidden md:flex" />{" "} */}
          <br />
          <span className="underline">오후 2시-6시 사이</span> 에만 전시현장
          관람이 가능하신 점 참고 부탁드립니다.
        </p>
        <p className="mb-4 text-Neutrals-Grey6 text-[12px] leading-6 ">
          <span className="font-PTBold">
            *11.05(토) 스페셜토크 현장 참석 신청은 마감되었습니다.
          </span>
          <br />
          스페셜토크는 당일 <span className="underline">오후 12시-1시</span>에
          국경없는의사회 한국 유튜브 채널을 통해 온라인 생중계되며
          <br className="md:hidden" /> 온라인 참여 인증 이벤트도 진행되므로 많은
          참여 부탁드립니다!
        </p>
        {/* <div className="absolute bottom-0 left-0 right-0 w-full border-t text-Neutrals-Grey5">
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
        </div> */}
      </section>
    </>
  );
}
