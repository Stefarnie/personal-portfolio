
// Light Mode Toggle 
const toggleButton = document.getElementById("light-mode-toggle");
const modeIcon = document.getElementById("mode-icon");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Change icon based on light/dark mode
  if (document.body.classList.contains("light")) {
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");
    localStorage.setItem("light-mode", "enabled");
  } else {
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");
    localStorage.setItem("light-mode", "disabled");
  }
});

// Check localStorage on page load to persist the mode
if (localStorage.getItem("light-mode") === "enabled") {
  document.body.classList.add("light");
  modeIcon.classList.remove("fa-sun");
  modeIcon.classList.add("fa-moon");
}


//Typing animation
var typed = new Typed(".occupation",{
  strings:["Software Engineer","Systems Specialist","Coder"],
  typeSpeed: 100,
  BackSpeed: 10,
  loop:true
})

// Audio button
function toggleMusic() {
  var audio = document.getElementById("myAudio");
  var button = document.getElementById("audioButton");

  // If audio is paused, play it
  if (audio.paused) {
      audio.play();
      button.classList.add("playing");  // Add class to change button color
  } 
  // If audio is playing, pause
  else {
      audio.pause();
      button.classList.remove("playing"); 
  }
};

