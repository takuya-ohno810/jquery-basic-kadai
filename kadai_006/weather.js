$(function() {
  //id属性がtargetの要素にclass属性'heading'があるか取得する
  let result = $('#target').hasClass('heading');

  //class属性'heading'がない場合は追加する
  if(result) {
    ;
  } else {
    $('#target').addClass('heading');
  }
});