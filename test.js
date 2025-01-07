const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

let isText1Active = true;

function slideText() {
  if (isText1Active) {
    // 첫 번째 텍스트 위로 슬라이드
    text1.classList.add("slide-up");
    text1.classList.remove("active");

    // 두 번째 텍스트 아래서 슬라이드
    text2.classList.remove("hidden");
    text2.classList.add("active", "slide-down");

    // 첫 번째 텍스트 초기화
    setTimeout(() => {
      text1.classList.add("hidden");
      text1.classList.remove("slide-up");
      text2.classList.remove("slide-down");
    }, 500);
  } else {
    // 두 번째 텍스트 위로 슬라이드
    text2.classList.add("slide-up");
    text2.classList.remove("active");

    // 첫 번째 텍스트 아래서 슬라이드
    text1.classList.remove("hidden");
    text1.classList.add("active", "slide-down");

    // 두 번째 텍스트 초기화
    setTimeout(() => {
      text2.classList.add("hidden");
      text2.classList.remove("slide-up");
      text1.classList.remove("slide-down");
    }, 500);
  }

  // 현재 활성 텍스트 전환
  isText1Active = !isText1Active;
}

// 2초마다 애니메이션 반복
setInterval(slideText, 2000);
