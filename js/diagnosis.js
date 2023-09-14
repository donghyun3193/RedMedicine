function calculateResult() {
  // 각 라디오 버튼의 값을 가져와서 더합니다.
  let totalScore = 0;
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          totalScore += parseInt(radioButtons[i].value);
      }
  }

  // 결과를 표시하는 엘리먼트에 점수를 업데이트합니다.
  const resultScoreElement = document.getElementById('result_score');
  resultScoreElement.textContent = totalScore;
}