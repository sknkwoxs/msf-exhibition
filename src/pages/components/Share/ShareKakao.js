// const shareKakaoLink = (userId) => {
//   // @ts-ignore
//   window.Kakao.Link.createCustomButton({
//     container: "#kakao-link-btn",
//     templateId: 73967,
//     templateArgs: {
//       userId: `${userId}`,
//     },
//   });
// };

// const onShareKakaoClick = () => {
//   shareKakaoLink(userId);
// };

// <button>
//   <img src="/images/svgIcons/share_kakao.svg" alt="share_kakao" />
// </button>;

// Kakao.API.request({
//   url: "/v2/api/talk/memo/default/send",
//   data: {
//     template_object: {
//       object_type: "feed",
//       content: {
//         title: "카카오톡 링크 4.0",
//         description: "디폴트 템플릿 FEED",
//         image_url:
//           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
//         link: {
//           web_url: "https://developers.kakao.com",
//           mobile_web_url: "https://developers.kakao.com",
//         },
//       },
//       item_content: {
//         profile_text: "Kakao",
//         profile_image_url:
//           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
//         title_image_url:
//           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
//         title_image_text: "Cheese cake",
//         title_image_category: "Cake",
//         items: [
//           {
//             item: "Cake1",
//             item_op: "1000원",
//           },
//           {
//             item: "Cake2",
//             item_op: "2000원",
//           },
//           {
//             item: "Cake3",
//             item_op: "3000원",
//           },
//           {
//             item: "Cake4",
//             item_op: "4000원",
//           },
//           {
//             item: "Cake5",
//             item_op: "5000원",
//           },
//         ],
//         sum: "Total",
//         sum_op: "15000원",
//       },
//       social: {
//         like_count: 100,
//         comment_count: 200,
//       },
//       button_title: "바로 확인",
//     },
//   },
//   success: function (response) {
//     console.log(response);
//   },
//   fail: function (error) {
//     console.log(error);
//   },
// });
