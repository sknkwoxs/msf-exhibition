import { useState } from "react";

const StibeeSubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const FORM_URL = 'https://stibee.com/api/v1.0/lists/5SpRRg5rRzsLVHRRPHZXtzbOMgIwUA==/public/subscribers'
  const requestSubscription = (e) => {
    e.preventDefault();
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (!re.test(email)) {
      alert("올바른 이메일 주소를 입력해 주세요.");
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({email: email})
    };
    fetch(FORM_URL, requestOptions)
      .then(response => response.text())
      .then(response => {
        let message = response.match(/<p>(.+)<\/p>/g);
        if (message.length > 0) {
          setEmail("")
          message = message[0];
          alert(message.substring(3, message.length - 4));
        }
      })
  }
  const handleEmailChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }
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
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <button className="px-10 py-3 rounded md:rounded-none md:rounded-r bg-Neutrals-Grey9 H6 max-h-[3rem] whitespace-nowrap" onClick={requestSubscription}>
              구독하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StibeeSubscriptionForm;
