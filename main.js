//this is a JS file
//let's test whether it is linked properly
console.log("Linking successful!");

const txtHeader = document.getElementById("header"); 
const txtPara = document.getElementById("paragraph"); 
const imgFace = document.getElementById("face");

txtHeader.style.background = "lightgreen";

txtPara.innerText = "<h2>I am not a heading</h2>";
txtPara.innerHTML = "<h2>But, I am!</h2>";

imgFace.setAttribute("src", "images/happy.jpg");
imgFace.setAttribute("alt", "happy face");
