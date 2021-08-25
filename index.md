# welcome
to CPoole's project website!

head over to [https://www.celestrak.com/NORAD/elements/](https://www.celestrak.com/NORAD/elements/) and select your favorite satellite's two line element (TLE)

it should be in this form;

ISS (ZARYA)             
1 25544U 98067A   21220.61041377  .00000750  00000-0  21819-4 0  9993  
2 25544  51.6441  83.4829 0001269 272.9186 109.1495 15.48882229296724

<p>Click the button to display a dialog box which will ask for your TLE.</p>
<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
    var tle = window.prompt("Paste your TLE: ");
    const myArrLines = tle.split("\n");
    satelliteName = myArrLines[0];
    line1 = myArrLines[1];
    line2 = myArrLines[2];
    window.alert("Your TLE is " + tle + "\n" + "it's name is " + satelliteName);
    
    // Start parsing the TLE for orbital elements
    inclination = line2[2]; // line 2, section 3 has the inclination in degrees stored in it
    RAAN = line2[3]; // line 2, section 4 has the right ascention of the ascending node
    e = line2[4];  // eccentricity
    argOfPerigee = line2[5]; // argument of perigee
    meanAnomoly = line2[6]; // mean anomaly
    meanMotion = line2[7]; // mean motion
    
    // one way to plot an orbit is to know the initial postion, inital velocity and numerically integrate over time using a differential equation to plot its path
    // another way is to know the orbital elements*: semi-major axis, eccentricity, inclination, true anomaly, arg of periapsis, longitude of ascending node
    // * you generically need at least 6 parameters to unambiguosly define an orbit (non-perturbed orbit)
    
    
}
</script>

<script type = "text/javascript" src="script.js"></script>

# How it works
