import { Map, MapMarker } from "react-kakao-maps-sdk";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";

export default function Address() {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0.4),
    1: useScrollFadeIn("left", 1, 0.4),
    2: useScrollFadeIn("right", 1, 0.4),
    3: useScrollFadeIn("left", 1, 0.4),
  };

  return (
    <>
      <div className="md:pt-[7.5rem] pt-[3.5rem] bg-black"></div>
      <div className="bg-Neutrals-White text-Neutrals-Grey8">
        <div>
          <div className="md:mt-[6rem] mt-[3rem] mb-12 text-center">
            <div className="hidden H5 hr-sect md:flex">
              갤러리 라메르Gallery La Mer(제3전시실)
            </div>
            <div className="md:text-[1.5rem] md:leading-[2rem] text-[1.25rem] leading-[1.5rem] md:hidden font-semibold">
              갤러리 라메르Gallery La Mer
              <br />
              (제3전시실)
            </div>
            <a
              href="http://www.gallerylamer.com/"
              className="inline-block mb-4 font-normal underline text-Brand-Primary DB2"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.gallerylamer.com
            </a>
            <a
              className="flex justify-center mb-2 font-normal H6 text-Neutrals-Grey7 hover:underline"
              href="https://map.kakao.com/?urlX=496650.0&urlY=1131393.0&name=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EC%A2%85%EB%A1%9C%EA%B5%AC+%EC%9D%B8%EC%82%AC%EB%8F%99+5%EA%B8%B8+26+%ED%99%8D%EC%9D%B5%EB%B9%8C%EB%94%A9"
              target="_blank"
              rel="noopener noreferrer"
            >
              서울시 종로구 인사동 5길 26 홍익빌딩
            </a>
            <a
              className="font-normal H6 text-Neutrals-Grey7 hover:underline"
              href="tel:02-730-5454"
            >
              02-730-5454
            </a>
          </div>
          <section className="hidden md:block">
            <Map
              center={{
                lat: 37.5725546,
                lng: 126.9848341,
              }}
              style={{
                width: "100%",
                minHeight: "400px",
              }}
              level={3}
            >
              <MapMarker
                position={{
                  lat: 37.5725546,
                  lng: 126.9848341,
                }}
              >
                <div style={{ padding: "5px", color: "#000" }}>
                  <a
                    className="whitespace-nowrap"
                    href="https://map.kakao.com/link/map/서울시 종로구 인사동 5길 26 홍익빌딩,37.5725546,126.9848341"
                    target="_blank"
                    rel="noreferrer"
                  >
                    서울시 종로구 인사동 5길 26 홍익빌딩
                  </a>
                </div>
              </MapMarker>
            </Map>
          </section>
          <section className="md:hidden mb-[3rem]">
            <Map
              center={{
                lat: 37.5725546,
                lng: 126.9848341,
              }}
              style={{
                width: "100%",
                maxHeight: "400px",
                minHeight: "240px",
              }}
              level={3}
            >
              <MapMarker
                position={{
                  lat: 37.5725546,
                  lng: 126.9848341,
                }}
              >
                <div style={{ padding: "5px", color: "#000" }}>
                  <a
                    className="whitespace-nowrap"
                    href="https://map.kakao.com/link/map/서울시 종로구 인사동 5길 26 홍익빌딩,37.5725546,126.9848341"
                    target="_blank"
                    rel="noreferrer"
                  >
                    서울시 종로구 인사동 5길 26 홍익빌딩
                  </a>
                </div>
              </MapMarker>
            </Map>
          </section>
          <div className="mx-auto md:max-w-[76rem] px-4">
            <div>
              <h5 className="pb-6 border-b-2 md:text-[1.5rem] md:leading-[2rem] text-[1.25rem] leading-[1.5rem] md:mt-20">
                대중교통 이용시
              </h5>
            </div>
            <div className="flex flex-col py-6 border-b-2 md:py-12 md:flex-row">
              <h6
                className="H6 mr-[6.875rem] whitespace-nowrap md:mb-0 mb-4"
                {...animatedItem[0]}
              >
                지하철 이용시
              </h6>
              <div
                className="w-full text-Neutrals-Grey7 DB1"
                {...animatedItem[1]}
              >
                <div className="border-b">
                  <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/svgIcons/line1.svg`}
                      alt="line1"
                    />
                    <h6 className="H6 text-[#343A40]">
                      1호선 종각역 (도보 3분)
                    </h6>
                  </div>
                  <p className="pb-6 md:pb-12 DB1">
                    <span className="mr-2">&bull;</span>종각역 3-1번 출구에서 약
                    300m 조계사 방면으로 직진, 사거리에서 우회전 후 200m가량
                    직진, 센터마크 호텔 옆
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-6 mb-2 md:mb-4 md:pt-12">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/svgIcons/line3.svg`}
                    alt="line3"
                  />
                  <h6 className="H6 text-[#343A40]">3호선 안국역(도보 5분)</h6>
                </div>
                <p className="DB1">
                  <span className="mr-2">&bull;</span>안국역 6번 출구
                  인사동길(종로방면)으로 약 400m 직진, 인사동 사거리에서 우회전
                  후 약 200m 직진
                </p>
              </div>
            </div>
            <div className="md:pt-12 pt-6 md:mb-[7.5rem] mb-[3rem] flex md:flex-row flex-col">
              <h6
                className="H6 mr-[7.813rem] md:mb-0 mb-4"
                {...animatedItem[2]}
              >
                버스 이용시
              </h6>
              <div {...animatedItem[3]}>
                <h6 className="md:mb-4 mb-2 H6 text-[#343A40]">광역버스</h6>
                <div className="md:pb-6 pb-3 text-[#343A40] DB1">
                  <span className="mr-2">&bull;</span>
                  <span className="text-[#E30613]">5000A, 5005</span>번 탑승 후
                  조계사 앞에서 하차
                </div>
                <h6 className="md:mb-4 mb-2 H6 text-[#343A40]">일반버스</h6>
                <div className="text-[#343A40] DB1">
                  <p>
                    <span className="mr-2">&bull;</span>
                    <span className="text-[#2579CC]">741, 470</span>번 탑승 후
                    종로2가 하차 후 도보 약 77m 직진 후&nbsp;
                    <span className="text-[#00A807]">마을버스 02</span>번 환승
                    후 공평.종각 하차 후 우측으로 약 200m 이동
                  </p>
                  <p>
                    <span className="mr-2">&bull;</span>
                    <span className="text-[#2579CC]">162</span>번 탑승 후 조계사
                    앞 하차, 약 150m 센터마크호텔 방향으로 직진
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
