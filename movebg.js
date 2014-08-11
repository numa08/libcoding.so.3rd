var bg = 0;
var imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var moveBg = function() {
  bg++;
  $('#gachaBtn01').hide();
  $('#gachaBg').css('background-image', 'url(drinkanimation/anim-' + bg + '.png)');
  $('#gachaBg').css('background-position', '0px 0px');

  if (bg > 21){
      setTimeout(function() {
        $('#clickhere').hide();
        var rand = Math.floor(Math.random() * imgs.length);
        $('#gachaBg').css('background-image', 'url(https://raw.githubusercontent.com/numa08/libcoding.so.3rd/master/' + imgs[rand] + ')');
        $('#gachaBg').css('background-position', '0px 0px');
        $('#gachaBg').css('background-size', 'contain');
        $('#gachaBg').css('background-repeat', 'no-repeat');
      },900);
  }
  else {
      setTimeout(moveBg, 170);
  }

};