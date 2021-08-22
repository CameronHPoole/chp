welcome to CPoole's project website!

head over to [https://www.celestrak.com/NORAD/elements/](https://www.celestrak.com/NORAD/elements/) and select your favorite satellite's two line element (TLE)

it should be in this form;

ISS (ZARYA)             
1 25544U 98067A   21220.61041377  .00000750  00000-0  21819-4 0  9993  
2 25544  51.6441  83.4829 0001269 272.9186 109.1495 15.48882229296724

<p>Click the button to display a dialog box which will ask for your TLE.</p>

<button onclick="myFunction()">Click me!</button>

<p id="demo"></p>

<script>
function myFunction() {
  var tle = window.prompt("Paste your TLE: ");
  window.alert("Your TLE is " + tle);
  
  //let str = tle;
  const myArrLines = tle.split("\n");
  
  satelliteName = myArrLines[0];
  
  //catalogNum = myArr[];
  //classification = myArr[];
  
}
</script>
