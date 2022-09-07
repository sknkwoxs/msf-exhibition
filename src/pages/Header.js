export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-Neutrals-Grey9 text-Neutrals-White">
        <div>
          <div className="hidden md:flex justify-between px-4 mx-auto max-w-[76rem]">
            <a className="py-[1.75rem]" href="#">
              <img src="/images/svgIcons/logo.svg" alt="logo" />
            </a>
            <div className="my-auto">
              <ul className="flex text-[1.25rem] leading-[1.5rem] font-bold items-center text-center">
                <li className="ml-[4rem] relative inline-block">
                  사진전 소개
                  {/* <ul className="absolute whitespace-nowrap left-[50%] -translate-x-[50%] flex flex-col gap-y-4 pt-[5rem] pb-[4rem] text-[1.125rem] leading-6 font-normal">
                    <li>사진전 소개</li>
                    <li>사무총장 인사말</li>
                  </ul> */}
                </li>
                <li className="ml-[4rem] relative inline-block">
                  작가 소개
                  {/* <ul className="absolute whitespace-nowrap left-[50%] -translate-x-[50%] flex flex-col gap-y-4 pt-[5rem] pb-[4rem] text-[1.125rem] leading-6 font-normal">
                    <li>가엘 튜린</li>
                    <li>알레산드로펜소</li>
                    <li>존 빈크</li>
                    <li>도미닉 나흐르</li>
                    <li>세드릭 게르베하이</li>
                    <li>해나 레예스 모랄레스</li>
                    <li>마시모 베루티</li>
                    <li>아슈피카 라만</li>
                  </ul> */}
                </li>
                <li className="ml-[4rem]">이벤트</li>
                <li className="ml-[4rem]">오시는길</li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-3 mx-auto md:hidden">
            <div className="flex justify-between">
              <a href="#">
                <img src="/images/svgIcons/Mlogo.svg" alt="Mlogo" />
              </a>
              <button className="flex items-center">
                <img src="/images/svgIcons/main_menu.svg" alt="main_menu" />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-Neutrals-Grey8">
          <div className="flex justify-between px-4 mx-auto max-w-[76rem] pb-[4rem] pt-8 mr-10">
            <div className="flex gap-[4rem] text-center">
              <ul className="flex flex-col gap-y-4">
                <li>사진전 소개</li>
                <li>사무총장 인사말</li>
              </ul>
              <ul className="flex flex-col gap-y-4">
                <li>가엘 튜린</li>
                <li>알레산드로펜소</li>
                <li>존 빈크</li>
                <li>도미닉 나흐르</li>
                <li>세드릭 게르베하이</li>
                <li>해나 레예스 모랄레스</li>
                <li>마시모 베루티</li>
                <li>아슈피카 라만</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
