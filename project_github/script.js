/* 
   Brews, Beans, Baked Goods script 
   Filename: script.js
   Author:   Remigio de la Rosa
   Date:     11/21/2023
   Independent Project
 */

/* navigation script copied from lakelands lesson folder */
var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
} else if (navButton.attachEvent) {
   navButton.attachEvent("onclick", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   });
}


/* create variables */
var form = document.querySelector(".contactinfo");
var submitButton = document.querySelector(".submitbutton");

/* function for filled form */
function formFill() {
	if (form.checkValidity() === true) {
		submitButton.className = "submitbutton show";
	}
}

/* create event listener */
form.addEventListener("change", formFill, false);