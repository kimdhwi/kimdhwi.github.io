// 쉬운 글자 애니메이션
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

// 이미지 슬라이더
const images = ["/img/img/1.jpg", "/img/img/2.jpg"];
let currentImageIndex = 0;

function changeImage(direction) {
  const imageElement = document.getElementById("slider-image");

  imageElement.style.opacity = 0;

  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  setTimeout(() => {
    imageElement.src = images[currentImageIndex];
    imageElement.style.opacity = 1;
  }, 500);
}


// JavaScript로 클릭 이벤트 추가
document.getElementById("login-link").addEventListener("click", function () {
  // 페이지 이동
  window.location.href = "login.html"; // 로그인 페이지로 이동
});


