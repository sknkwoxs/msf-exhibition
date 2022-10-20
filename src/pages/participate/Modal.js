import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="px-8 py-2 mt-6 border rounded font-PTSemiBold text-[1rem] leading-6 border-Neutrals-Grey7 text-Neutrals-Grey8"
        type="button"
        onClick={() => setShowModal(true)}
      >
        세부 일정 보기
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="absolute w-full h-full bg-Neutrals-Grey9 opacity-80"></div>
            <div className="relative w-auto p-4 mx-auto my-4 md:p-0">
              <div className="relative flex flex-col w-full p-4 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-between md:mb-2">
                  <div className="flex flex-col items-center gap-2 md:flex-row">
                    <p className="DB1 font-PTSemiBold">도슨트 세부 일정</p>
                    <span className="hidden leading-6 md:flex MB3 text-Neutrals-Grey6">
                      *전시 기간 중에는 다음과 같이 매일 전시 해설이 진행됩니다.
                    </span>
                  </div>
                  <button className="" onClick={() => setShowModal(false)}>
                    <img src="./images/svgIcons/close_x.svg" alt="close_x" />
                  </button>
                </div>
                <span className="leading-6 MB3 text-Neutrals-Grey6 md:hidden">
                  *전시 기간 중에는 다음과 같이 매일 전시 해설이 진행됩니다.
                </span>
                <div className="flex gap-4 leading-6 md:mb-2 MB3 font-PTSemiBold">
                  <p className="flex items-center gap-1">
                    <img src="./images/svgIcons/cast.svg" alt="cast" />
                    구호활동가 해설
                  </p>
                  <p className="flex items-center gap-1">
                    <img src="./images/svgIcons/smile.svg" alt="smile" />
                    국경없는의사회 직원 해설
                  </p>

                  <p className="items-center hidden gap-1 md:flex">
                    <img src="./images/svgIcons/children.svg" alt="children" />
                    어린이 눈높이 전시 해설
                  </p>
                </div>
                <p className="flex items-center gap-1 mb-4 leading-6 md:hidden MB3 font-PTSemiBold">
                  <img src="./images/svgIcons/children.svg" alt="children" />
                  어린이 눈높이 전시 해설
                </p>
                <div className="max-w-[560px] mb-2 hidden md:flex">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/pc_table.jpg`}
                    alt="pc_table"
                  />
                </div>
                <div className="mb-2 md:hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/m_table.jpg`}
                    alt="m_table"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
