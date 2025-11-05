// 헤더 요소와, 스크롤 이벤트를 감지할 요소를 가져옵니다.
const header = document.querySelector(".main-header");
const headerHeight = header.offsetHeight; // 헤더의 초기 높이 (PC 기준)

// 스크롤 이벤트 리스너를 추가합니다.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // 스크롤이 헤더 높이(또는 특정 값)보다 더 내려갔을 때
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // 헤더에 'shrink' 클래스를 추가하여 축소 CSS를 적용합니다.
    header.classList.add("shrink");
  } else {
    // 스크롤이 맨 위에 있을 때 'shrink' 클래스를 제거하여 원래대로 되돌립니다.
    header.classList.remove("shrink");
  }
}
