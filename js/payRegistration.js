function call_confirm1(){
  if(confirm("등록을 취소 하시겠습니까?")){
      alert("등록이 취소 되었습니다.");
  }else{

  }
}
  function call_confirm2(){
  if(confirm("등록 하시겠습니까?")){
      alert("등록 되었습니다.");
  }else{

  }
}
// 원단위 콤마 적용
function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
} 

function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function inputOnlyNumberFormat(obj) {
  obj.value = onlynumber(uncomma(obj.value));
}

