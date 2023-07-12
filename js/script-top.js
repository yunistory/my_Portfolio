$(function () {
  // 대상을 변수로
  const $goTop = $(".go-top");
  // const $header = $("header");
  // const $aniTarget = $("[data-aos]");
  console.log($aniTarget);

  // 처음에는 탑버튼을 안 보이게
  $goTop.hide();

  // 탑버튼을 클릭하면 화면 상단으로(첫번째 섹션으로 이동)
  $goTop.on("click", function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(1);
  });

  // AOS.init();
});
