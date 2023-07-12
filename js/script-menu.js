// HTML 문서의 구조를 파악한 후에 코드 실행
$(function () {
  // 자주 사용할 대상을 변수에 저장
  const $menu = $(".gnb > li");
  const $submenu = $(".submenu");
  const duration = 300;

  // 메뉴에 마우스가 들어오면
  $menu.on("mouseenter", function () {
    // 마우스가 진입한 메뉴에 on클래스 부여
    $(this).addClass("on");

    // $submenu.stop().slideDown();
    // 마우스가 진입한 메뉴의 자손인 $submenu를 슬라이드다운
    $(this).find($submenu).stop().slideDown(duration);
  });

  // 메뉴에서 마우스가 나가면
  $menu.on("mouseleave", function () {
    $menu.removeClass("on");
    $submenu.stop().slideUp(duration);
  });
});
