$(function() {
  //id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    //文字色を赤にする
    $('#target').css('color', 'red');
  });

  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    //文字内容を「Hello!」にする
    $('#target').text('Hello!');
  });

  //id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    //文字をフェードアウトする
    $('#target').fadeOut();
  });

  //id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function() {
    //文字をフェードインする
    $('#target').fadeIn();
  });
});