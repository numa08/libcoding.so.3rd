jQuery._data(document.getElementById('gachaBtn01'), 'events').click[0].handler = function  () {
  var bg = 0;
  var imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  var moveBg = function() {
    bg++;
    $('#gachaBtn01').hide();
    $('#gachaBg').css('background-image', 'url(drinkanimation/anim-' + bg + '.png)');
    $('#gachaBg').css('background-position', '0px 0px');

    if (bg > 21){
        setTimeout(function() {
          $('#gachaBtn01').hide();
          var rand = Math.floor(Math.random() * imgs.length);
          $('#gachaBg').css('background-image', 'url(' + imgs[rand] + ')');
          $('#gachaBg').css('background-position', '0px 0px');
        },900);
    }
    else {
        setTimeout(moveBg, 170);
    }

  };
  moveBg();
}

var actualCode = 'console.log(showResult);';
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);