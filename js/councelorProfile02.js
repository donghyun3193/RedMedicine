// JavaScript 함수를 정의하여 페이지 이동을 처리
function reservation() {
    // 페이지 이동을 원하는 URL로 변경
    window.location.href = '../html/index.html'; // 이동하려는 URL을 여기에 입력
}

// Alert 창을 띄우는 JavaScript 함수
function sessionAlert() {
    // alert 메서드를 사용하여 메시지를 표시합니다.
    alert("알림\n\n성인 개인 및 아동 개인의 1세션은 50분간 진행되며 필요시 더블 세션을 예약할 수 있습니다.\n부부·커플 상담의 경우 더블 세션으로만 진행되며 90분 동안 진행됩니다.");

}
//강사님의 js입니다. 
$('.reply-list-wrap').on('click', '.reply-btns', function () {
    let $replyBtnBox = $(this).closest('.reply-btn-box').find('.reply-btns__box');

    $replyBtnBox.toggleClass('none');
});

$('body').click(function (e) {
    if ($(e.target).hasClass('reply-btns')) {
        //console.log('aa');
        return;
    }
    if (!$('.reply-btns__box').has(e.target).length) {
        $('.reply-btns__box').addClass('none');
    }
});

$('.btn-back').on('click', function (){
    window.location.href = '/board/boardList';
})

// 리플 작성 완료 처리
$('.btn-reply').on('click', function (){

});

// 리플 삭제 버튼 처리
$('.reply-list-wrap').on('click', '.reply-remove-btn', function () {
    $('.reply-btns__box').addClass('none');
});

// 리플 수정 버튼 처리
$('.reply-list-wrap').on('click', '.reply-modify-btn', function () {
    let $content = $(this).closest('.reply').find('.reply-box__content');
    $content.replaceWith(`
  <div class='modify-box'>
    <textarea class='modify-content'>${$content.text()}</textarea>
    <button type='button' class='modify-content-btn'>수정 완료</button>
  </div>
  `);
    $('.reply-btns__box').addClass('none');
});

// 리플 수정 완료 처리
$('.reply-list-wrap').on('click', '.modify-content-btn', function () {
    console.log('modify!!!');
});