export default function IntroductionFooter() {
  return (
    <>
      <div className="bg-Neutrals-Grey8 text-Neutrals-White max-w-[63rem] mx-auto pb-[8rem]">
        <div>
          <div className="px-8 pt-8 pb-10 border mb-[5rem] border-Neutrals-Grey7 rounded-lg">
            <img
              className="mb-4"
              src="/images/svgIcons/introduction_footer_logo.svg"
              alt="introduction_footer_logo"
            />
            <p className="mb-4 H4">국경없는의사회는</p>
            <p className="DB1">
              1983년 앙골라에서 첫 활동을 개시했다. 1996년 국경없는의사회는
              벤구엘라, 후암보, 쿠안도 쿠반고주 등 앙골라 전역에서 영양실조
              프로그램을 운영하며 영양실조 아동에게 의료지원을 제공했다.
            </p>
          </div>
          <div>
            <button className="flex mx-auto mb-6">내 채널에 공유하기</button>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <img src="/images/svgIcons/arrows_left.svg" alt="arrows_left" />
                이전 작가로
              </div>
              <div className="flex gap-2">
                <button>
                  <img src="/images/svgIcons/share_link.svg" alt="share_link" />
                </button>
                <button>
                  <img
                    src="/images/svgIcons/share_kakao.svg"
                    alt="share_kakao"
                  />
                </button>
                <button>
                  <img src="/images/svgIcons/share_twit.svg" alt="share_twit" />
                </button>
                <button>
                  <img
                    src="/images/svgIcons/share_facebook.svg"
                    alt="share_facebook"
                  />
                </button>
                <button>
                  <img
                    src="/images/svgIcons/share_naver.svg"
                    alt="share_naver"
                  />
                </button>
              </div>
              <div className="flex items-center gap-2">
                다음 작가로
                <img
                  src="/images/svgIcons/arrows_right.svg"
                  alt="arrows_right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
