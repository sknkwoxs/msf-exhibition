import CopyToClipboard from "react-copy-to-clipboard";

const ShareButtons = () => {
  const currentUrl = window.location.href;

  const facebookShare = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(document.URL) +
        "&t=" +
        encodeURIComponent(document.title),
      "facebooksharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600"
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
      <button>
        <img src="/images/svgIcons/share_kakao.svg" alt="share_kakao" />
      </button>
      <button>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-show-count="false"
        >
          <img src="/images/svgIcons/share_twit.svg" alt="share_twit" />
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </button>
      <button onClick={facebookShare}>
        <img src="/images/svgIcons/share_facebook.svg" alt="share_facebook" />
      </button>
      <button>
        <img src="/images/svgIcons/share_naver.svg" alt="share_naver" />
      </button>
    </>
  );
};

export default ShareButtons;
