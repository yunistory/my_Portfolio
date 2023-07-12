AOS.init();

// //대상찾기 및 값(데이터)을 구해오기
// let btnTop = document.querySelector('.btn-top');
// let html = document.documentElement;
// let htmlPos = html.scrollHeight / 2; /* html 세로크기의 절반값 */

// // console.log(btnTop, html);
// console.log(htmlPos);

// // 스크롤이 일어났을 때 동작을 만들기
// window.addEventListener('scroll', function () {
//   //스크롤값과 문서 세로크기의 절반값을 비교
//   let scrollTop = window.scrollY;
//   console.log(scrollTop);

//   //스크롤값이 문서 세로크기의 절반값을 넘어가면 (더 커지면)
//   if (scrollTop >= htmlPos) {
//     //탑으로 가는 버튼에 active 클래스 부여
//     btnTop.classList.add('active');
//   } else {
//     //그렇지 않으면(작으면) active 클래스 삭제
//     btnTop.classList.remove('active');
//   }
// });

// const $topBtn = document.querySelector('.moveTop-btn');

// // 버튼 클릭 시 맨 위로 이동
// $topBtn.onclick = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };

// const $bottomBtn = document.querySelector('.moveBottomBtn');

// // 버튼 클릭 시 페이지 하단으로 이동
// $bottomBtn.onclick = () => {
//   window.scrollTo({
//     top: document.body.scrollHeight,
//     behavior: 'smooth',
//   });
// };
