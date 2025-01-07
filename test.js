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
