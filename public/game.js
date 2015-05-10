"use strick";
window.addEventListener("load",load);

function load() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var fps =     0;
    var imageObj = new Image();
    imageObj.src = 'http://www.virginmedia.com/images/emile.jpg';

      
    

    var player = new Player({ contexto: ctx , image: imageObj});
    player.listenKeyBoardEvent();

    (function tick() {
        drawWorld();
        setTimeout( function() { tick(); }  , 1000/fps);
    })();

    function drawWorld() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.tick();
        player.draw();      
    }

}
