import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function Address() {
  return (
    <>
      <div className="md:pt-[7.5rem] pt-[3.5rem] bg-black"></div>
      {/* <div className="md:pt-[7.5rem] pt-[3.5rem] bg-Neutrals-White text-Neutrals-Grey8"> */}
      <div className="bg-Neutrals-White text-Neutrals-Grey8">
        <div>
          {/* <div className="my-20 text-center">
            <p className="mb-2 font-bold text-Brand-Secondary DB2">
              PHOTO EXHIBITION LOCATION
            </p>
            <h3 className="H3 text-Neutrals-Grey8">사진전 장소 안내</h3>
          </div> */}
          <div className="md:mt-[6rem] mt-[3rem] mb-12 text-center">
            <div className="hidden H5 hr-sect md:flex">
              갤러리 라메르Gallery La Mer(제3전시실)
            </div>
            <div className="H5 md:hidden">
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
            <h6 className="font-normal H6 text-Neutrals-Grey7">
              서울시 종로구 인사동 5길 26 홍익빌딩
            </h6>
            <h6 className="font-normal H6 text-Neutrals-Grey7">02-730-5454</h6>
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
              <h5 className="pb-6 border-b-2 H5">대중교통 이용시</h5>
            </div>
            <div className="flex flex-col py-6 border-b-2 md:py-12 md:flex-row">
              <h6 className="H6 mr-[6.875rem] whitespace-nowrap md:mb-0 mb-4">
                지하철 이용시
              </h6>
              <div className="w-full text-Neutrals-Grey7 DB1">
                <div className="border-b">
                  <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <img src="/images/svgIcons/line1.svg" alt="line1" />
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
                  <img src="/images/svgIcons/line3.svg" alt="line3" />
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
              <h6 className="H6 mr-[7.813rem] md:mb-0 mb-4">버스 이용시</h6>
              <div>
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
