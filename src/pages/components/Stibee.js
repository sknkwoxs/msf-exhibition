const Stibee = () => {
  return (
    <>
      <section className="bg-Brand-Primary">
        <div className="w-full flex flex-col md:flex-row gap-6  mx-auto md:max-w-[76rem] py-8 md:py-0 px-4">
          <p className="w-full flex items-center MH3 md:text-[1.375rem] text-center justify-center md:justify-start break-words text-ellipsis whitespace-nowrap">
            국경없는의사회 한국 사무소에서 진행하는
            <br className="md:hidden" /> 이벤트 관련 최신 소식을 받아보세요
          </p>
          <div className="flex flex-col w-full gap-2 py-0 md:py-10 md:flex-row md:gap-0 md:pl-[3.5rem]">
            <div className="w-full">
              <input
                className="w-full px-4 py-3 rounded md:rounded-none md:rounded-l text-Neutrals-Grey9"
                type="text"
                id="subscribe"
                placeholder="이메일 주소를 입력해주세요."
              />
            </div>
            <button className="px-10 py-3 rounded md:rounded-none md:rounded-r bg-Neutrals-Grey9 H6 max-h-[3rem] whitespace-nowrap">
              구독하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stibee;
