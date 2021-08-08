welcome to CPoole's project website!

head over to [https://www.celestrak.com/NORAD/elements/](https://www.celestrak.com/NORAD/elements/) and select your favorite satellite's two line element (TLE)

it should be in this form;

ISS (ZARYA)             
1 25544U 98067A   21206.81501715  .00003102  00000-0  64707-4 0  9993  
2 25544  51.6427 151.7042 0001244 199.0709 250.2237 15.48865789294583

//<p>Click the button to display a dialog box which will ask for your favorite drink.</p>

//<button onclick="myFunction()">Try it</button>

//<p id="demo"></p>

<script>
function myFunction() {
  
  var tle = window.prompt("Paste your TLE: ");
  alert("Your TLE is " + tle);

  let str = tle;
  const myArr = tle.split(" ");
  
}
</script>

<script src="script.js" type="text/javascript"></script>
