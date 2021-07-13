$(function(){

  var fvHeight = $('.fv').outerHeight();//fvの高さを取得

  //スクロールしたら、サイトロゴとバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < fvHeight -70){
      $('.header').removeClass('bg-color');
    }else{
      $('.header').addClass('bg-color');
    }

  });

// バーガーメニュー内のリンクをクリックしたらメニューを閉じる
// リンクを押したらCSSの：checkedを外す
  $('#burger-content a').click(function() {
    $('#burger-checkbox').removeAttr('checked').prop('checked', false).change();
  });

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top -90;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});