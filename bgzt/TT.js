function blockNegativeInput(inputElement) {
  // '-' 키 입력 방지
  inputElement.addEventListener("keydown", (e) => {
    if (e.key === "-" || e.key === "Minus") {
      e.preventDefault();
    }
  });

  // 복사/붙여넣기 등으로 음수 들어오는 경우 방지
  inputElement.addEventListener("input", () => {
    if (parseFloat(inputElement.value) < 0) {
      inputElement.value = ""; // 음수면 비워버림
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const sellInput = document.getElementById("sellPrice");
  const desiredInput = document.getElementById("desiredAmount");

  const sellBtn = document.getElementById("calcPayoutBtn");
  const desiredBtn = document.getElementById("calcRequiredBtn");

  // 버튼 클릭 이벤트
  sellBtn.addEventListener("click", calcPayout);
  desiredBtn.addEventListener("click", calcRequiredPrice);



  blockNegativeInput(sellInput);
  blockNegativeInput(desiredInput);
});
