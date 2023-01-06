// 1.Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
function changeText(){
    const heading = document.createElement('h1')
    heading.innerHTML="MERN stack"
    heading.setAttribute("class","heading")
    document.getElementById("add-heading").appendChild(heading);
}
// 2.Write code to get 1st H1 element from a webpage using DOM
var heading = document.getElementsByTagName('h1')
console.log(heading);
var heading = document.getElementsByTagName('h1')[0]
console.log(heading);

// 3.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function jsClock(){
    var d = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML = d;
}
var second = 1000
setInterval(jsClock,second);

// 4.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function replace_text(){
    document.getElementById("changehead").innerHTML='Welcome To Elevation Academy'
}
// 5.Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

function hide_text(){
    document.getElementById("hide").style.visibility="hidden";
}