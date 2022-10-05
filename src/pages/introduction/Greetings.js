import useScrollFadeIn from "../components/hooks/useScrollFadeIn";

export default function Greetings() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4),
    1: useScrollFadeIn("up", 1, 0.4),
    2: useScrollFadeIn("up", 1, 0.4),
  };

  return (
    <>
      <div className="md:pt-[7.5rem] pt-[4rem] bg-black"></div>
      <div>
        <div className="max-h-[44rem] min-h-[22rem]">
          <img
            className="w-full max-h-[44rem] min-h-[22rem] object-cover greetingsMainImg"
            src={`${process.env.PUBLIC_URL}/images/Welcome.png`}
            alt="Welcome"
          />
        </div>
        <div className="px-4 bg-center bg-no-repeat bg-cover DB1 text-Neutrals-Grey8 bg-bg-introduction">
          <div className="mx-auto md:max-w-[63rem]">
            <p className="md:py-[6rem] py-[3rem]" {...animatedItem[0]}>
              국경없는의사회
              <span className="italic text-[14px]">Médecins San Frontière</span>
              는 인간 존엄성에 대한 존중으로 생명을 보호하고 고통을 완화하는 데
              기여하기 위해 시작됐습니다. 위험한 상황에 처한 환자들을 치료하고,
              그들이 삶과 미래를 다시 되찾을 수 있도록 돕습니다.
              국경없는의사회는 의료지원을 바탕으로 활동합니다. 무력분쟁, 전염병,
              자연재해의 영향을 받거나 의료로부터 소외된 사람들에게 의료지원을
              제공합니다. 하지만 이에 더해 떼모아나지
              <span className="italic text-[14px]">témoignage</span>, ‘증언’하는
              것 또한 우리의 중요한 사명입니다. 우리가 현장에서 만나는 환자들이
              직면한 상황에 대해 대중의 인식을 높임으로써 그 상황을 개선하는 데
              기여하는 것입니다.
              <br />
              <br />
              50년이 넘는 시간 동안, 수많은 국경없는의사회 활동가들은 말로
              표현하기 어려운 비인간적인 상황에 직면했습니다. 사진은 찰나의
              순간에 이야기를 전할 수 있는 예술입니다. 인도적 구호 현장에서의
              사진은 상황을 포착하고, 대상을 존중하며, 비인간적인 상황에서
              인간성을 유지하는 섬세한 과정입니다. 한 장의 사진이 역사를 쓰고,
              우리 사회를 반성하게 했습니다. 때로는 철학에 대한 열린 책이기도
              합니다.
              <br />
              <br /> 국경없는의사회 한국사무소는 설립10주년을 맞이해
              사진전시회&nbsp;
              <span className="font-PTBold">"MORE THAN A PICTURE"</span>을
              개최합니다. 맵스(MAPS)의 저명한 포토저널리스트들이 찍은 사진을
              모은 전시입니다. 전시회에 오셔서 각각의 사진 뒤에 숨겨진 이야기를
              발견하는 시간을 가지시길 바랍니다.
              <br />
              <br /> 위기에 처한 사람들의 현실을 담아내기 위해 분투한 헌신적인
              사진작가와 지금 이 순간에도 생명을 살리기 위해 달려가고 있는 전
              세계 국경없는의사회 팀에 감사의 마음을 전합니다.
              <br />
              <br /> 사진전에서 여러분을 만나뵙길 기대합니다.
              <br />
              <br />
              <span className="font-PTBold" {...animatedItem[1]}>
                티에리 코펜스
              </span>
              <br />
              <span className="font-PTBold" {...animatedItem[2]}>
                국경없는의사회 한국 사무총장
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
