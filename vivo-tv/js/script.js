$(function () {
  // 대상을 변수로 저장
  const $btnMenu = $('.btn-menu');
  const $menu = $('.menu-wrap');
  const $dim = $('.dim');
  let isAct = false; /* 아직 활성화 되지 않음 */

  // 햄버거 버튼을 클릭했을 때
  // $btnMenu.on('click', function () {})
  $btnMenu.on('click', function (e) {
    e.preventDefault();

    // $(this).toggleClass('active');

    // 3. 조건을 따져서 창을 열고/닫는다.
    if (isAct === false) {
      // $menu를 열어주기
      openMenu();
    } else {
      // $menu를 닫아주기
      closeMenu();
    }
  });

  // top 버튼
  const $topBtn = document.querySelector('.moveTop-btn');

  // 버튼 클릭 시 맨 위로 이동
  $topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const $bottomBtn = document.querySelector('.moveBottomBtn');

  // 버튼 클릭 시 페이지 하단으로 이동
  // $bottomBtn.onclick = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  // $dim을 클릭해도 창이 닫히게
  $dim.on('click', closeMenu);

  // $menu를 열어주기
  function openMenu() {
    $btnMenu.addClass('active');
    slideMenu(0);
    isAct = true;
    $dim.fadeIn();
  }

  // $menu를 닫아주기
  function closeMenu() {
    $btnMenu.removeClass('active');
    slideMenu('100%');
    isAct = false;
    $dim.fadeOut();

    // 서브 메뉴 초기화
    $menuList.removeClass('on');
    $subMenu.slideUp();
  }

  // 메뉴를 보이게하는 동작
  function slideMenu(pos) {
    // alert('슬라이딩!');
    $menu.animate(
      {
        left: pos,
      },
      350
    );
  }

  // 서브 메뉴를 클릭했을 때
  const $menuList = $menu.find('.menu > li');
  const $subMenu = $('.submenu');

  $menuList.on('click', function (e) {
    e.preventDefault();

    // 전부 다 없애고 : 클릭한 놈의 형제들 모두 on클래스 삭제
    $(this).siblings().removeClass('on');
    // 클릭한 놈한테만 on클래스 부여
    $(this).toggleClass('on');

    $(this).siblings().find($subMenu).slideUp();
    $(this).find($subMenu).slideToggle();
  });
});
