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

    var offsetX= (canvas.getBoundingClientRect()).left;
    var offsetY= (canvas.getBoundingClientRect()).top;


    var fondo = new Image();
    fondo.src = "/image/fondo.jpg"; 
    
    document.addEventListener("mouseover", function(e) {
        var mouseX=parseInt(e.clientX-offsetX);
        var mouseY=parseInt(e.clientY-offsetY);
        console.log("mouseX" + mouseX + "mouseY" + mouseY )
        //ctx.translate( mouseX, 0);
    }, false);
    
    
  
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
