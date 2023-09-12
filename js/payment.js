const numberElement = document.getElementById("number");
const priceElement = document.getElementById("price");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const paymentButton = document.querySelector(".payment");

let quantity = 1;
let price = 50000;

function updatePriceAndQuantity() {
    priceElement.innerText = price.toLocaleString() + "원";
    numberElement.innerText = quantity;
}

increaseButton.onclick = () => {
    quantity++;
    price = quantity * 50000;
    updatePriceAndQuantity();
};

decreaseButton.onclick = () => {
    if (quantity <= 1) {
        alert("최소 결제는 1개월 입니다.");
    } else {
        quantity--;
        price = quantity * 50000;
        updatePriceAndQuantity();
    }
};

paymentButton.addEventListener("click", () => {
    // 페이지 이동을 원하는 URL로 변경
    window.location.href = "결제페이지의 URL 주소";
});

// 페이지 로드 시 초기 가격 설정
updatePriceAndQuantity();