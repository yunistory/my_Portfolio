$(function () {
  // 대상을 변수로
  const $window = $(window);
  const $header = $("#header");
  const $sideDot = $(".indicator li");
  const $section = $(".container > section");
  const secLength = $section.length - 1;

  let secIdx = 0; //이 값의 변화가 포인트!  --> 4가 나오면 안됨

  // 초기화
  updateDot(secIdx);

  // 1. 기본 이동
  function moveSection(index) {
    // 이동할 섹션의 위치 계산
    let posTop = index * $window.outerHeight();

    $("html, body").stop().animate(
      {
        scrollTop: posTop,
      },
      500 // 0.5초
    );

    updateDot(secIdx);
  }

  // moveSection(1);

  // 2. indicator를 클릭했을 때
  $sideDot.on("click", function (e) {
    e.preventDefault();

    // 클릭한 메뉴의 인덱스를 구해서 moveSection 함수에 전달 & 이동
    secIdx = $(this).index();
    moveSection(secIdx);
  });

  // 3. 닷 업데이트
  function updateDot(index) {
    $sideDot.removeClass("on").eq(index).addClass("on");
  }

  // 4. 휠 이벤트
  $window.on("wheel keydown", function (e) {
    console.log(e);

    if (e.originalEvent.deltaY < 0 || e.originalEvent.keyCode === 38) {
      // 올린 경우 (deltaY 음수)
      if (secIdx === 0) return;
      secIdx--;
      $header.removeClass("hide");
    } else if (e.originalEvent.deltaY > 0 || e.originalEvent.keyCode === 40) {
      // 올린 경우 (deltaY 양수)
      if (secIdx === secLength) return;
      secIdx++;
      $header.addClass("hide");
    }

    // console.log(secLength);
    moveSection(secIdx);
  });

  // 5. 화면이 리사이즈 됐을 때
  $window.on("resize", function () {
    moveSection(secIdx);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 850) {
      $(".arrow-down").hide();
      $(".go-top").show();
    } else {
      $(".arrow-down").show();
      $(".go-top").hide();
    }
  });
});
