$(function () {
  // 대상을 변수로
  const $goTop = $(".go-top");
  const $header = $("header");
  const $aniTarget = $("[data-aos]");
  console.log($aniTarget);

  // 처음에는 탑버튼을 안 보이게
  $goTop.hide();

  // 탑버튼을 클릭하면 화면 상단으로(첫번째 섹션으로 이동)
  $goTop.on("click", function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(1);
  });

  $("#fullpage").fullpage({
    // 인디케이터 커스텀
    // 1. 사용할 요소의 이름 설정
    menu: ".indicator",

    // 2. 앵커의 이름 설정
    anchors: ["sec1", "sec2", "sec3", "sec4", "sec5", "sec6"],

    // 3. 실제 링크에 data-menuanchor="" 적용

    // 영역에 진입한 후
    afterLoad: function (anchorLink, index) {
      console.log("영역에 진입한 후");
      console.log(anchorLink, index);

      // 네번째 영역에 진입하면 탑버튼을 보이게
      if (anchorLink === "sec4") {
        $goTop.fadeIn();
      }
      AOS.init();
      $aniTarget.addClass("aos-animate");
    },

    // 영역에서 떠나갈 때
    onLeave: function (index, nextIndex, direction) {
      console.log("영역에서 떠나갈 때");
      console.log(index, nextIndex, direction);
      // 네번째 영역을 벗어나면 탑버튼을 숨기기  --> 내가 한거
      // if (index == 4 && direction == 'up') {
      //   $goTop.fadeOut();
      // }

      // 네번째 영역을 떠나던가 휠의 방향이 up일 때
      if (index == 4 || direction == "up") {
        $goTop.fadeOut();
      }

      // 마우스 휠을 내리면 헤더에 클래스 부여
      if (direction === "down") {
        $header.addClass("hide");
      } else {
        $header.removeClass("hide");
      }
      $aniTarget.removeClass("aos-animate");
    },
  });

  // AOS.init();
});
