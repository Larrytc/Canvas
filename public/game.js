"use strick";
window.addEventListener("load",load);

var objects = [];

function load() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var fps = 40;
    var imageObj = new Image();
    var imageObj2 = new Image();
    imageObj.src = "/image/carrito.png";
    imageObj2.src = "/image/carrito2.png";
    var fondo = new Image();
    fondo.src = "/image/fondo.jpg"; 
    

    var mouse = {x: 0, y: 0, prevX: 0, prevY: 0 };
    var startMove = false;

    (function enableInputs() {
        document.addEventListener('mousemove', function (evt) {
            if (startMove) {
                canvas.style.cursor = "pointer";
                var moveX = 0, moveY = 0;
                 if( mouse.prevX < mouse.x ) {
                    moveX = 4;
                 }else if( mouse.prevX > mouse.x ) {
                    moveX = -4;
                 };

                 if( mouse.prevY < mouse.y ) {
                    moveY = 3;
                 }else if(mouse.prevY > mouse.y  ){
                    moveY = -3;
                 };
                mouse.prevX = mouse.x;
                mouse.prevY = mouse.y;

                mouse.x = evt.pageX - canvas.offsetLeft;
                mouse.y = evt.pageY - canvas.offsetTop;
                ctx.translate( moveX , moveY);
            }else{
                canvas.style.cursor = "crosshair";

            }
        }, false);
        
        canvas.addEventListener('mouseup', function (evt) {
            startMove = false;
        }, false);
        
        canvas.addEventListener('mousedown', function (evt) {
            evt.preventDefault();
            startMove = true;
        }, false);
    })();
    
    
  
    var currentPlayer = new Player({ contexto: ctx , image: imageObj , image2: imageObj2});
    currentPlayer.listenKeyBoardEvent();
    
    objects.push(currentPlayer);


    (function tick() {
        drawWorld();
        setTimeout( function() { tick(); }  , 1000/fps);
    })();

    function drawWorld() {
        ctx.drawImage(fondo,-2000, -400, 4000, 4000);
       //ctx.clearRect(0, 0, canvas.width, canvas.height);
       //Estamos iterando los objetos
       for (var object of objects) {
           object.tick();
           object.draw();
       };    
    }
  
    
}
