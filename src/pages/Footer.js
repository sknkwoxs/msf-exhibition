export default function Footer() {
  return (
    <>
      <div className="flex w-full bg-Neutrals-Grey9 text-Neutrals-White">
        <div className="px-4 pt-[2.5rem] md:pt-[4rem] mx-auto text-center md:w-full md:max-w-[76rem]">
          <div className="md:flex md:justify-between">
            <div>
              <div className="flex justify-center mb-6 md:mb-8 md:justify-start">
                <a href="/">
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
                </a>
              </div>
              <div className="hidden mb-6 md:block DB3">
                <div className="flex justify-center md:justify-start">
                  <p>사무국 이메일 : </p>&nbsp;
                  <button>events@seoul.msf.org</button>
                </div>
                <div>
                  <p>COPYRIGHT @ 2022 MSF. All right reserved</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-6 md:mb-8 H7">
                <a
                  href="https://msf.or.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  국경없는의사회
                </a>
                <div className="mx-4 border-r border-Neutrals-Grey7"></div>
                <a
                  href="https://msf.or.kr/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  이용약관
                </a>
                <div className="mx-4 border-r border-Neutrals-Grey7"></div>
                <a
                  href="https://msf.or.kr/privacy-policy?_ga=2.42526947.776451771.1662340029-227573643.1660274904"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개인정보취급방침
                </a>
              </div>
              <div className="hidden md:block mb-[4rem]">
                <p className="mb-2 DB3 md:text-right">
                  국경없는의사회 공식 소셜미디어
                </p>
                <div className="md:flex md:justify-end">
                  <a
                    href="https://www.facebook.com/msfkorea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/svgIcons/facebook.svg" alt="facebook" />
                  </a>
                  <div className="inline-block w-2" />
                  <a
                    href="https://www.instagram.com/msfkorea/
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/svgIcons/insta.svg" alt="insta" />
                  </a>
                  <div className="inline-block w-2" />
                  <a
                    href="https://www.youtube.com/user/msfkorea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/svgIcons/youtube.svg" alt="youtube" />
                  </a>
                  <div className="inline-block w-2" />
                  <a
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
              <p>COPYRIGHT @ 2022 MSF. All right reserved</p>
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
