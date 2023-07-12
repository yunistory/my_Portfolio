$(function () {
  $("#fullpage").fullpage({
    // 기본 제공되는 내비게이션
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: [
      "main",
      "Renewal Design",
      "Web Design",
      "Microsite Design",
      "APP Design",
      "Editorial Design",
    ],
    showActiveTooltip: true,

    // 마지막(혹은 첫) 섹션에서 스크롤 했을 때 계속 돌아가게
    loopBottom: true,
    loopTop: true,

    // 슬라이더 옵션
    slidesNavigation: true,
    // slidesNavPosition: 'top',
    slidesNavPosition: "bottom",
  });
});
