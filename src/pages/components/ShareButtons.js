import CopyToClipboard from "react-copy-to-clipboard";

const ShareButtons = () => {
  const currentUrl = window.location.href;
  console.log(currentUrl);

  const kakaoShare = () => {
    window.Kakao.init(`${process.env.REACT_APP_JS_KEY}`);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "국경없는의사회 사진전",
        description:
          "More Than a Picture: 8인의 포토저널리스트가 담은 국경없는의사회 구호현장의 기록",
        imageUrl: "https://msf.or.kr/morethanapicture/images/OG.jpg",
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
        encodeURIComponent(document.currentUrl) +
        "%20-%20" +
        encodeURIComponent(document.title),
      "twittersharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes height=600, width=600"
    );
  };

  const facebookShare = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?href=" +
        encodeURIComponent(document.currentUrl) +
        "&t=" +
        encodeURIComponent(document.title),
      "facebooksharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes height=600, width=600"
    );
  };

  const naverShare = () => {
    window.open(
      "https://share.naver.com/web/shareView.nhn?url=" +
        encodeURIComponent(document.currentUrl) +
        "&title=" +
        encodeURIComponent(document.title),
      "naversharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes height=600, width=600"
    );
  };

  return (
    <>
      <CopyToClipboard text={currentUrl}>
        <img
          className="cursor-pointer"
          src={`${process.env.PUBLIC_URL}/images/svgIcons/share_link.svg`}
          alt="share_link"
          onClick={() => alert("링크가 복사되었습니다.")}
        />
      </CopyToClipboard>
      <button onClick={kakaoShare}>
        <img
          src={`${process.env.PUBLIC_URL}/images/svgIcons/share_kakao.svg`}
          alt="share_kakao"
        />
      </button>
      <button onClick={twitterShare}>
        <img
          src={`${process.env.PUBLIC_URL}/images/svgIcons/share_twit.svg`}
          alt="share_twit"
        />
      </button>
      <button onClick={facebookShare}>
        <img
          src={`${process.env.PUBLIC_URL}/images/svgIcons/share_facebook.svg`}
          alt="share_facebook"
        />
      </button>
      <button onClick={naverShare}>
        <img
          src={`${process.env.PUBLIC_URL}/images/svgIcons/share_naver.svg`}
          alt="share_naver"
        />
      </button>
    </>
  );
};

export default ShareButtons;
