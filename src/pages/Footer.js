export default function Footer() {
  return (
    <>
      <div className="flex w-full bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="px-4 pt-[2.5rem] md:pt-[4rem] mx-auto text-center md:w-full md:max-w-[76rem]">
          <div className="md:flex md:justify-between">
            <div>
              <div className="flex justify-center mb-6 md:mb-12 md:justify-start">
                <img
                  className="hidden md:block"
                  src="/images/svgIcons/logo.svg"
                  alt="logo"
                />
                <img
                  className="block md:hidden"
                  src="/images/svgIcons/Mlogo.svg"
                  alt="Mlogo"
                />
              </div>
              <div className="hidden mb-6 md:block DB3">
                <div className="flex justify-center md:justify-start">
                  <p>사무국 이메일 : </p>&nbsp;
                  <a
                    className="font-normal hover:underline"
                    href="mailto:events@seoul.msf.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    events@seoul.msf.org
                  </a>
                </div>
                <div>
                  <p>COPYRIGHTⓒ 2022 MSF. All right reserved</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-6 md:mt-6 md:mb-10 H7 text-[0.87rem]">
                <a
                  className="hover:text-Neutrals-Grey3 hover:underline"
                  href="https://msf.or.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  국경없는의사회
                </a>
                <div className="mx-4 border-r border-Neutrals-Grey7"></div>
                <a
                  className="hover:text-Neutrals-Grey3 hover:underline"
                  href="https://msf.or.kr/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  이용약관
                </a>
                <div className="mx-4 border-r border-Neutrals-Grey7"></div>
                <a
                  className="hover:text-Neutrals-Grey3 hover:underline"
                  href="https://msf.or.kr/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개인정보처리방침
                </a>
              </div>
              <div className="hidden md:block mb-[4rem]">
                <p className="mb-2 DB3 md:text-right">
                  국경없는의사회 공식 소셜미디어
                </p>
                <div className="md:flex md:justify-end">
                  <a
                    className="hover:opacity-90"
                    href="https://www.facebook.com/msfkorea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/svgIcons/facebook.svg" alt="facebook" />
                  </a>
                  <div className="inline-block w-2" />
                  <a
                    className="hover:opacity-90"
                    href="https://www.instagram.com/msfkorea/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/svgIcons/insta.svg" alt="insta" />
                  </a>
                  <div className="inline-block w-2" />
                  <a
                    className="hover:opacity-90"
                    href="https://www.youtube.com/user/msfkorea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/svgIcons/youtube.svg" alt="youtube" />
                  </a>
                  <div className="inline-block w-2" />
                  <a
                    className="hover:opacity-90"
                    href="https://blog.naver.com/msfkr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/svgIcons/naver.svg" alt="naver" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="visible mb-6 md:hidden DB3">
            <div className="flex justify-center">
              <p>사무국 이메일 : </p>&nbsp;
              <button>events@seoul.msf.org</button>
            </div>
            <div>
              <p>COPYRIGHTⓒ 2022 MSF. All right reserved</p>
            </div>
          </div>
          <div className="md:hidden visible mb-[4rem]">
            <p className="mb-2 DB3">국경없는의사회 공식 소셜미디어</p>
            <div className="block md:hidden">
              <a
                className="inline-block"
                href="https://www.facebook.com/msfkorea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/svgIcons/facebook.svg" alt="facebook" />
              </a>
              <div className="inline-block w-2" />
              <a
                className="inline-block"
                href="https://www.instagram.com/msfkorea/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/svgIcons/insta.svg" alt="insta" />
              </a>
              <div className="inline-block w-2" />
              <a
                className="inline-block"
                href="https://www.youtube.com/user/msfkorea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/svgIcons/youtube.svg" alt="youtube" />
              </a>
              <div className="inline-block w-2" />
              <a
                className="inline-block"
                href="https://blog.naver.com/msfkr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/svgIcons/naver.svg" alt="naver" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
