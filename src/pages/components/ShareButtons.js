import CopyToClipboard from "react-copy-to-clipboard";

const ShareButtons = () => {
  const currentUrl = window.location.href;

  return (
    <>
      <CopyToClipboard text={currentUrl}>
        <img
          className="cursor-pointer"
          src="/images/svgIcons/share_link.svg"
          alt="share_link"
        />
      </CopyToClipboard>
      <button>
        <img src="/images/svgIcons/share_kakao.svg" alt="share_kakao" />
      </button>
      <button>
        <img src="/images/svgIcons/share_twit.svg" alt="share_twit" />
      </button>
      <button>
        <img src="/images/svgIcons/share_facebook.svg" alt="share_facebook" />
      </button>
      <button>
        <img src="/images/svgIcons/share_naver.svg" alt="share_naver" />
      </button>
    </>
  );
};

export default ShareButtons;
