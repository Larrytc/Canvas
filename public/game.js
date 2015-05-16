"use strick";
window.addEventListener("load",load);
var socket;

function load() {
    socket = io();
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var fps = 40;
      var imageObj = new Image();
    var players = [];
    imageObj.src = 'http://cd1.dibujos.net/dibujos/pintados/2011008/9b6956528621eb4ad9be29f3eeb98610.png';
  
    var currentPlayer = new Player({ contexto: ctx , image: imageObj});
    currentPlayer.listenKeyBoardEvent();
  
    (function tick() {
        drawWorld();
        setTimeout( function() { tick(); }  , 1000/fps);
    })();

    function drawWorld() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(300, 300, 300, 300);
       currentPlayer.tick();
       currentPlayer.draw();      
    }
  
    /*
    * Socket Listener
    */
    socket.on("rataMensaje", function(data){
      console.log(data);
    });

}
