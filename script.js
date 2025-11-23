// ====== Mobile Menu Toggle ======
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ====== Fade-In Animation on Scroll ======
// This targets the feature cards and detail sections for a cool visual effect
const faders = document.querySelectorAll(".feature-card, .subscribe-card, .hero-inner, .tool-detail");

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ====== Subscribe / Contact Form ======
function subscribe(e){
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector("input[type='email']").value;
  // Use a more specific selector for the name input on contact page
  const nameInput = form.querySelector("input[name='name']"); 
  const name = nameInput ? nameInput.value : null;
  const message = form.querySelector("textarea")?.value;
  
  // Logic for Contact Page (Name/Message present)
  if(name && message){
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  } 
  // Logic for Subscription Form (Only email present)
  else if(email){
    alert(`Thank you! ${email} has been subscribed to AIToolsMaster.`);
    form.reset();
  }
  else{
    alert("Please enter all required fields.");
  }
}

// Make the function globally accessible for the forms
window.subscribe = subscribe; 

// ====== Smooth Scroll (Handles the "Learn More" links) ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    // Scroll smoothly to the target element ID
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// ====== Particles Background ======
const particleContainer = document.getElementById("particles");
if(particleContainer){
  for(let i=0;i<80;i++){
    const p = document.createElement("div");
    p.classList.add("p");
    p.style.left = `${Math.random()*100}%`;
    p.style.top = `${Math.random()*100}%`;
    p.style.width = `${Math.random()*3+2}px`;
    p.style.height = p.style.width;
    p.style.animationDuration = `${Math.random()*10+5}s`;
    particleContainer.appendChild(p);
  }
}
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
