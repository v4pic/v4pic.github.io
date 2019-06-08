// animated box moving in box - set to start point top right corner and move to center of box //
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 8);
  function frame() {
    if (pos == 170) { //pos == 170 changes the end point, end at center with 170//
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.right = pos + "px"; 
    } //elm.style.right change the direction box start point, start top right //
  }
}

//start bouncing twitter animation//
      var ctx = null;
      var x_icon = 0;
      var y_icon = 0;
      var stepX = 1;
      var stepY = 1;
      var size_x = 23;
      var size_y = 22;
      var canvas_size_x = 480;
      var canvas_size_y = 320;
      var anim_img = null;

function draw() {
        var canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        anim_img = new Image(size_x, size_y);
        anim_img.onload = function() { setInterval('myAnimation()', 10); }
        anim_img.src = 'images/twitter.png';
      }
      function myAnimation() {
        ctx.clearRect(0, 0, canvas_size_x, canvas_size_y);
       if (x_icon < 0 || x_icon > canvas_size_x - size_x) {stepX = -stepX; }
       if (y_icon < 0 || y_icon > canvas_size_y - size_y) {stepY = -stepY; }
          x_icon += stepX;
          y_icon += stepY;
       ctx.drawImage(anim_img, x_icon, y_icon);
      }
//end bouncing twitter animation//