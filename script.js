// AOS Animation
AOS.init({
  duration:1200,
  once:true
});

// Typing Effect
var typed = new Typed(".typing", {
  strings:[
    "[Frontend Developer]",
    "Web Developer",
    "Graphic Designer",
    
  ],
  typeSpeed:80,
  backSpeed:50,
  loop:true
});

// Particles Background
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#00f7ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});

// Dark Mode
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// Navbar Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }

  });

});

// Contact Form AJAX
const form = document.getElementById("contactForm");

const popup = document.getElementById("successPopup");

const loader = document.querySelector(".loader");

const btnText = document.querySelector(".btn-text");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  loader.classList.remove("hidden");
  btnText.innerText = "Sending...";

  const formData = new FormData(form);

  try{

    const response = await fetch(
      "https://formspree.io/f/xzdwbvjo",
      {
        method:"POST",
        body:formData,
        headers:{
          'Accept':'application/json'
        }
      }
    );

    if(response.ok){

      popup.style.display = "block";

      confetti({
        particleCount:200,
        spread:120
      });

      form.reset();

      setTimeout(() => {
        popup.style.display = "none";
      },3000);

    }else{
      alert("Failed to send message.");
    }

  }catch(error){
    alert("Error sending message.");
  }

  loader.classList.add("hidden");
  btnText.innerText = "Send Message";

});

// Easter Egg Emojis
document.addEventListener("click", function(e){

  const emoji = document.createElement("div");

  emoji.innerHTML = "✨";

  emoji.style.position = "fixed";
  emoji.style.left = e.clientX + "px";
  emoji.style.top = e.clientY + "px";
  emoji.style.fontSize = "20px";
  emoji.style.pointerEvents = "none";

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  },1000);

});

// Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    backToTop.style.display = "flex";
  }else{
    backToTop.style.display = "none";
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});