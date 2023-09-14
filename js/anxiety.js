// 이벤트 리스너를 추가하여 "결과확인하기" 버튼 클릭 시 처리
document.querySelector(".b-button").addEventListener("click", function() {
    // 모든 라디오 버튼을 선택합니다.
    const radioButtons = document.querySelectorAll("input[type='radio']");
    let checkedCount = 0;
    let totalValue = 0;

    // 라디오 버튼이 선택되었는지 확인하고 값 합산
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            checkedCount++;
            totalValue += parseInt(radioButton.value);
        }
    }

    // 모든 라디오 버튼이 선택되지 않은 경우 경고창 표시
    if (checkedCount === 0) {
        alert("모든 문항에 답해주세요.");
    } else {
        // 선택된 라디오 버튼이 있는 경우, 결과 확인 로직을 여기에 추가
        // 예: 결과 출력
        calculateAndDisplayResult(totalValue);
    }
});

// 결과를 계산하고 표시하는 함수를 정의합니다.
function calculateAndDisplayResult(totalValue) {
    // 여기에 결과 계산 및 표시 로직을 추가하세요.
    // 예: 결과창 엘리먼트에 점수를 대입하고 보이게 설정
    const resultDiv = document.getElementById("result_div");
    resultDiv.style.display = "block";
    
    // totalValue를 사용하여 결과를 계산하고 출력하는 로직을 추가합니다.
    let resultText = "";
    
    if (totalValue >= 0 && totalValue <= 15) {
        resultText = "0점 ~ 15점:\n편안한 상태입니다. 지속적으로 정신건강에 관심을 갖고 예방을 위해 년 1회 정기검사도 잊지 마세요.";
    } else if (totalValue >= 16 && totalValue <= 24) {
        resultText = "16점 ~ 24점:\n가벼운 우울감을 겪고 있는 상태입니다. 우울증 예방을 위해 운동, 여가활동, 대인관계 맺기 등 즐거움을 주는 활동에 적극적으로 참여해보세요.";
    } else {
        resultText = "25점 이상:\n다양한 우울증상으로 일상생활에 영향을 주고 있는 상태입니다. 이러한 상태가 2주 이상 지속된다면 전문가와의 상담을 반드시 받아보세요.";
    }
    
    resultDiv.textContent = "진단결과: " + totalValue + "점 입니다.\n\n" + resultText;
}
