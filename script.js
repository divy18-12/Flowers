onload = () => {
  const overlay = document.getElementById("startMessage");

  // wait for user click
  document.addEventListener("click", () => {

  // hide the start message
  document.getElementById("startMessage").style.display = "none";

  // start flower animation
  document.body.classList.remove("not-loaded");

  // play background music
  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();

}, { once: true });
