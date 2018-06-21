/*
    屏宽320px 为例：
    根据以下代码：html 的fontSize=320/10 =32px   所以：1rem=32px
    则 0.5rem =32*0.5
    则 12px =12.0/32.0=0.375000
*/
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    clientWidth,
    DEFINENUMBER = 10;
    recalc = function () {
        clientWidth = docEl.clientWidth;
        var width = clientWidth;
        if (clientWidth > 720) {
            width = 720;
        }
        //else if (clientWidth < 320) {
        //    width = 320;
        //}
        docEl.style.fontSize = width / DEFINENUMBER + 'px';
    };

    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    })
    var lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

})(document, window);