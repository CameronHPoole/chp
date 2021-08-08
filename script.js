<!DOCTYPE html>
<html>
<body>
  
<p>Click the button to display a dialog box which will ask for your favorite drink.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  
  var tle = window.prompt("Paste your TLE: ");
  alert("Your TLE is " + tle);

  let str = tle;
  const myArr = tle.split(" ");
  
}
</script>
</body>
</html>
