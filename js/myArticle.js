// 초기에 첫 번째 탭을 활성화
// showTab(0);

// JavaScript를 사용하여 탭을 활성화하는 함수
function showTab(tabIndex) {
    // 모든 탭을 비활성화
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // 선택한 탭을 활성화
    var selectedTab = document.getElementById('tab' + (tabIndex + 1));
    selectedTab.classList.add('active-tab');

}
