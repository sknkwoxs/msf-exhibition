export default function Error403() {
  return (
    <>
      <div className="h-[7.5rem] bg-black hidden md:flex" />
      <div className="flex justify-center text-center md:pt-[7.5rem] pt-[3.5rem]">
        <div className="mt-[11rem] mb-[12.5rem] px-4">
          <p className="mb-4 text-Neutrals-Grey8 H2">403ERROR</p>
          <p className="mb-8 font-normal text-Neutrals-Grey6 DB2">
            요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다.
          </p>
          <div>
            <button className="px-8 py-5 bg-Brand-Primary text-Neutrals-White ButtonLarge">
              메인페이지로 이동
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
