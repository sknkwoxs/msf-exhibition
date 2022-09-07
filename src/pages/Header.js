export default function Header() {
  return (
    <>
      <div className="bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="hidden md:flex justify-between px-4 mx-auto max-w-[76rem]">
          <a className="py-[1.75rem]" href="#">
            <img src="/images/svgIcons/logo.svg" alt="logo" />
          </a>
          <div className="my-auto">
            <ul className="flex gap-[4rem] text-[1.25rem] leading-[1.5rem] font-bold">
              <li>사진전 소개</li>
              <li>작가 소개</li>
              <li>이벤트</li>
              <li>오시는길</li>
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
    </>
  );
}
