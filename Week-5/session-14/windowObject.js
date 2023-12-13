<!DOCTYPE html>
<html>

<head>
    <title>Box Model Example with Text Overflow</title>
</head>

<body>
    <div>
    </div>
  <script>
    function displayWindowProperties(){
      console.log(navigator.userAgent
);
      var screenWidth = window.screen.width;
      var screenHeight = window.screen.height;
      console.log(" screen width -> ", screenWidth, " screen height -> ", screenHeight);
      console.log("location href -> ", window.location.href, "location path -> ", window.location.pathname);
      var local = localStorage.getItem("message");
      var session = sessionStorage.getItem("message");
      console.log("local ", local, " sesion ", session);
    }
    displayWindowProperties();
  </script>
</body>

</html>