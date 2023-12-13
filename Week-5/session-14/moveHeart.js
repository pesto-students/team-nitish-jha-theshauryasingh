<!DOCTYPE html>
<html>
<head>
    <title>Move the heart</title>
 <style>
        body {
            height: 100vh;
            width: 100vw;
        }
    </style>
</head>
<body>


    <div id="heart">
      <img src="heart.png">
    </div>
 
 
  <script>
    function moveImage(x,y){
   console.log('moveImage ', x, y);
   //moves 1 pixel in xy direction
   const heart = document.querySelector('#heart');
   heart.style.left = x + "px";
   heart.style.top = y + "px";
 }
 
    function startAnimation(event){
   const x = event.clientX;
   const y = event.clientY;
   console.log('startAnimation ', x, y);
   moveImage(x,y);
 }
 
 const body = document.body;
    body.addEventListener("click", (event) => {startAnimation(event)});
  </script>
  
  
</body>

</html>