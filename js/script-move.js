$(function () {
  const $window = $(window);
  const $objWrap = $(".obj-wrap");
  const $obj1 = $objWrap.find(".obj1");
  const $obj2 = $objWrap.find(".obj2");
  const $obj3 = $objWrap.find(".obj3");
  const $obj4 = $objWrap.find(".obj4");
  const $obj5 = $objWrap.find(".obj5");

  // 마우스 좌표값
  let x = 0;
  let y = 0;

  // 수정 되는 마우스 좌표값
  let mx = 0;
  let my = 0;

  let speed = 0.009; // 속도를 구하는 공식같은 것 / 0.09는 여러번 테스트해 본 결과값

  $window.on("mousemove", function (e) {
    // 마우스 좌표의 시작지점을 화면의 정중앙으로 이동
    x = e.pageX - $window.outerWidth() / 2;
    y = e.pageY - $window.outerHeight() / 2;

    console.log(x, y);
  });

  // * 마우스 위치값을 기본으로 해서 어떤 값을 만들자
  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $obj1.css({
      transform: `translate(${mx * 0.01}px, ${my * 0.01}px)`,
    });
    $obj2.css({
      transform: `translate(${mx * 0.03}px, ${my * 0.03}px)`,
    });
    $obj3.css({
      transform: `translate(${mx * 0.02}px, ${my * 0.01}px)`,
    });
    $obj4.css({
      transform: `translate(${mx * 0.03}px, ${my * 0.02}px)`,
    });
    $obj5.css({
      transform: `translate(${mx * 0.01}px, ${my * 0.02}px)`,
    });

    // 부드럽게 다시 반복
    requestAnimationFrame(moving);
  }
  moving();
});
