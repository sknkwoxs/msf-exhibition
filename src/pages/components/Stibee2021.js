const app = new Vue({
  el: "#main_wrap",
  data: {
    form: {
      // mobile: '',
      email: "",
    },
    agree: false,

    url: "http://192.168.33.10/",
    searchParam: {
      method: "getBoardListByKey",
      key: "news_2021",
      search: "",
      orderColumn: "createDate",
      orderDirection: "desc",
      pageIndex: 1,
      pageSize: 2,
    },
    search: {},

    boardList: [],

    totalCount: 0,
    startIndex: 0,
    dayCheck: false,
    viewPop: true,

    leftPx: 417,
    widthPx: 600,
  },
  created: function () {
    // var self = this;
    // window.addEventListener('resize', function() {
    // 	self.reCalWidth();
    // });
  },

  filters: {
    trim: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.trim();
    },
    bignumber: function (value) {
      if (!value) return 0;
      var regexp = /\B(?=(\d{3})+(?!\d))/g;
      return value.toString().replace(regexp, ",");
    },
    subValue: function (value, start, length) {
      value += "";
      return value.substr(start, length);
    },
  },
  methods: {
    requestNewsLetter: function (e) {
      e.preventDefault();

      var re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

      if (!re.test(this.form.email)) {
        alert("올바른 이메일 주소를 입력해 주세요.");
        return;
      }

      // if(!this.agree) {
      // 	alert('개인정보 수집 및 이용에 동의가 필요합니다.');
      // 	return;
      // }

      this.$http
        .post(
          "https://stibee.com/api/v1.0/lists/5wzULi3PasL0TdkBcTxnfNkIVlAiEA==/public/subscribers",
          this.form,
          { emulateJSON: true }
        )
        .then(
          function (response) {
            var msg = response.bodyText.match(/<p>(.+)<\/p>/g);
            if (msg.length > 0) {
              msg = msg[0];
              alert(msg.substring(3, msg.length - 4));
            }
            return false;
          },
          function (error) {
            console.log(error);
          }
        );

      // this.form.mobile = '';
      this.form.email = "";
      // this.agree = false;

      return false;
    },
    // closePop: function() {
    // 	if(this.dayCheck) {
    // 		this.$cookies.set('checkPop', '1', '1d');
    // 	}
    //
    // 	this.viewPop = false;
    // },
  },
});
