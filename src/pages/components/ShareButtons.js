import CopyToClipboard from "react-copy-to-clipboard";

const ShareButtons = () => {
  const currentUrl = window.location.href;

  const kakaoShare = () => {
    window.Kakao.init(`${process.env.REACT_APP_JS_KEY}`);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "국경없는의사회 사진전",
        description:
          "More Than a Picture: 8인의 포토저널리스트가 담은 국경없는의사회 구호현장의 기록",
        imageUrl: "",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  const twitterShare = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20" +
        encodeURIComponent(document.URL) +
        "%20-%20" +
        encodeURIComponent(document.title),
      "twittersharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes"
    );
  };

  const facebookShare = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(document.currentUrl) +
        "&t=" +
        encodeURIComponent(document.title),
      "facebooksharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes"
    );
  };

  const naverShare = () => {
    window.open(
      "http://share.naver.com/web/shareView.nhn?url=" +
        encodeURIComponent(document.currentUrl) +
        "&title=" +
        encodeURIComponent(document.title),
      "naversharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes"
    );
  };

  return (
    <>
      <CopyToClipboard text={currentUrl}>
        <img
          className="cursor-pointer"
          src="/images/svgIcons/share_link.svg"
          alt="share_link"
          onClick={() => alert("링크가 복사되었습니다.")}
        />
      </CopyToClipboard>
      <button onClick={kakaoShare}>
        <img src="/images/svgIcons/share_kakao.svg" alt="share_kakao" />
      </button>
      <button onClick={twitterShare}>
        {/* <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          target="_blank"
          rel="noopener noreferrer"
          data-show-count="false"
        >
          <img src="/images/svgIcons/share_twit.svg" alt="share_twit" />
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script> */}
        <img src="/images/svgIcons/share_twit.svg" alt="share_twit" />
      </button>
      <button onClick={facebookShare}>
        <img src="/images/svgIcons/share_facebook.svg" alt="share_facebook" />
      </button>
      <button onClick={naverShare}>
        <img src="/images/svgIcons/share_naver.svg" alt="share_naver" />
      </button>
    </>
  );
};

export default ShareButtons;
