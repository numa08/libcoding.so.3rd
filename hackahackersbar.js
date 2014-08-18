var actualCode = "jQuery._data(document.getElementById('gachaBtn01'), 'events').click[0].handler = function () { moveBg(); };";
var script = document.createElement('script');
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);