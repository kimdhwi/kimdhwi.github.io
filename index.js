// 이미지 배열
const images = [
  "/img/img/1.jpg",
  "/img/img/2.jpg",

];

let currentImageIndex = 0; // 현재 이미지 인덱스

// 이미지 변경 함수
function changeImage(direction) {
  const imageElement = document.getElementById("slider-image");

  // 1. 현재 이미지를 투명하게 만듬 (Fade out)
  imageElement.style.opacity = 0;

  // 2. 이미지 인덱스 변경
  currentImageIndex += direction;

  // 이미지 인덱스가 배열의 범위를 벗어나지 않도록 처리
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // 3. 새로운 이미지로 변경 (잠시 후)
  setTimeout(() => {
    imageElement.src = images[currentImageIndex];

    // 4. 이미지가 바뀐 후 다시 opacity를 1로 설정 (Fade in)
    imageElement.style.opacity = 1;
  }, 500); // 500ms 후에 이미지 변경
}




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
