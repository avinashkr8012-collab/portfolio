// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

```
navLinks.classList.toggle("active");
```

});

// Contact Form

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

```
event.preventDefault();

const name = document.getElementById("name").value;

alert("Thank you " + name + "! Your message has been received.");

contactForm.reset();
```

});

// Current Year

const footer = document.querySelector("footer");

const currentYear = new Date().getFullYear();

footer.querySelector("p").innerHTML =
"© " + currentYear + " Avinash Kumar. All Rights Reserved.";
